'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import Link from 'next/link';

const InsightCard = ({ imgUrl, title, subtitle, index,services}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
   
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-black">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-black">
          {subtitle}
        </p>
        <a href="/" class="font-bold p-10px relative">
  {services}
  <span class="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-2px transition-all duration-200 opacity-0 group-hover:opacity-100">➔</span>
</a>


      </div>

    </div>
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[350px] w-full h-[300px] rounded-[10px] object-cover"
    />
  </motion.div>
);

export default InsightCard;
