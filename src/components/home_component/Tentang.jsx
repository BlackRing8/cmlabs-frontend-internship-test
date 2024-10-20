import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tentang = () => {
  return (
    <div className="w-full h-screen bg-yellow-300">
      <div className="h-full grid lg:flex justify-center items-center lg:gap-x-8">
        <motion.div className="w-[350px] h-[350px] lg:w-[700px] lg:h-[500px] p-2">
          <h3 className="text-3xl lg:text-5xl font-semibold text-start lg:text-end">
            Enjoy a ges makan disini dan nikmati kenikmatan tiada tara!
            <span className="text-gray-600">Jelajahi menu kami yang dirancang khusus untuk memenuhi setiap selera. Temukan pilihan yang akan memanjakan lidah Anda. </span>
            <span className="hidden ml-40 lg:flex w-3/4 h-20 border-b-2 border-black"></span>
          </h3>
        </motion.div>
        <motion.div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]  bg-[url('/assets/lain/food.jpg')] bg-cover bg-center rounded-3xl"></motion.div>
      </div>
    </div>
  );
};

export default Tentang;
