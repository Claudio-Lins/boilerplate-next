import Image from "next/image";

export default function BlogBanner() {
  return (
    <div className="relative md:py-0">
      <div>
        <Image
          src="/blog/blog-cover.jpg"
          alt="Blog - Sintoniza-t"
          layout="responsive"
          width={1920}
          height={550}
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 bg-black opacity-50 w-full h-full flex items-center justify-center">
        <div className=" text-gray-50 text-xl xl:text-5xl font-semibold text-center">
          Blog - Sintoniza-t
        </div>
      </div>
    </div>
  );
}
