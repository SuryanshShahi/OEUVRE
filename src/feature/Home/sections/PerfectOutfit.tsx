// import Img from "@/shared/Img";
// import React from "react";

// const PerfectOutfit = () => {
//   return (
//     <div className="relative bg-neutral-100 py-20 px-5">
//       <p className="md:text-4xl text-3xl text-center md:leading-[60px] leading-[50px] max-w-[1140px] mx-auto md:px-10">
//       Elevate your style game to new heights with our exclusive collection
//         <Img
//           src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4361.jpg"
//           alt="image"
//           height={32}
//           width={96}
//           className="md:h-10 float-start mt-3 rounded-full object-cover "
//           isLocal
//         />
//         Each garment tells a unique story, meticulously designed to reflect
//         <Img
//           src="/images/vr.webp"
//           alt="image"
//           height={32}
//           width={96}
//           className="md:h-10 float-right mt-3 rounded-full"
//           isLocal
//         />
//         the essence of modern <b>luxury</b> 
//         <Img
//           src="/images/vr.webp"
//           alt="image"
//           height={32}
//           width={96}
//           className="md:h-10 float-start mt-3 rounded-full"
//           isLocal
//         />
//         while embracing the beauty of artistic exploration.
//       </p>
//     </div>
//   );
// };

// export default PerfectOutfit;

import Img from "@/shared/Img";
import React from "react";

const PerfectOutfit = () => {
  return (
    <div className="relative bg-neutral-100 py-20 px-5">
      <p className="md:text-4xl text-3xl text-center md:leading-[60px] leading-[50px] max-w-[1140px] mx-auto md:px-10 ">
        Elevate your style game to new heights with our exclusive collection. <br/> Each <b className="">garment</b> 
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4221.jpg"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        tells a unique <b className="">story</b>, meticulously designed
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4326.jpg"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        to reflect the essence of modern <b className="">luxury</b>
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4023.jpg"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        while embracing the beauty of artistic exploration.
      </p>
    </div>
  );
};

export default PerfectOutfit;
