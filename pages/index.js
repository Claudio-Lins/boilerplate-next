import Head from "next/head";
import { fetchAPIBoilerplate, fetchAPISintonizat } from "../lib/api";
import LinkOne from "../components/linkOne/LinkOne";
import LinkFive from "../components/linkFive/LinkFive";
import LinkFour from "../components/linkFour/LinkFour";
import LinkThree from "../components/linkThree/LinkThree";
import LinkTwo from "../components/linkTwo/LinkTwo";
import Contacto from "../components/contacto/Contacto";
import Navbar from "../components/navbar/Navbar";

export default function Home({ articles, schedules }) {
  return (
    <div className="">
      <Head>
        <title>BoilerPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full">
        <LinkOne articles={articles} />
        <LinkTwo />
        <LinkThree />
        <LinkFour />
        <LinkFive />
        <Contacto />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const [articles, schedules] = await Promise.all([
    fetchAPIBoilerplate("/articles"),
    fetchAPISintonizat("/schedule"),
  ]);

  return {
    props: { articles, schedules },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
//   const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//     revalidate: 1,
//   };
// }
