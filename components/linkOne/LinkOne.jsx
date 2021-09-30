import { scaleAnimationUp } from "../../utils/Animations";
import Button from "../assets/Button";
import Titles from "../assets/Titles";
import PostCard from "../blog/PostCard";
import Busca from "./Busca";

export default function LinkOne({ articles }) {
  return (
    <section
      id="linkOne"
      className="p-4 mx-auto"
      // className="w-full px-3 h-auto pt-10 pb-28 bg-[#1A5B47] bg-opacity-10 shadow-sm flex items-center"
    >
      <div className="container w-full mx-auto">
        <div className="flex justify-between items-center w-full">
          <Titles title="Destaque" delay={0.2} />
          <Busca />
        </div>

        <hr className="border-white" />
        <div className="w-auto lg:flex justify-evenly lg:space-x-4">
          {articles &&
            articles
              .sort((a, b) => a.published_at - b.published_at)
              .slice(0, 3)
              .map((articles) => (
                <PostCard key={articles.id} articles={articles} />
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
