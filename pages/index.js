import Head from "next/head";
import { Inter } from "@next/font/google";

import styles from "../styles/Home.module.css";
import Card from "@/components/Card";
import Header from "@/components/Header";

import { getFeeds } from "@/libs/rssPraser";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ feeds }) {
  return (
    <>
      <Head>
        <title>Developer Feed | Get the Latest Developer News</title>
        <meta
          name="description"
          content="A developer news feed that fetches latest, trending news from medium."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        twitter={{
          cardType: "summary_large_image",
        }}
        openGraph={{
          title: "Developer Feeds",
          description: "We are Developer Feeds! We feed news for Devs!!",
          siteName: "Developer Feeds",
          images: [
            {
              url: "/assets/main-logo.png",
              width: 1168,
              height: 934,
              alt: "Developer Feeds Logo",
              type: "image/png",
            },
          ],
        }}
      />
      <Header />
      <main className={styles.container}>
        {feeds.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const feeds = await getFeeds();
  return {
    props: {
      feeds,
    },
  };
}
