import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Link from "next/link";

export default function PostCard({ articles }) {

  function formateDate() {
    const splittedDate = articles.published_at.slice(0, 10).split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
  }

  return (
    <>
      <div className="flex flex-col w-full mt-10 bg-white shadow-lg border rounded-lg overflow-hidden p-4">
        <div className="">
        
          <div className="">
            <Image
              src={articles.image.url || "/assets/picture.svg"}
              alt="images"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="text-xs font-thin text-gray-400 text-right mr-2 mt-2">
            {formateDate()}
          </div>
          <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 mt-2 leading-snug">
            <h2>{articles.title || "Sem título"}</h2>
          </div>
          <div className="text-gray-600 font-light text-sm mb-2 mx-3 antialiased prose">
            <ReactMarkdown>{articles.content.slice(0, 200) + " ..."}</ReactMarkdown>
          </div>

          <div className="flex justify-between w-full border-t border-gray-100">
            <div className="mt-3 px-2 flex flex-row w-full">
              <div className="flex text-gray-700 font-normal text-sm rounded-md items-center">
                Autor:
                <div className=" text-gray-400 font-thin text-xs">
                  <div className="flex flex-1 ml-1">{articles.author.name}</div>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full flex justify-end">
              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2     items-center">
                Categoria:
                <div className="ml-1 text-gray-400 font-thin text-xs">
                  {articles.category.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
