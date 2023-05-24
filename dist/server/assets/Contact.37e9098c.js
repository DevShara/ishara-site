import { useContext, useState, useEffect } from "react";
import { T as ThemeContext, j as jsx, a as jsxs } from "../ServerApp.js";
import { motion } from "framer-motion";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const Contact = () => {
  const theme = useContext(ThemeContext);
  const [themeStyles, setThemeStyle] = useState({});
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (theme == "light") {
      setThemeStyle({
        textColour: "text-gray-700",
        bgColour: "bg-gray-100",
        borderColour: " border-gray-200",
        formTextColour: " text-gray-700"
      });
    } else {
      setThemeStyle({
        textColour: "text-gray-300",
        bgColour: "bg-gray-800",
        borderColour: " border-gray-600",
        formTextColour: " text-gray-700"
      });
    }
  }, [theme]);
  const submitForm = (e) => {
    e.preventDefault();
    fetch(".netlify/functions/contact/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };
  const item = {
    visible: (i) => ({
      opacity: 1,
      x: "0%",
      transition: {
        delay: i * 0.5
      }
    }),
    hidden: {
      opacity: 0,
      x: "-10%"
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "container mx-auto md:px-12 p-6",
    children: /* @__PURE__ */ jsx(motion.div, {
      className: `bg-gray-200  md:p-12 p-16 rounded-xl ${themeStyles.bgColour} ${themeStyles.textColour}`,
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
        scale: 0.9
      },
      initial: "hidden",
      whileInView: "visible",
      variants: item,
      custom: 0.25,
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex md:flex-row flex-col justify-center gap-8 items-center ",
        children: [/* @__PURE__ */ jsx("div", {
          className: "md:w-3/5",
          children: /* @__PURE__ */ jsxs("p", {
            className: "   leading-7    text-justify",
            children: ["My passion is to help organizations turn their ideas into impactful digital solutions that drive progress and make a difference in the world. With a focus on thoughtful design and innovative technology, I work collaboratively to transform complex challenges into user-friendly digital experiences that are not just beautiful but also functional and impactful.", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("br", {}), "Together, let's build digital solutions that connect, inspire, and make a difference. With a focus on innovation and purpose, we can shape a better world for all through quality digital solutions."]
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: " md:w-2/5 flex flex-col  md:p-6 gap-3",
          children: [/* @__PURE__ */ jsx("h1", {
            className: `text-2xl font-semibold `,
            children: "Let's build something awesome together! "
          }), /* @__PURE__ */ jsxs("form", {
            onSubmit: submitForm,
            children: [/* @__PURE__ */ jsxs("label", {
              htmlFor: "name",
              children: ["Name", /* @__PURE__ */ jsx("input", {
                type: "text",
                id: "name",
                placeholder: "Name",
                required: true,
                className: `block w-full ${themeStyles.formTextColour}`,
                onChange: (e) => setFormData({
                  ...formData,
                  name: e.target.value
                }),
                value: formData.name
              })]
            }), /* @__PURE__ */ jsxs("label", {
              htmlFor: "name",
              children: ["Email", /* @__PURE__ */ jsx("input", {
                type: "email",
                id: "name",
                placeholder: "Email",
                required: true,
                className: `block w-full ${themeStyles.formTextColour}`,
                onChange: (e) => setFormData({
                  ...formData,
                  email: e.target.value
                }),
                value: formData.email
              })]
            }), /* @__PURE__ */ jsx("button", {
              className: "bg-gray-500 text-white  p-2  w-fit",
              children: "contact"
            })]
          })]
        })]
      })
    })
  });
};
export {
  Contact as default
};
