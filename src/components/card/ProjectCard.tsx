import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  img: StaticImageData;
  id: number;
  role: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  return (
    <div className="mt-14 sm:mt-24 xl:mt-40">
      <Tilt
        className="project-card"
        perspective={10000}
        scale={1.01}
        glareEnable={true}
        glareMaxOpacity={0.45}
      >
        <Link href={`/project/${props.name.toLowerCase()}`}>
          <Image
            src={props.img}
            className="rounded-xl shadow-xl object-cover w-full h-{230}"
            alt={props.name}
          />
        </Link>
        <motion.div
          exit={{ opacity: 0 }}
          className="text-black-700 mt-3 flex justify-between xl:text-3xl xl:mt-6 project-card__inner"
        >
          <p className="sm:text-lg md:text-xl lg:text-3xl">
            /0{props.id} <span className="font-semibold">{props.name}</span>
          </p>
          <p className="sm:text-lg md:text-xl lg:text-3xl">{props.role} dev</p>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
