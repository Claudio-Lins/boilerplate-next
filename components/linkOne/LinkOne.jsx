import { scaleAnimationUp } from "../../utils/Animations";
import Button from "../assets/Button";
import Titles from "../assets/Titles";
import PostCard from "../blog/PostCard";
import BlogBanner from "../blog/BlogBanner";
import BoxDestaque from "./BoxDestaque";
import Busca from "./Busca";

export default function LinkOne({ post }) {
  return (
    <section
      id="linkOne"
      className="w-full px-3 h-auto pt-10 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container w-full mx-auto">
        <div className="flex justify-between items-center w-full">
          <Titles title="Destaque" delay={0.2} />
          <Busca />
        </div>

        <hr className="border-white" />
        <div className="w-auto sm:flex justify-evenly sm:space-x-4">
          {post.slice(0, 3).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Button
          url={"/blog"}
          title="Todos"
          delay={0.4}
          variants={scaleAnimationUp}
        />
      </div>
    </section>
  );
}
