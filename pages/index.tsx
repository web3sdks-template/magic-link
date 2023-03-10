import styles from "./styles/Home.module.css";
import { useAddress, useDisconnect } from "@web3sdks/react";
import type { NextPage } from "next";
import { useState } from "react";
import { useMagic } from "@web3sdks/react/evm/connectors/magic";

const Home: NextPage = () => {
  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.
  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.

  const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>web3sdks + Magic.Link</h1>
        <p className={styles.explain}>
          Connect users to your dApp using their email or social media accounts
          using{" "}
          <b>
            {" "}
            <a
              href="https://web3sdks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              web3sdks
            </a>
          </b>{" "}
          and{" "}
          <b>
            {" "}
            <a
              href="https://magic.link/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              Magic.Link
            </a>
          </b>
          .
        </p>
        <hr className={styles.divider} />

        {address ? (
          <>
            <h2 style={{ fontSize: "1.3rem" }}>You&apos;re Connected! 👋</h2>{" "}
            <p>{address}</p>
            <a className={styles.mainButton} onClick={() => disconnectWallet()}>
              Disconnect Wallet
            </a>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "1.3rem" }}>Login With Email</h2>
            <div
              style={{
                width: 500,
                maxWidth: "90vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className={styles.textInput}
                style={{ width: "90%", marginBottom: 0 }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <a
                className={styles.mainButton}
                onClick={() => {
                  connectWithMagic({ email });
                }}
              >
                Login
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
