import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Asegúrate de que el servidor esté corriendo

const Header = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  useEffect(() => {
    if (account) {
      console.log('Enviando cuenta de wallet:', account);
      socket.emit('walletAccount', account); // Enviar cuenta al servidor
    }
  }, [account]); // Ejecutar cuando cambie la cuenta

  const handleWallet = () => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  };

  return (
    <div id="header">
      <Link to="/" id="logo">
        NFT Room
      </Link>

      <div id="link-containers">
        <a>Start Hunting</a>
        <a>Dark NFTs</a>
        <a>Community</a>
        <a>Craft NFT</a>

        <button id="connect-wallet" onClick={handleWallet}>
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Header;
