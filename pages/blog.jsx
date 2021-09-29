import BlogBanner from "../components/blog/BlogBanner";
import PostCard from "../components/blog/PostCard";
import NavbarBlog from "../components/navbar/NavbarBlog";

export default function Blog({ posts }) {
  return (
    <>
      <NavbarBlog />
      <div className="">
        <BlogBanner />
      </div>
      <section className="p-4">
        <div className="container w-full mx-auto">
          <div className="w-auto sm:flex sm:flex-wrap sm:justify-center">
            {posts.map((posts) => (
              <PostCard key={posts.id} posts={posts} />
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
