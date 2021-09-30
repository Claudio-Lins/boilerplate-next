import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo-config'
import "tailwindcss/tailwind.css";
import "../styles/style.css";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollTop";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <ScrollToTop />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
