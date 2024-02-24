import { FC, PropsWithChildren, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { metaContent } from "@/utils/constant";
import Head from "next/head";
interface IPageWraps {
  wrapperClass?: string;
  isBanner?: boolean;
  seo?: any;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  seo,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  typeof window !== "undefined" && window.addEventListener("scroll", slideNav);
  return (
    <div>
      <Head>
        <title>{seo?.metaTitle ?? metaContent.TITLE}</title>
        <meta
          name="description"
          content={seo?.metaDescription ?? metaContent.DESCRIPTION}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={metaContent.FAVICON} />
        {/* <!-- ? ################### FAVICON SECTION ################### --> */}
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="theme-color" content="#333333" />
        {seo?.meta?.map((meta: any) => (
          <meta name={meta.name} key={meta.id} content={meta.content} />
        ))}
      </Head>
      <Navbar />
      <div className={wrapperClass}>{children}</div>
      {isActive && (
        <div
          className="z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-heading flex items-center justify-center"
          onClick={() => window.scroll(0, 0)}
        >
          <IoIosArrowUp />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PageWrapper;
