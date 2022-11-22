import { useState, useEffect } from "react";
import { signMessage } from "../utils/sign";
import Link from "next/link";
import Metamask from "./meta";

const MetamaskCon = ({client, connect}) => {

  return (
    <>
      {/* Navbar */}
      <nav className="fren-nav d-flex">
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="btn connect-btn" onClick={connect}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Navbar end */}
    </>
  );
};

export default MetamaskCon;
