"use client";

import React from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { PiTreeStructure } from "react-icons/pi";
import { MdRadioButtonChecked } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";

const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return { fullStars, hasHalfStar };
};

const renderStars = (rating) => {
  const { fullStars, hasHalfStar } = getStarRating(rating);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<IoStar key={i} className="text-orange-600" />);
  }
  if (hasHalfStar) {
    stars.push(<IoStarHalf key="half" className="text-orange-600" />);
  }
  stars.push(
    <span key="rating" className="text-lg font-inter">
      {rating}
    </span>
  );
  return stars;
};
const CourseDetails = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center bg-gray-900 pt-6 pb-20"
    >
      <div className="flex max-w-7xl w-full gap-20">
        <div className="">
          <div className="flex flex-col text-white max-w-3xl gap-6">
            <h1 className="text-4xl font-bold">{course.name}</h1>
            <p className="text-xl font-medium">{course.shortDescription}</p>
            <div className="flex gap-8">
              <p className="flex gap-2 items-center ">
                {renderStars(course.rating)}
              </p>
              <p className="bg-gray-100 px-2 py-1 shadow-md rounded-md text-black text-xs">
                Students enrolled: {course.enrolledstudents}
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-1"
            >
              Instructor Name:{" "}
              <span className="underline">{course.instructor}</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-1"
            >
              {course.location}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-20 border border-gray-100 shadow-lg shadow-gray-200 rounded-md max-w-2xl flex flex-col gap-4 text-white p-6"
          >
            <h1 className="text-2xl font-bold">Course outcomes</h1>
            {course.courseoutcome.map((outcome, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-3 items-center font-nunito"
              >
                <IoMdCheckmark className="text-green-600" size={25} /> {outcome}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="mt-14 max-w-4xl border border-gray-100 shadow-lg shadow-gray-200 rounded-md flex flex-col text-white "
          >
            <h1 className="font-bold text-2xl px-6 py-3 flex gap-2 mt-2 items-center ">
              <PiTreeStructure
                className="text-green-600 rotate-90 "
                size={25}
              />
              Course Structure
            </h1>
            <div className="flex justify-between items-center px-6 py-2">
              <p>Total lecture: {course.totallecture}</p>
              <p className="flex gap-1 items-center">
                <IoMdTime size={20} className="text-white" /> Total duration:{" "}
                {course.duration}
              </p>
            </div>
            {course.expandable.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="flex justify-between border border-gray-300 py-2 px-6  font-semibold font-nunito hover:bg-green-300 hover:text-black cursor-pointer"
              >
                <p>{item}</p>

                <p>Week-{index + 1}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 bg-orange-500 font-semibold hover:bg-orange-200 hover:text-gray-800  text-white rounded-md px-4 py-2 ">
            {course.schedule}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + course.expandable.length * 0.1 }}
            className=" max-w-2xl flex flex-col text-white mt-12"
          >
            <h1 className="font-bold text-2xl mb-4">Course Requirements</h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex gap-2 items-center"
            >
              <MdRadioButtonChecked size={25} className="text" />
              {course.Prerequisites}
            </motion.p>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className=" bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg rounded-lg overflow-hidden pb-9 w-96"
          >
            <img src={course.image} alt="" className="w-96 h-64 " />
            <div className="mt-6 flex-col gap-3 flex px-4">
              <p className="font-bold text-3xl font-inter"> ₹{course.price}</p>
              <p className="font-nunito">
                Includes{" "}
                <span className="font-extrabold text-white">
                  lifetime access
                </span>{" "}
                to current and future updates to the course. Learn at your own
                pace, anytime.
              </p>
              <button className="bg-green-500 px-6 py-2 items-center justify-center flex w-40 rounded-lg text-white font-poppins mx-auto mt-4">
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;
