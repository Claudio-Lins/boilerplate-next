import Head from "next/head";
import LinkOne from "../components/linkOne/LinkOne";
import LinkFive from "../components/linkFive/LinkFive";
import LinkFour from "../components/linkFour/LinkFour";
import LinkThree from "../components/linkThree/LinkThree";
import LinkTwo from "../components/linkTwo/LinkTwo";
import Contacto from "../components/contacto/Contacto";

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
        <Contacto />
      </main>
    </div>
  );
}
