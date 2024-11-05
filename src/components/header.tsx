"use client"
import { useEffect } from 'react';
import $ from 'jquery';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import logoimg from '../../public/logo.png';
import { UnlockButtonBootstrap } from '@/web3/components/Wallet';
import { useAccount } from 'wagmi';

export default function Header() {
  useEffect(() => {
    // Function to add class on scroll
    const handleScroll = () => {
      if ($(window)?.scrollTop() ?? 0 > 50) {
        $('.main-header')?.addClass('scrolled');
      } else {
        $('.main-header')?.removeClass('scrolled');
      }
    };

    // Attach the scroll event listener
    $(window)?.on('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      $(window)?.off('scroll', handleScroll);
    };
  }, []);

  
  const account = useAccount().address?.toString()

  return (
    <>
      <header className='main-header'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/home" className='d-lg-none d-block'>
              <Image src={logoimg} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="mx-auto">
                <Nav.Link className='mx-3' href="#banner">Home</Nav.Link>
                <Nav.Link className='mx-3' href="#about">About</Nav.Link>
                <Nav.Link className='mx-3' href="#howtobuy">How to Buy</Nav.Link>
                <Nav.Link className='mx-3' href="#tokenomics">Tokenomics</Nav.Link>
                <Nav.Link className='mx-3' href="#roadmap">Roadmap</Nav.Link>
                { account ? 
                <Button href="/link" variant="primary">Buy Now</Button>
                : <></>}
                <UnlockButtonBootstrap ShowConnected ShowNotConnected />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
