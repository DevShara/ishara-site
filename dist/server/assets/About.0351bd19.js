import { FaGithub, FaBehance } from "react-icons/fa";
import { useContext } from "react";
import { T as ThemeContext, a as jsxs, j as jsx } from "../ServerApp.js";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const img = "/assets/img.7d04691d.jpg";
const About = () => {
  const theme = useContext(ThemeContext);
  const item = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5
      }
    }),
    hidden: {
      opacity: 0
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: `container mx-auto flex flex-col md:flex-row gap-6   md:px-12  p-12 items-center ${theme == "light" ? "text-gray-700" : "text-gray-200"}`,
    children: [/* @__PURE__ */ jsxs("div", {
      className: " md:w-3/6  md:p-12 ",
      children: [/* @__PURE__ */ jsx(motion.p, {
        className: " leading-7 text-lg text-justify",
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 0.25,
        children: "As a web developer with experience in Front End Development, I bring a passion for programming and a strong problem-solving mind-set to my work. My previous background in graphic design has honed my eye for detail and aesthetics, which I apply to create visually appealing and user-friendly web applications."
      }), /* @__PURE__ */ jsxs(motion.div, {
        className: " mt-6",
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 0.5,
        children: [/* @__PURE__ */ jsx("h4", {
          children: "Connect with Ishara"
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex mt-3",
          children: [/* @__PURE__ */ jsx("a", {
            href: "\xA3",
            className: " text-4xl mr-4",
            children: /* @__PURE__ */ jsx(FaGithub, {})
          }), /* @__PURE__ */ jsx("a", {
            href: "\xA3",
            className: " text-4xl mr-4",
            children: /* @__PURE__ */ jsx(FaBehance, {})
          })]
        })]
      })]
    }), /* @__PURE__ */ jsx(motion.div, {
      className: " md:w-3/6",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25
      },
      initial: "hidden",
      whileInView: "visible",
      variants: item,
      custom: 0.5,
      children: /* @__PURE__ */ jsx("img", {
        src: img,
        className: " "
      })
    })]
  });
};
export {
  About as default
};
