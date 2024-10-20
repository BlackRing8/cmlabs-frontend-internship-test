import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="h-[750px] bg-yellow-300 w-full flex justify-center items-center lg:pt-24 px-2">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="bg-white h-[500px] lg:w-[700px] w-full rounded-2xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="text-lg mb-8 text-center">You can reach us through the following platforms:</p>

        <div className="flex flex-col items-center space-y-6">
          {/* Instagram Contact */}
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-pink-500 mb-3">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.3.4.5.2 1 .5 1.4 1 .4.4.8.9 1 1.4.2.5.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.3-.2.5-.5 1-1 1.4-.4.4-.9.8-1.4 1-.5.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.3-.4-.5-.2-1-.5-1.4-1-.4-.4-.8-.9-1-1.4-.2-.5-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.3.2-.5.5-1 1-1.4.4-.4.9-.8 1.4-1 .5-.2 1.1-.3 2.3-.4 1.2-.1 1.6-.1 4.8-.1m0-2.2C8.7 0 8.2 0 6.9.1 5.6.1 4.7.2 4 .4c-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1-.2.7-.3 1.6-.4 2.9-.1 1.3-.1 1.8-.1 4.9s0 3.6.1 4.9c.1 1.3.2 2.2.4 2.9.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.7.2 1.6.3 2.9.4 1.3.1 1.8.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.2-.2 2.9-.4.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.2-.7.3-1.6.4-2.9.1-1.3.1-1.8.1-4.9s0-3.6-.1-4.9c-.1-1.3-.2-2.2-.4-2.9-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.7-.2-1.6-.3-2.9-.4C15.8 0 15.3 0 12 0zM12 5.9c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 10c-2.2 0-3.9-1.7-3.9-3.9s1.7-3.9 3.9-3.9 3.9 1.7 3.9 3.9-1.7 3.9-3.9 3.9zm6.6-10.3c-.8 0-1.5.6-1.5 1.5s.6 1.5 1.5 1.5 1.5-.6 1.5-1.5-.7-1.5-1.5-1.5z"></path>
            </svg>
            <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
            <a href="https://instagram.com/,.gilang.p_" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Ikuti kami di instagram
            </a>
          </div>

          {/* WhatsApp Contact */}
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-green-500 mb-3">
              <path d="M12 0C5.372 0 0 5.373 0 12c0 2.114.553 4.187 1.597 6.03L.048 24l6.075-1.555A11.958 11.958 0 0 0 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0zm6.568 17.051c-.275.77-1.57 1.485-2.146 1.576-.571.09-1.292.128-2.08-.129-.482-.152-1.1-.348-1.89-.681-3.317-1.378-5.48-4.579-5.65-4.796-.17-.218-1.35-1.796-1.35-3.427 0-1.63.857-2.414 1.16-2.744.304-.33.666-.413.89-.413.224 0 .445.002.638.012.204.01.478-.077.748.573.275.665.94 2.29 1.02 2.457.082.166.136.363.027.581-.109.217-.165.353-.324.541-.165.196-.348.436-.497.585-.17.168-.348.351-.15.688.198.33.878 1.445 1.878 2.34 1.293 1.15 2.378 1.508 2.705 1.676.33.166.524.142.716-.085.192-.227.825-.96 1.046-1.29.218-.33.437-.278.742-.166.304.11 1.917.903 2.25 1.067.331.166.55.248.633.386.08.137.08.797-.196 1.566z"></path>
            </svg>
            <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
            <a href="https://wa.me/628175102726" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              Hubungi kami via WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
