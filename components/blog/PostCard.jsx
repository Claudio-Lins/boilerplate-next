import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <>
      <div className="flex max-w-xl mt-10 bg-white shadow-lg border rounded-lg overflow-hidden mx-auto p-4">
        <div className="w-full">
          <div className="text-gray-400 max-w-xl h-[280px] sm:h-[320px] relative">
            <Image
              src={post.cover.url || "/assets/picture.svg"}
              alt="images"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-xs font-thin text-gray-400 text-right mr-2 mt-2">
            {post.date}
          </div>
          <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 mt-2 leading-snug">
            <h2>{post.title || "Sem título"}</h2>
          </div>
          <div className="text-gray-600 font-light text-sm mb-2 mx-3 antialiased">
            {post.content.slice(0, 200) + " ..."}
          </div>

          <div className="flex justify-between w-full border-t border-gray-100">
            <div className="mt-3 px-2 flex flex-row w-full">
              <div className="flex text-gray-700 font-normal text-sm rounded-md items-center">
                Autor:
                <div className=" text-gray-400 font-thin text-xs">
                  <div className="flex flex-1 ml-1">{post.author}</div>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full flex justify-end">
              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2     items-center">
                Categoria:
                <div className="ml-1 text-gray-400 font-thin text-xs">
                  {post.category.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
