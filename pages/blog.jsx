import BlogBanner from "../components/blog/BlogBanner";
import PostCard from "../components/blog/PostCard";

export default function Blog({ post }) {
  return (
    <>
      <div className="">
        <BlogBanner />
      </div>
      <section className="w-full px-3 h-auto pt-10 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm flex flex-col items-center">
        <div className="container w-full mx-auto">
          <hr className="border-white" />
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
