import { fetchAPIBoilerplate } from "../lib/api";
import LinkOne from "../components/linkOne/LinkOne";
import LinkFive from "../components/linkFive/LinkFive";
import LinkFour from "../components/linkFour/LinkFour";
import LinkThree from "../components/linkThree/LinkThree";
import LinkTwo from "../components/linkTwo/LinkTwo";
import Contacto from "../components/contacto/Contacto";
import Navbar from "../components/navbar/Navbar";
import Page from "../components/page";

export default function Home({ articles, schedule, programas, team }) {
  return (
    <Page title="BoilerPlate - Claudio Lins" path='/' description="Boilerplate">
      <div className="">
        <Navbar />
        <main className="flex flex-col items-center justify-center w-full">
          <LinkOne articles={articles} />
          <LinkTwo programas={programas} />
          <LinkThree schedule={schedule} />
          <LinkFour team={team} />
          <LinkFive />
          <Contacto />
        </main>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const [articles, schedule, programas, team] = await Promise.all([
    fetchAPIBoilerplate("/articles"),
    fetchAPIBoilerplate("/schedules"),
    fetchAPIBoilerplate("/programas"),
    fetchAPIBoilerplate("/teams")
  ]
    );

  return {
    props: { articles, schedule, programas, team },
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
