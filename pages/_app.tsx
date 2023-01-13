import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import "./styles/globals.css";
import Head from "next/head";
import Web3sdksGuideFooter from "../components/Web3sdksGuideFooter";
import { MagicConnector } from "@web3sdks/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    rpcUrls: {
      [ChainId.Mumbai]: "https://rpc-mumbai.maticvigil.com",
    },
  },
});

// Array of wallet connectors you want to use for your dApp.
const connectors = [magicLinkConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
      chainRpc={{
        [ChainId.Mumbai]: "https://rpc-mumbai.maticvigil.com",
      }}
    >
      <Head>
        <title>web3sdks Magic.Link Wallet Connector</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Web3sdks's useMagic Hook To Connect User's To Your dApp Via Their Email, Phone Number, Or Social Media Account."
        />
        <meta
          name="keywords"
          content="Web3sdks, Magic, Magic.Link, Wallet Connector, Social Media Wallet Connector, Email Address Wallet Connector, Phone Number Wallet Connector"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdksGuideFooter />
    </Web3sdksProvider>
  );
}

export default MyApp;
