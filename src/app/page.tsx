"use client"
import "@/styles/app.css"
import React, { useEffect } from "react";
import Header from "@/components/header";
import Banner from "@/components/banner";
import LogoListing from "@/components/logo-listing";
import Table from "@/components/table";
import About from "@/components/about";
import HowToBuy from "@/components/how-to-buy";
import ContactAddress from "@/components/contract-address";
import Marque from "@/components/Marque";
import Roadmap from "@/components/roadmap";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { WalletContextProvider } from "@/web3/components/Wallet";
import { RefreshContextProvider } from "@/web3/components/RefreshContext";
import { store } from "@/web3/state";
import { Provider } from "react-redux";



export default function Home() {

  /*
  useEffect(() => {
    // Add Google Analytics Script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-DE76RJECFR";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics once the script is loaded
    script.onload = () => {
      window!.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-DE76RJECFR');
    };

    // Cleanup: remove the script if the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); */

  return (
    <>
      <WalletContextProvider>
      <RefreshContextProvider>
        <Provider store={store}>
          <Header />
          <Banner/>      
          <LogoListing/>
          <Table/>      
          <About/>      
          <HowToBuy/>   
          <ContactAddress/>   
          <Marque/>
          <Roadmap/>
          <Footer/>
        </Provider>
        </RefreshContextProvider>
        </WalletContextProvider>
    </>
  );
}
