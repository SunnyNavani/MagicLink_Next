import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://2y745pchatut.usemoralis.com:2053/server"
      appId="3ZBXyIhhyNyEEsesxUnUH6z5Y9QuB78kfhGBWbwk"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
