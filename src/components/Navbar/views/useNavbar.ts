import useScrollHidden from "@/utils/hooks/useScrollHidden";
import { useRouter } from "next/router";
import { useState } from "react";

const useNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useScrollHidden(isActive);
  const slideNav = () => {
    var x: any = document.getElementById("navbar");
    if (window.scrollY >= 100) {
      if (x.classList === "active") {
        x.classList.remove("active");
      } else {
        x.classList.add("active");
      }
    } else {
      x.classList.remove("active");
    }
  };
  typeof window !== "undefined" && window.addEventListener("scroll", slideNav);

  return { router, isActive, setIsActive };
};

export default useNavbar;
