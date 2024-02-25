import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Shedup</title>
        <meta
          name="description"
          content="Tenzin Chaksam's Software Engineer Portfolio."
        />
        <meta name="author" content="Shedup" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Software Engineer, Portfolio, Shedup, Tenzin Chaksam"
        />
        <link rel="icon" href="/static/vim.svg" />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}
