"use client";

import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ScrollArea } from "./scroll-area";

import { CiWallet } from "react-icons/ci";

export const ConnectButtons = () => {
  const { address, isConnected } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-sm xl:text-lg">
      {!isConnected ? (
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-sm bg-slate-800 hover:bg-white text-white hover:text-black font-semibold py-0 px-4 rounded-lg transition duration-300 ease-in-out flex items-center"
        >
          <CiWallet className="mr-2 " /> Connect Wallet
        </button>
      ) : (
        <>
          <div className="mb-2 text-sm  xl:border-none border-slate-700 mx-2 rounded-lg text-yellow-500">
            <span className="text-white">Status:</span>{" "}
            {isConnected ? "Connected" : "Disconnected"}
            <br />
            <span className="text-white">Address:</span>
            <div className="text-xs overflow-hidden text-ellipsis whitespace-nowrap">{address}</div>
          </div>

          <button
            type="button"
            onClick={() => disconnect()}
            className="text-sm bg-slate-800 hover:bg-slate-400 text-white font-semibold py-0 px-1 rounded-lg transition duration-300 ease-in-out"
          >
            Disconnect
          </button>
        </>
      )}

      {isOpen && !isConnected && (
        <div className="absolute flex bg-slate-900 border border-none mt-2 py-2 rounded-lg shadow-lg  z-10">
          <ScrollArea className="h-48">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => {
                  connect({ connector });
                  setIsOpen(false); // Cierra el dropdown después de seleccionar una wallet
                }}
                type="button"
                className="block w-full text-left px-4 py-2 text-white hover:text-black hover:bg-white"
              >
                {connector.name}
              </button>
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  );
};
