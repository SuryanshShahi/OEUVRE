import Button from "@/shared/Button/Button";
import React, { useState } from "react";
import useNavbar from "./views/useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiOpenbadges } from "react-icons/si";
import Img from "@/shared/Img";
import { IoMailOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const Navbar = ({ navClass }: { navClass?: string }) => {
  const { isActive, setIsActive } = useNavbar();
  const routes = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <>
      <div
        className={`top-0 sticky flex text-white justify-between p-5 items-center w-full z-50 ${navClass}`}
        id="navbar"
      >
        <Img
          src="/images/icon.png"
          height={50}
          width={50}
          alt=""
          isLocal
          className="animate-pulse"
          onClick={() => router.push("/")}
        />
        {/* <div className="lg:flex hidden items-center gap-x-8">
          {["New Arrivals", "All Product", "Blogs", "Contact Us"]?.map(
            (item, idx) => (
              <div className="group" key={idx}>
                <div
                  className={`cursor-pointer ${
                    activeTab === idx && "font-bold text-[#C4EF17]"
                  }`}
                >
                  {item}
                </div>
                <div
                  className={`${
                    activeTab === idx ? "w-5" : "w-0 group-hover:w-5"
                  } h-[2px] duration-300 bg-[#C4EF17] mx-auto`}
                ></div>
              </div>
            )
          )}
        </div> */}
        <Img
          src="/images/logo.png"
          height={80}
          width={80}
          alt=""
          isLocal
          className="h-12 w-[150px]"
          onClick={() => router.push("/")}
        />
        <div className="w-fit md:flex hidden items-center group relative lg:absolute lg:right-44">
          <SiOpenbadges
            size={24}
            className="absolute right-3 cursor-pointer group-hover:text-black z-10"
          />
          <input
            className="outline-none bg-neutral-100 group-hover:w-[250px] duration-700 w-[50px] group-hover:opacity-[1] opacity-0 rounded-full text-black pl-5 group-hover:pr-10 h-12"
            placeholder="Enter Email, Stay Updated"
          />
        </div>

        <Button className="lg:flex hidden">Get Started</Button>
        <GiHamburgerMenu
          size={28}
          className="hidden"
          onClick={() => setIsActive(!isActive)}
        />
        <a href="mailto:oeuvreclothinglondon@gmail.com" className="lg:hidden">
          <IoMailOutline size={28} className="text-[#aaa]" />
        </a>
      </div>
      {isActive && (
        <div
          className="bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]"
          onClick={() => setIsActive(false)}
        />
      )}
      {isActive && (
        <div
          className="bg-primary text-white h-screen w-[300px] space-y-6 py-3 px-4 fixed top-0"
          id="sideBar"
        >
          <div className="font-black text-2xl">OEUVRE</div>
          {["New Arrivals", "All Product", "Blogs", "Contact Us"]?.map(
            (item, idx) => (
              <div className="group w-fit animate-sidebar" key={idx}>
                <div
                  className={`cursor-pointer ${
                    activeTab === idx && "font-bold"
                  }`}
                >
                  {item}
                </div>
                <div
                  className={`${
                    activeTab === idx ? "w-5" : "w-0 group-hover:w-5"
                  } h-[2px] duration-300 bg-black`}
                ></div>
              </div>
            )
          )}

          <div className="relative w-fit flex items-center mx-auto group">
            <SiOpenbadges
              size={24}
              className="absolute right-3 cursor-pointer z-10"
            />
            <input
              className="outline-none bg-neutral-100 group-hover:w-[268px] duration-700 w-[50px] group-hover:opacity-[1] opacity-0 rounded-full text-black pl-5 group-hover:pr-10 h-12"
              placeholder="Enter Email"
            />
          </div>
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
