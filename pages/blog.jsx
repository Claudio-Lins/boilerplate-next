import BlogBanner from "../components/blog/BlogBanner";
import PostCard from "../components/blog/PostCard";

export default function Blog({ post }) {
  return (
    <>
      <div className="">
        <BlogBanner />
      </div>
      <section className="p-4">
        <div className="container w-full mx-auto">
          <div className="w-auto sm:flex sm:flex-wrap sm:justify-center">
            {post.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
