import { BsArrowDownCircle } from "react-icons/bs";
import { useContext } from "react";
import { T as ThemeContext, a as jsxs, j as jsx } from "../ServerApp.mjs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const heroImage = "/assets/back.a001799c.png";
const Hero = () => {
  const theme = useContext(ThemeContext);
  return /* @__PURE__ */ jsxs("div", {
    className: `flex flex-col items-center justify-center rounded-b-3xl  h-screen overflow-hidden text-gray-200 ${theme == "light" ? "hero-container-light" : "hero-container-dark"}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex flex-col md:flex-row items-center  container mx-auto justify-center px-16 md:gap-6 gap-14",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        className: " md:w-2/5  w-full ",
        initial: {
          opacity: 0,
          scale: 2,
          x: "-100%"
        },
        animate: {
          opacity: 1,
          scale: 1,
          x: "10%"
        },
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        },
        children: [/* @__PURE__ */ jsx("h1", {
          className: ` md:text-4xl text-3xl md:leading-snug text-left `,
          children: "Together, let's build digital solutions that connect, inspire, and make a difference."
        }), /* @__PURE__ */ jsx(Link, {
          to: "about",
          spy: true,
          smooth: true,
          offset: -70,
          duration: 1e3,
          delay: 100,
          children: /* @__PURE__ */ jsx("button", {
            className: "mt-12 border p-6 rounded-full hover:bg-white hover:text-gray-700 transition-all",
            children: "Learn more"
          })
        })]
      }), /* @__PURE__ */ jsx(motion.div, {
        className: " flex-shrink flex-grow-0 md:w-3/5 w-full  ",
        initial: {
          opacity: 0,
          scale: 0.5
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        },
        children: /* @__PURE__ */ jsx("img", {
          src: heroImage,
          className: "  w-full  h-auto"
        })
      })]
    }), /* @__PURE__ */ jsx(Link, {
      to: "about",
      spy: true,
      smooth: true,
      offset: -70,
      duration: 1e3,
      delay: 100,
      className: `font-bold cursor-pointer text-5xl animate-bounce   `,
      children: /* @__PURE__ */ jsx(BsArrowDownCircle, {})
    })]
  });
};
export {
  Hero as default
};
