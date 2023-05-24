import { useContext, useState, useEffect } from "react";
import { T as ThemeContext, a as jsxs, j as jsx } from "../ServerApp.js";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const Projects = () => {
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
  return /* @__PURE__ */ jsxs("div", {
    className: " container mx-auto my-6 py-6 px-12 px-12",
    children: [/* @__PURE__ */ jsx("h1", {
      className: `text-2xl font-semibold ${themeStyles.textColour}  `,
      children: "Projects I\u2019ve Built"
    }), /* @__PURE__ */ jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-4 mt-6  gap-6 text-white ",
      id: "works",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        className: "rounded-xl relative project-item-1",
        whileHover: {
          scale: 1.05,
          opacity: 0.9
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        whileTap: {
          scale: 0.85
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 0.25,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "absolute left-6 top-6",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "",
            children: "Website"
          }), /* @__PURE__ */ jsx("h2", {
            className: "font-bold text-xl",
            children: "WP Website"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   ",
          children: [/* @__PURE__ */ jsxs("ul", {
            className: "tech-stack-list  ",
            children: [/* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Gatsby"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Tailwind CSS"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Sanity"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Netify"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: " ",
            children: /* @__PURE__ */ jsx("button", {
              className: " bg-white text-gray-800 px-4 py-2  font-semibold rounded-full",
              children: /* @__PURE__ */ jsx("a", {
                href: "http://wayambaprinters.netlify.app/",
                target: "_blank",
                children: "Learn more"
              })
            })
          })]
        })]
      }), /* @__PURE__ */ jsxs(motion.div, {
        className: "rounded-xl relative project-item-2",
        whileHover: {
          scale: 1.05,
          opacity: 0.9
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        whileTap: {
          scale: 0.85
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 1,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "absolute left-6 top-6",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "",
            children: "Web App"
          }), /* @__PURE__ */ jsx("h2", {
            className: "font-bold text-xl",
            children: "Hoarding Finder"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   ",
          children: [/* @__PURE__ */ jsxs("ul", {
            className: "tech-stack-list  ",
            children: [/* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "React"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Tailwind CSS"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Sanity"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: " ",
            children: /* @__PURE__ */ jsx("button", {
              className: " bg-white text-gray-800 px-4 py-2  font-semibold rounded-full",
              children: /* @__PURE__ */ jsx("a", {
                href: "https://hoarding-finder.netlify.app/",
                children: "Learn more"
              })
            })
          })]
        })]
      }), /* @__PURE__ */ jsxs(motion.div, {
        className: "rounded-xl relative project-item-3",
        whileHover: {
          scale: 1.05,
          opacity: 0.9
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        whileTap: {
          scale: 0.85
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 1.5,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "absolute left-6 top-6",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "",
            children: "Website"
          }), /* @__PURE__ */ jsx("h2", {
            className: "font-bold text-xl",
            children: "Ceytive Website"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl px-6 bg-black/40 flex flex-col  gap-3   ",
          children: [/* @__PURE__ */ jsxs("ul", {
            className: "tech-stack-list  ",
            children: [/* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "React"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Tailwind CSS"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Vercel"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: " ",
            children: /* @__PURE__ */ jsx("button", {
              className: " bg-white text-gray-800 px-4 py-2  font-semibold rounded-full",
              children: /* @__PURE__ */ jsx("a", {
                href: "https://ceytive-site.vercel.app/",
                target: "_blank",
                children: "Learn more"
              })
            })
          })]
        })]
      }), /* @__PURE__ */ jsxs(motion.div, {
        className: "rounded-xl relative project-item-4",
        whileHover: {
          scale: 1.05,
          opacity: 0.9
        },
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 25
        },
        whileTap: {
          scale: 0.85
        },
        initial: "hidden",
        whileInView: "visible",
        variants: item,
        custom: 2,
        children: [/* @__PURE__ */ jsxs("div", {
          className: "absolute left-6 top-6",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "",
            children: "Web App"
          }), /* @__PURE__ */ jsx("h2", {
            className: "font-bold text-xl",
            children: "Employee Rewarder"
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   ",
          children: [/* @__PURE__ */ jsxs("ul", {
            className: "tech-stack-list  ",
            children: [/* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Next js"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Tailwind Css"
            }), /* @__PURE__ */ jsx("li", {
              className: "tech-stack-item",
              children: "Sanity"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: " ",
            children: /* @__PURE__ */ jsx("button", {
              className: " bg-white text-gray-800 px-4 py-2  font-semibold rounded-full",
              children: /* @__PURE__ */ jsx("a", {
                href: "http://wayambaprinters.netlify.app/",
                children: "Learn more"
              })
            })
          })]
        })]
      })]
    })]
  });
};
export {
  Projects as default
};
