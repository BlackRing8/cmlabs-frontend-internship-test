import React from "react";
import Tentang from "../components/home_component/Tentang";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[url('/assets/background/bg1.jpg')] bg-cover bg-center">
        <div className="w-full h-full items-center flex-col lg:flex-wrap flex justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="w-[300px] h-[300px] lg:w-[700px] lg:h-[500px]  items-center flex lg:flex-col justify-center ">
            <h1 className="text-7xl lg:text-8xl font font-bold uppercase text-white lg:text-center">Grab Your Food</h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }} className="lg:flex hidden h-12 w-96 bg-white mt-5 items-center justify-around">
              <h2 className="uppercase font-bold text-3xl">everyday</h2>
              <h2 className="uppercase font-bold text-3xl">09.00 - 22.00</h2>
            </motion.div>
          </motion.div>
          <div className="flex lg:hidden w-[300px] h-[100px] lg:w-[700px] lg:h-[500px] ">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }} className="lg:hidden flex  h-12 w-96 bg-white  items-center justify-around ">
              <h2 className="uppercase font-bold text-2xl">everyday</h2>
              <h2 className="uppercase font-bold text-2xl">09.00 - 22.00</h2>
            </motion.div>
          </div>
        </div>
      </div>
      <Tentang />
    </>
  );
};

export default Home;
