import React from "react";
import Button from "../utils/Button";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-24 min-h-screen  mt-12 ">
        <h1 className="text-6xl font-bold text-primary mb-5">
          Rhythm Nation Blog
        </h1>
        <p className="text-2xl font-semibold mb-24">
          Join the Community and learn from Music Producers and Enthusiasts
        </p>
        <div className="flex max-md:flex-col gap-5 items-start justify-between">
          <div className="max-md:w-full md:max-w-[400px] flex">
            <img
              src="./images/photoshoot.jpg"
              alt="photo"
              width="400"
              height="400"
              className="object-cover max-w-full  rounded-lg"
            />
          </div>
          <div className="flex-grow  flex">
            <div className="flex gap-5 mb-3">
              <Button title="latest" />
              <Button title="latest" />
            </div>
            <h2 className="text-5xl text-black"></h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
