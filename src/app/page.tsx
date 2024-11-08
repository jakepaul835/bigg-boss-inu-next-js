"use client"
import Header from "@/components/header";
import "../app/app.css"
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
