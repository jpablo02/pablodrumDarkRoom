import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers(); // Obtener la cuenta conectada
  const etherBalance = useEtherBalance(account);
  console.log(account);

  // Manejar la conexión o desconexión de la wallet
  const handleWallet = () => {
    if (account) {
      deactivate(); // Desconectar la wallet
    } else {
      activateBrowserWallet(); // Activar la billetera del navegador
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

        {/* Botón  */}
        <button id="connect-wallet" onClick={handleWallet}>
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Header;
