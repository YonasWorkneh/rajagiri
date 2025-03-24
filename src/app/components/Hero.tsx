"use client";
import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Form from "./Form";

export default function Hero() {
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  return (
    <div className="mt-5 sm:mt-20 px-4 sm:px-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-[35px] md:text-[50px] sm:text-[60px] leading-[1.2] mb-6 sm:mb-10"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-[16px]  md:text-[25px] uppercase"
        >
          Reach new heights <br />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="font-bold text-[35px] md:text-[70px] sm:text-[60px]"
        >
          Advancing Healthcare with <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative before:content-[''] before:inline-block before:h-[2px] before:w-[160px] sm:before:w-[270px] before:absolute before:bottom-[-1px] before:left-4 sm:before:left-36 before:bg-[linear-gradient(135deg,rgba(0,0,0,0.1),#eb145c86,#eb145cbc,rgba(0,0,0,0.1))]"
          >
            Medical Tourism
          </motion.span>
        </motion.span>
        <br />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="text-lg sm:text-xl mb-5 text-gray-500 max-w-[600px]"
      >
        Discover top-tier medical treatments, expert doctors, and affordable
        care in world-renowned destinations. Your health journey starts here.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
        }}
      >
        <Button
          text="Book Your Treatment"
          onPress={() => setIsFormOpened(true)}
          btnStyles="mt-6 sm:mt-10 font-bold rounded-full text-[16px] sm:text-[18px] py-2 sm:py-3 px-4 sm:px-6 cursor-pointer"
        />
      </motion.div>
      {isFormOpened && (
        <Modal onClose={() => setIsFormOpened(false)}>
          <Form />
        </Modal>
      )}
    </div>
  );
}
