import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import io from "socket.io-client"; // Importar socket.io-client

const socket = io("http://localhost:3000"); // Conectar al servidor

const Header = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);

  useEffect(() => {
    if (account) {
      // Enviar la cuenta de la wallet al servidor a través de sockets
      socket.emit('walletAccount', account);
    }
  }, [account]); // Ejecutar cuando 'account' cambie

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
