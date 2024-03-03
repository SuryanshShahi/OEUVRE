import Img from "@/shared/Img";
import Modal from "@/shared/Modal/Modal";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "@/shared/Button/Button";
import useJustDropped from "../views/useJustDropped";

const DroppedModal = ({ close }: { close: () => void }) => {
  const { values, handleChange, handleSubmit } = useJustDropped(close);
  return (
    <Modal
      onClose={close}
      className="!bg-transparent animate-sidebar px-4 max-w-[480px]"
    >
      <div className="bg-[#1B1B1B] space-y-8 rounded-2xl sm:p-6 p-4">
        <div className="flex justify-between items-center">
          <Img
            src="/images/icon.png"
            height={50}
            width={50}
            alt=""
            isLocal
            className="animate-pulse"
          />
          <div
            onClick={close}
            className="bg-[#2A2A2A] sm:h-14 sm:w-14 h-12 w-12 rounded-full flex justify-center items-center"
          >
            <RxCross2 size={24} className="text-white" />
          </div>
        </div>
        <div className="text-[26px] font-medium leading-7">Hype Alert!</div>
        <p className="leading-5 text-[#999999]">
          This product is currently off duty and enjoying some well-deserved
          hype. Seize the opportunity to cop it once it restocks soon.
        </p>
        <p className="leading-5 text-[#999999]">
          Subscribe to the waitlist and{" "}
          <span className="text-white text-xl">we’ll notify</span> you promptly
          when it’s ready to level up your street style!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={values?.email}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-white bg-[#2b2b2b] text-white outline-none px-4"
            placeholder="Enter Email"
            required
          />
          <Button
            type="submit"
            className="flex items-center rounded-lg gap-x-2 !text-black bg-white w-full py-2 px-3 justify-center"
          >
            <Img
              src="/images/adduser.png"
              height={18}
              width={18}
              alt=""
              isLocal
            />
            Join the Waitlist
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default DroppedModal;
