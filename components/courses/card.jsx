"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CourseCard({ course, index }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg rounded-lg overflow-hidden h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/course/${course.id}`} className="flex flex-col h-full">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-6 font cursor-pointer flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-4 font-about">{course.name}</h2>
          <p className="mb-8 text-gray-400 font-semibold font-poppins">
            {course.shortDescription}
          </p>

          <div className="flex w-full flex-col mt-auto">
            <div className="flex justify-between items-center">
              <p className="text-white bg-orange-500 shadow-lg px-4 py-2 rounded-lg text-xs font-poppins ">
                {course.specialty}
              </p>

              <p className="bg-green-500 text-white text-xs  px-2 py-1 rounded-lg">
                #pro
              </p>
            </div>

            <button></button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
