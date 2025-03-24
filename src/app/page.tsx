"use client";
import React, { useRef, useEffect, useState } from "react";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Image from "next/image";
import { motion, useInView, animate, useAnimation } from "framer-motion";
import Modal from "./components/Modal";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

const Counter = ({ from, to, duration = 1, className = "" }: CounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (node) {
            node.textContent = value.toFixed(0);
            if (to % 1 !== 0) {
              node.textContent += "+";
            }
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return (
    <span ref={nodeRef} className={className}>
      {from}
    </span>
  );
};

export default function Page() {
  const missionRef = useRef(null);
  const statsRef = useRef(null);
  const circlesRef = useRef(null);
  const scienceRef = useRef(null);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const footerRef = useRef(null);
  const playBtn = useRef(null);
  const [videoIndex, setVideoIndex] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Oncology",
      image: "/img/card1.jpg",
      description: "World-class cancer treatment and care",
    },
    {
      id: 2,
      title: "Cardiology",
      image: "/img/card2.jpeg",
      description: "Advanced heart surgery and treatments",
    },
    {
      id: 3,
      title: "Neurology",
      image: "/img/neuro.jpg",
      description: "Expert neurology care abroad for advanced spine surgery",
    },
    {
      id: 4,
      title: "Pediatrics",
      image: "/img/pedo.avif",
      description:
        "World-class pediatric care abroad for specialized treatments",
    },
  ]);

  const cardControls = [useAnimation(), useAnimation(), useAnimation()];
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.5 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isCirclesInView = useInView(circlesRef, { once: true, amount: 0.3 });
  const isScienceInView = useInView(scienceRef, {
    once: true,
    amount: 0.3,
    margin: "-200px 0px",
  });
  const isSliderInView = useInView(sliderRef, { once: true, amount: 0.3 });
  const isVideoInView = useInView(videoRef, {
    once: true,
    amount: 0.3,
  });
  const isFooterInView = useInView(footerRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div className="bg-[#ddd] min-h-screen pt-5 sm:pt-10 w-full">
      {/* px-4 sm:px-10 md:px-20 so that not carousal would not be affected by the padding */}
      <div className="md:px-20 px-4 ">
        <header>
          <Logo />
          <Nav />
        </header>
        <div className="grid items-center gap-14 md:gap-0 md:grid-cols-[3fr_1fr] mt-5 md:mt-0">
          <Hero />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.8,
              duration: 0.3,
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{ transformOrigin: "center center" }}
            className="bg-[#ffffff30] grid place-items-center border border-white w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full relative mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.03, 1],
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: 1,
                duration: 0.3,
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
              style={{ transformOrigin: "center center" }}
              className="bg-[#ffffff2a] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] border border-white rounded-full"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  delay: 1.3,
                  duration: 1,
                }}
                style={{ transformOrigin: "center center" }}
                className="absolute inset-0 grid place-items-center"
              >
                <div className="relative w-[280px] h-[280px] left-[-50px] top-[-40px] sm:w-[400px] sm:h-[400px] sm:left-[-90px] sm:top-[-75px]">
                  <div className="w-full h-full">
                    <Image
                      src="/img/heart.png"
                      alt="heart image"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* white circle dots */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bg-white/20 size-4 sm:size-6 rounded-full grid place-items-center top-[0.5rem] sm:top-[0rem] left-[5rem] sm:left-[6rem] border border-white/10"
                  style={{ backdropFilter: "blur(2px)" }}
                >
                  <div className="bg-white size-[10px] sm:size-[14px] rounded-full"></div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="absolute bg-white/40 backdrop-blur-3xl size-4 sm:size-6 rounded-full grid place-items-center top-[4.5rem] sm:top-[6rem] left-[1.5rem] sm:left-[1rem]"
                >
                  <div className="bg-white size-[10px] sm:size-[14px] rounded-full"></div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.9,
                  }}
                  className="absolute bg-white/40 backdrop-blur-3xl size-4 sm:size-6 rounded-full grid place-items-center bottom-[-.5rem] sm:bottom-[-2rem] right-[4rem] sm:right-[5rem]"
                >
                  <div className="bg-white size-[10px] sm:size-[14px] rounded-full"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="bg-[#ffffff40] z-[100] flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-20 sm:mt-28 p-6 sm:p-10 w-fit rounded-[30px] sm:rounded-[40px] mx-auto sm:mx-0">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Image
                src="/img/test.jpg"
                alt="top1"
                width={400}
                height={400}
                className="size-16 sm:size-24 rounded-full mt-[-60px] sm:mt-[-120px] object-cover object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative ml-[10px] sm:ml-[20px]"
            >
              <Image
                src="/img/test2.jpg"
                alt="top1"
                width={100}
                height={100}
                className="size-14 sm:size-16 rounded-full  object-center object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative ml-[-10px] sm:ml-[-20px]"
            >
              <Image
                src="/img/test3.avif"
                alt="top1"
                width={100}
                height={100}
                className="size-14 sm:size-16 rounded-full  object-center"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative ml-[-10px] sm:ml-[-20px]"
            >
              <Image
                src="/img/test4.jpg"
                alt="top1"
                width={100}
                height={100}
                className="size-14 sm:size-16 rounded-full  object-center object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="text-center sm:text-left mt-4 sm:mt-0"
          >
            <span className="font-bold text-xl sm:text-2xl">
              1000+ <br />
            </span>
            <span className="text-gray-500 text-sm sm:text-base">
              Happy Customers
            </span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-gray-700 hover:bg-white/30 transition-colors"
            onClick={() => setIsVideoOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
            Watch Video
          </motion.button>
        </div>
        {/* Stats and Mission Section */}
        <motion.h1
          ref={missionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/70 leading-tight mt-24 sm:mt-32 md:mt-56 px-4 sm:px-0"
        >
          Our Mission
        </motion.h1>
        <div className="mt-16 sm:mt-20 md:mt-32 grid md:grid-cols-2 gap-10 md:gap-20">
          {/* Mission Statement */}
          <div
            className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
            ref={circlesRef}
          >
            {/* Concentric Circles */}
            <div className="relative w-full h-full max-w-[600px] mx-auto">
              {/* Largest Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isCirclesInView
                    ? {
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/50 bg-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Middle Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isCirclesInView
                    ? {
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                }}
                className="absolute w-[225px] h-[225px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-white/50 bg-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Smallest Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isCirclesInView
                    ? {
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/50 bg-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Inner Circle with Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isCirclesInView
                    ? {
                        opacity: [0, 1, 0],
                        scale: [0.8, 1, 0.8],
                      }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="absolute grid place-items-center w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] rounded-full border border-white/50 bg-white/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] rounded-full border border-white/50 bg-white/5"
                />
              </motion.div>

              {/* Process Steps */}
              {/* Initial Consultation - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isCirclesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-[5%] sm:top-[10%] md:top-[15%] right-[5%] flex items-center gap-2"
              >
                <div className="bg-[#eb145c89] w-2 h-2 rounded-full" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Initial Medical
                  <br />
                  Consultation
                </span>
              </motion.div>

              {/* Treatment Planning - Middle Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isCirclesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-[45%] right-[5%] sm:right-[10%] md:right-[15%] flex items-center gap-2"
              >
                <div className="bg-[#eb145c89] w-2 h-2 rounded-full" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Treatment
                  <br />
                  Planning
                </span>
              </motion.div>

              {/* Travel Arrangements - Middle Left */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isCirclesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-[30%] left-[5%] sm:left-[10%] md:left-[15%] flex items-center gap-2"
              >
                <div className="bg-[#eb145c89] w-2 h-2 rounded-full" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Travel
                  <br />
                  Arrangements
                </span>
              </motion.div>

              {/* Medical Procedure - Bottom */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isCirclesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-[20%] left-[30%] sm:left-[35%] md:left-[40%] flex items-center gap-2"
              >
                <div className="bg-[#eb145c89] w-2 h-2 rounded-full" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Medical Procedure
                </span>
              </motion.div>

              {/* Recovery & Follow-up - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isCirclesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-[35%] left-[5%] flex items-center gap-2"
              >
                <div className="bg-[#eb145c89] w-2 h-2 rounded-full" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Recovery &<br />
                  Follow-up
                </span>
              </motion.div>
            </div>
          </div>
          <div>
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 px-4 sm:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10 sm:mb-20">
                Our mission is to connect you with world-class healthcare,
                <span className="text-gray-400 block mt-2">
                  making quality medical treatments accessible and affordable
                  across borders.
                </span>
              </h2>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0 }}
              animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-8 md:gap-12 px-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <h3 className="text-4xl sm:text-5xl font-bold relative">
                  <span className="relative inline-block">
                    <Counter from={0} to={2} duration={0.8} />
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isStatsInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#eb145c89] origin-left"
                    />
                  </span>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base py-2">
                  Years OF Expertise
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <h3 className="text-4xl sm:text-5xl font-bold relative">
                  <span className="relative inline-block">
                    <Counter from={0} to={4} duration={0.8} />+
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isStatsInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#eb145c89] origin-left"
                    />
                  </span>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base py-2">
                  Countries In Service
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <h3 className="text-4xl sm:text-5xl font-bold relative">
                  <span className="relative inline-block">
                    <Counter from={0} to={76} duration={0.8} />%
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isStatsInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#eb145c89] origin-left"
                    />
                  </span>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base py-2">
                  accuracy rate in medical procedures
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-2"
              >
                <h3 className="text-4xl sm:text-5xl font-bold relative">
                  <span className="relative inline-block">
                    <Counter from={0} to={26} duration={0.8} />
                    k+
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={isStatsInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#eb145c89] origin-left"
                    />
                  </span>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base py-2">
                  Satisfied Customers
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {isVideoOpen && (
          <Modal onClose={() => setIsVideoOpen(false)}>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10 sm:mb-20 text-center text-white z-50 relative"
              >
                Over{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  1000+{" "}
                </motion.span>
                people trust us
              </motion.h1>
              <div
                className="sm:w-[1000px] sm:h-[600px] relative"
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest(".plyBtn")) return;
                  if (videoRef2.current.paused) {
                    videoRef2.current.play();
                    playBtn.current.style.display = "none";
                  } else {
                    videoRef2.current.pause();
                    playBtn.current.style.display = "flex";
                  }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="sm:w-[1000px] sm:h-[600px] relative"
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest(".plyBtn")) return;
                    if (videoRef2.current.paused) {
                      videoRef2.current.play();
                      playBtn.current.style.display = "none";
                    } else {
                      videoRef2.current.pause();
                      playBtn.current.style.display = "flex";
                    }
                  }}
                >
                  <motion.div
                    key={videoIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <video
                      src={`/vid/test${videoIndex}.mp4`}
                      className="w-full h-full object-cover rounded-lg"
                      ref={videoRef2}
                    />
                  </motion.div>
                  {/* Left Button */}
                  <button
                    className="cursor-pointer absolute left-[-60px] top-1/2 -translate-y-1/2 border border-white text-white p-3 rounded-full transition-colors z-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoIndex === 1) return;
                      playBtn.current.style.display = "flex";
                      setVideoIndex(videoIndex - 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  {/* Right Button */}
                  <button
                    className="cursor-pointer absolute right-[-60px] top-1/2 -translate-y-1/2 border border-white text-white p-3 rounded-full transition-colors z-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoIndex === 2) return;
                      setVideoIndex(videoIndex + 1);
                      playBtn.current.style.display = "flex";
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center rounded-lg">
                    <button
                      className="bg-white size-16 rounded-full border-none flex items-center justify-center cursor-pointer plyBtn"
                      ref={playBtn}
                      onClick={(e) => {
                        videoRef2.current?.play();
                        videoRef2.current.dataset.playing = "true";
                        playBtn.current.style.display = "none";
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 sm:w-8 sm:h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Modal>
        )}
        {/* Science Behind Our Services Section */}
        <div className="mt-20 sm:mt-40 md:mt-56 mb-20" ref={scienceRef}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={
              isScienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black/90 leading-tight mb-8 sm:mb-12 px-4 sm:px-0"
          >
            The Science Behind <br />
            Our Services
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 md:gap-20 px-4 sm:px-0">
            {/* Left side - intentionally left blank */}
            <div></div>

            {/* Right side content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isScienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 sm:mb-16 md:mb-20"
            >
              Pioneering{" "}
              <span className="text-gray-700/50 font-semibold">
                medical tourism
              </span>
              , we connect patients with world-class healthcare facilities,{" "}
              <span>
                leveraging{" "}
                <span className="text-gray-700/50 font-semibold">
                  cutting-edge technologies
                </span>{" "}
                like{" "}
                <span className="text-gray-700/50 font-semibold">
                  genomic sequencing
                </span>{" "}
                and
                <span className="text-gray-700/50 font-semibold">
                  {" "}
                  AI-driven diagnostics
                </span>{" "}
                to ensure personalized, high-quality treatment abroad.
              </span>
              .
            </motion.p>
          </div>

          {/* Timeline Section */}
          <div className="relative mt-16 sm:mt-20 md:mt-24 px-4 sm:px-0">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isScienceInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute h-[1px] w-full bg-gray-700/20 top-[32px] -translate-y-1/2 origin-left hidden md:block"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isScienceInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-[1px] bg-gray-700/20 h-full left-[32px] md:hidden origin-top"
            />

            {/* Timeline Points */}
            <div className="relative flex flex-col md:flex-row gap-8 sm:gap-12">
              {[
                {
                  title: "Initial Consultation",
                  description:
                    "Free medical assessment and treatment planning with specialists.",
                  id: 1,
                },
                {
                  title: "Travel Planning",
                  description:
                    "Customized travel arrangements and visa assistance.",
                  id: 2,
                },
                {
                  title: "Hospital Selection",
                  description:
                    "Access to our network of accredited healthcare facilities.",
                  id: 3,
                },
                {
                  title: "Treatment Coordination",
                  description: "Seamless medical procedures and post-op care.",
                  id: 4,
                },
                {
                  title: "Recovery Support",
                  description:
                    "Comfortable accommodation and 24/7 medical assistance.",
                  id: 5,
                },
                {
                  title: "Follow-up Care",
                  description:
                    "Continued support and virtual consultations post-return.",
                  id: 6,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 cursor-pointer mt-10"
                  onClick={() => {
                    setActiveItem(item.id);
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isScienceInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: isScienceInView ? 0.8 + index * 0.1 : 0,
                    }}
                    className={`cursor-pointer absolute sm:top-[-15px] -translate-y-1/2 sm:left-1/2 left-[10px] top-2  grid place-items-center size-[12px] sm:size-[14px] rounded-full transition-colors duration-300 ease-in-out ${
                      item.id === activeItem ? "bg-[#eb145c89]" : "bg-gray-400"
                    } relative z-10 mt-1.5`}
                  >
                    {item.id === activeItem && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute size-4 sm:size-6 bg-[#eb145c52] rounded-full"
                      />
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isScienceInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: isScienceInView ? 0.6 + index * 0.1 : 0,
                    }}
                    className="flex-1 py-2 px-2 sm:px-0"
                  >
                    <motion.p
                      animate={{
                        opacity: item.id === activeItem ? 1 : 0.2,
                        y: item.id === activeItem ? 0 : 5,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className={`text-xs sm:text-sm text-gray-700 font-medium sm:text-center`}
                    >
                      {item.title}
                      <br />
                      <motion.span
                        animate={{
                          opacity: item.id === activeItem ? 1 : 0.2,
                          y: item.id === activeItem ? 0 : 5,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="text-[10px] sm:text-xs text-gray-700 sm:text-center"
                      >
                        {item.description}
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Slider Section */}
      <div
        className="relative py-10 sm:py-20 mt-40 sm:mt-96 mb-40 sm:mb-72"
        ref={sliderRef}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={
            isSliderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              <div className="flex items-center gap-4 sm:gap-10 px-4 sm:px-10">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Premium Healthcare
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Expert Surgeons
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Luxury Recovery
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  24/7 Support
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Global Network
                </span>
              </div>
              <div className="flex items-center gap-4 sm:gap-10 px-4 sm:px-10">
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Premium Healthcare
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Expert Surgeons
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Luxury Recovery
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  24/7 Support
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-400 uppercase">
                  /
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-800/80 uppercase">
                  Global Network
                </span>
              </div>
            </motion.div>
          </div>

          {/* Stacked Cards Section */}
          <div className="absolute flex justify-center items-center  top-[-20px] sm:top-[-50px] left-[80%] sm:left-[60%] md:left-[60%] z-[10000]">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute bg-[#e3e1e1] grid rounded-lg p-2 sm:p-4 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[400px] shadow-2xl transform -translate-x-1/2 backdrop-blur-sm border border-white/20"
                style={{
                  zIndex: 30 - index * 10,
                  gridTemplateRows: "3fr 1fr",
                  justifyContent: "space-between",
                  alignItems: "self-end",
                  y: index * 8,
                  rotate: index === 1 ? -4 : index === 2 ? 4 : 0,
                }}
                animate={cardControls[index]}
                drag={index === 0 ? true : false}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.7}
                whileDrag={{ scale: 1.05 }}
                onDragEnd={(e, { offset }) => {
                  const swipeX = Math.abs(offset.x);
                  const swipeY = Math.abs(offset.y);
                  const threshold = 100;

                  if (swipeX > threshold || swipeY > threshold) {
                    // Calculate the direction vector
                    const angle = Math.atan2(offset.y, offset.x);
                    const distance = 1000;
                    const targetX = Math.cos(angle) * distance;
                    const targetY = Math.sin(angle) * distance;

                    cardControls[0]
                      .start({
                        x: targetX,
                        y: targetY,
                        opacity: 0,
                        transition: { duration: 0.5 },
                      })
                      .then(() => {
                        // Remove the card from the array
                        setCards((prevCards) => prevCards.slice(1));
                      });
                  }
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover h-full w-full"
                />
                <div className="p-2 sm:p-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="md:px-20 px-4 flex justify-center" ref={videoRef}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isVideoInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 sm:w-full w-[90%] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-[linear-gradient(#00000036,#00000073),url('/img/rajagiri.jpg')] bg-center bg-cover bg-no-repeat rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px]"
        >
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 md:gap-5">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] cursor-pointer bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-white/30 text-gray-700 hover:bg-white/30 transition-colors"
              onClick={() => setIsVideoOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              Watch Video
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2 cursor-pointer bg-[#eb145cbb] backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 text-[14px] sm:text-[16px] md:text-[18px] rounded-full border border-white/40 text-white hover:bg-[#eb145c] transition-colors"
            >
              Make Appointment
            </motion.button>
          </div>
          <div className="mt-auto">
            <h2 className="font-bold text-[25px] sm:text-3xl md:text-4xl lg:text-5xl text-[#eee] uppercase leading-tight">
              World class hospital in India <br /> and the World.
            </h2>
          </div>
        </motion.div>
      </div>
      {/* Footer Section with Wave Animation */}
      <footer className="relative mt-40 sm:mt-60 md:mt-80" ref={footerRef}>
        {/* Wave Animation */}
        <div className="absolute top-0 left-0 z-50 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[100px] sm:h-[150px] md:h-[200px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#eb145cbb"
              initial={{
                d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
              }}
              animate={
                isFooterInView
                  ? {
                      d: [
                        "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                        "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                        "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                      ],
                    }
                  : {
                      d: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* Footer Content */}
        <div className="relative bg-gradient-to-b from-[#f8f9fa] to-[#f1f3f5] pt-20 sm:pt-56 pb-10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between md:grid-cols-4 gap-8 sm:gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-gray-800 text-xl sm:text-2xl font-bold">
                  Raji Health
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Connecting patients with world-class healthcare facilities
                  across borders.
                </p>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <h4 className="text-gray-800 text-lg sm:text-xl font-semibold">
                  Services
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                    >
                      Medical Tourism
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                    >
                      Treatment Planning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                    >
                      Travel Arrangements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors"
                    >
                      Post-Treatment Care
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                <h4 className="text-gray-800 text-lg sm:text-xl font-semibold">
                  Contact Us
                </h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 text-sm sm:text-base">
                    123 Mexico District
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    Addis Ababa, Ethiopia
                  </li>
                  <li className="text-gray-600 text-sm sm:text-base">
                    +251 911 123 456
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm sm:text-base">
                  © 2025. All rights reserved.
                </p>
                <div className="flex gap-4 sm:gap-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 text-sm sm:text-base transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 text-sm sm:text-base transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
