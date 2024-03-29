import clsx from "clsx";

const styles = {
  backButton: (className?: string) =>
    clsx(
      `flex w-fit cursor-pointer items-center gap-1 font-medium md:text-xl relative`,
      className
    ),
  backButtonIcon: "text-xl md:text-2xl",
  buttonName: "absolute left-6",
  buttonWrapper:
    "absolute left-[-0.4rem] z-[1] w-20 transition-all duration-500 hover:left-[-15px]",
  buttonClass: (fullWidth?: boolean, size?: string, className?: string) =>
    clsx(
      "h-max font-sensei rounded-full border-2 hover:text-black hover:bg-white border-white bg-transparent text-white duration-500 py-2 px-7 text-base",
      {
        "p-1 text-sm": size === "sm",
        "p-3 text-lg": size === "lg",
      },
      className
    ),
  arrows: {
    next: "absolute -bottom-16 right-[35%] w-fit z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 min-[700px]:right-4",
    prev: "absolute -bottom-16 right-[55%] w-fit z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 min-[700px]:right-16",
  },
};

export default styles;
