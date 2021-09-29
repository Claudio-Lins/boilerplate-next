import Head from "next/head";
import { fetchAPIRedeDois, fetchAPISintonizat } from "../lib/api";
import LinkOne from "../components/linkOne/LinkOne";
import LinkFive from "../components/linkFive/LinkFive";
import LinkFour from "../components/linkFour/LinkFour";
import LinkThree from "../components/linkThree/LinkThree";
import LinkTwo from "../components/linkTwo/LinkTwo";
import Contacto from "../components/contacto/Contacto";
import Navbar from "../components/navbar/Navbar";

export default function Home({ posts, schedules }) {
  return (
    <div className="">
      <Head>
        <title>BoilerPlate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full">
        <LinkOne posts={posts} />
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
  const [posts, schedules] = await Promise.all([
    fetchAPIRedeDois("/posts"),
    fetchAPISintonizat("/schedule"),
  ]);

  return {
    props: { posts, schedules },
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
