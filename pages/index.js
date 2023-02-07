import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "../styles/Home.module.css";

import googleImg from "../assets/google.jpg";

import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <main className={styles.container}>
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}
