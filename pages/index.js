import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LinkOne from "../components/link01/LinkOne";
import LinkFive from "../components/linkFive/LinkFive";
import LinkFour from "../components/linkFour/LinkFour";
import LinkThree from "../components/linkThree/LinkThree";
import LinkTwo from "../components/linkTwo/LinkTwo";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BoilerPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        <LinkOne />
        <LinkTwo />
        <LinkThree />
        <LinkFour />
        <LinkFive />
      </main>
    </div>
  );
}
