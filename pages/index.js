import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import workspace from "../loottie/workspace";

import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import { projects } from "../utils/projectsData";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Carousel } from "flowbite-react";
import Hero from "../components/hero";
import Showcase from "../components/showcase";
import About from "../components/about";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const workspaceSettings = {
    loop: true,
    autoplay: true,
    animationData: workspace,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="p-2">
        {/* Page Content */}
        <Hero />
        <Showcase />
        <About />
      </div>
    </>
  );
}
