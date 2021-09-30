import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Page({ title, description, path, children }) {
    const url = `https://clins-boilerplate.vercel.app${path}`
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        url={url}
        openGraph={{ url, title }}
      />
      {children}
    </div>
  );
}
