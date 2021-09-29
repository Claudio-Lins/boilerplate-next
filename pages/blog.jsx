import { fetchAPIBoilerplate } from "../lib/api";

import BlogBanner from "../components/blog/BlogBanner";
import PostCard from "../components/blog/PostCard";
import NavbarBlog from "../components/navbar/NavbarBlog";

export default function Blog({ articles }) {
  return (
    <>
      <NavbarBlog />
      <div className="">
        <BlogBanner />
      </div>
      <section className="p-4">
        <div className="container mx-auto">
          <div className="sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
            {articles.map((articles) => (
              <PostCard key={articles.id} articles={articles} />
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const [articles] = await Promise.all([
    fetchAPIBoilerplate("/articles")
  ]);

  return {
    props: { articles },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
//   const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 1,
//   };
// }
