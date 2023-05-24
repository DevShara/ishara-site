import { useContext, useState, useEffect } from "react";
import { T as ThemeContext, j as jsx, a as jsxs } from "../ServerApp.js";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const Skills = () => {
  const theme = useContext(ThemeContext);
  const [themeStyles, setThemeStyle] = useState({});
  useEffect(() => {
    if (theme == "light") {
      setThemeStyle({
        textColour: "text-gray-700",
        bgColour: "bg-gray-100",
        borderColour: " border-gray-200"
      });
    } else {
      setThemeStyle({
        textColour: "text-gray-300",
        bgColour: "bg-gray-800",
        borderColour: " border-gray-600"
      });
    }
  }, [theme]);
  const item = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3
      }
    }),
    hidden: {
      opacity: 0
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "container mx-auto md:px-12 my-6 p-6  ",
    children: /* @__PURE__ */ jsxs("div", {
      className: ` p-12 rounded-2xl ${themeStyles.textColour} ${themeStyles.bgColour} `,
      children: [/* @__PURE__ */ jsx("h2", {
        className: `text-2xl font-semibold  `,
        children: "Skills, Familiar Tools & Technologies"
      }), /* @__PURE__ */ jsxs("ul", {
        className: "  mt-3 ",
        children: [/* @__PURE__ */ jsx(motion.li, {
          className: `border-b-2 py-4 ${themeStyles.borderColour}`,
          whileHover: {
            translateX: 12,
            opacity: 0.9
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25
          },
          whileTap: {
            translateX: 48
          },
          initial: "hidden",
          whileInView: "visible",
          variants: item,
          custom: 0.25,
          children: /* @__PURE__ */ jsxs("p", {
            className: "text-lg",
            children: [/* @__PURE__ */ jsx("span", {
              className: " font-semibold",
              children: "Programming Languages"
            }), /* @__PURE__ */ jsx("span", {
              className: "block",
              children: "JavaScript, Typescript"
            })]
          })
        }), /* @__PURE__ */ jsx(motion.li, {
          className: `border-b-2 py-4 ${themeStyles.borderColour}`,
          whileHover: {
            translateX: 12,
            opacity: 0.9
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25
          },
          whileTap: {
            translateX: 48
          },
          initial: "hidden",
          whileInView: "visible",
          variants: item,
          custom: 0.5,
          children: /* @__PURE__ */ jsxs("p", {
            className: "text-lg",
            children: [/* @__PURE__ */ jsx("span", {
              className: " font-semibold",
              children: "Libraries and Frameworks"
            }), /* @__PURE__ */ jsx("span", {
              className: "block",
              children: "React, Next.js, Gatsby."
            })]
          })
        }), /* @__PURE__ */ jsx(motion.li, {
          className: `border-b-2 py-4 ${themeStyles.borderColour}`,
          whileHover: {
            translateX: 12,
            opacity: 0.9
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25
          },
          whileTap: {
            translateX: 48
          },
          initial: "hidden",
          whileInView: "visible",
          variants: item,
          custom: 0.75,
          children: /* @__PURE__ */ jsxs("p", {
            className: "text-lg",
            children: [/* @__PURE__ */ jsx("span", {
              className: " font-semibold",
              children: "CSS frameworks"
            }), /* @__PURE__ */ jsx("span", {
              className: "block",
              children: "Tailwindcss, Bootstrap, and Styled Components."
            })]
          })
        }), /* @__PURE__ */ jsx(motion.li, {
          className: `border-b-2 py-4 ${themeStyles.borderColour}`,
          whileHover: {
            translateX: 12,
            opacity: 0.9
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25
          },
          whileTap: {
            translateX: 48
          },
          initial: "hidden",
          whileInView: "visible",
          variants: item,
          custom: 1,
          children: /* @__PURE__ */ jsxs("p", {
            className: "text-lg",
            children: [/* @__PURE__ */ jsx("span", {
              className: " font-semibold",
              children: "Infrastructure Tools & Technologies"
            }), /* @__PURE__ */ jsx("span", {
              className: "block",
              children: "Sanity Headless CMS, Netlify, Vercel, Linux terminal, Git"
            })]
          })
        }), /* @__PURE__ */ jsx(motion.li, {
          className: `border-b-2 py-4 ${themeStyles.borderColour}`,
          whileHover: {
            translateX: 12,
            opacity: 0.9
          },
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25
          },
          whileTap: {
            translateX: 48
          },
          initial: "hidden",
          whileInView: "visible",
          variants: item,
          custom: 1.25,
          children: /* @__PURE__ */ jsxs("p", {
            className: "  text-lg",
            children: [/* @__PURE__ */ jsx("span", {
              className: " font-semibold",
              children: "Designing & Prototyping Tools"
            }), /* @__PURE__ */ jsx("span", {
              className: "block",
              children: "Adobe XD, Figma"
            })]
          })
        })]
      })]
    })
  });
};
export {
  Skills as default
};
