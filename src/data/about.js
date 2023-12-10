import { FaArchway, FaUsers, FaTree } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

export const about = [
  {
    id: 786,
    icon: (
      <FaArchway className="text-md sm:text-lg md:text-xl text-white"></FaArchway>
    ),
    background: "bg-indigo-500",
    title: "oldest programming language",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima quibusdam iure quis sapiente hic accusamus sint maxime architecto dolores.",
  },
  {
    id: 787,
    icon: (
      <FaUsers className="text-md sm:text-lg md:text-xl text-white"></FaUsers>
    ),
    background: "bg-yellow-500",
    title: "largest programming language",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima quibusdam iure quis sapiente hic accusamus sint maxime architecto dolores.",
  },
  {
    id: 788,
    icon: (
      <IoMdTrendingUp className="text-md sm:text-lg md:text-xl text-white"></IoMdTrendingUp>
    ),
    background: "bg-blue-500",
    title: "popular programming languages",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima quibusdam iure quis sapiente hic accusamus sint maxime architecto dolores.",
  },
  {
    id: 789,
    icon: (
      <FaTree className="text-md sm:text-lg md:text-xl text-white"></FaTree>
    ),
    background: "bg-orange-500",
    title: "popular IDEs",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima quibusdam iure quis sapiente hic accusamus sint maxime architecto dolores.",
  },
];
