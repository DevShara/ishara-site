import { useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { T as ThemeContext, j as jsx, a as jsxs, F as Fragment } from "../ServerApp.mjs";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-dom/client";
import "react/jsx-runtime";
const navigation = [{
  name: "About",
  href: "about",
  current: false
}, {
  name: "Works",
  href: "works",
  current: false
}, {
  name: "Contact",
  href: "contact",
  current: false
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar({
  changeTheme
}) {
  const theme = useContext(ThemeContext);
  return /* @__PURE__ */ jsx(Disclosure, {
    as: "nav",
    className: " sticky top-0 z-50  ",
    children: ({
      open
    }) => /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx("div", {
        className: `mx-auto px-2 sm:px-6 lg:px-12 shadow-xl border-b-gray-500 border-b  ${theme == "light" ? " bg-gray-50" : " bg-gray-800 "} `,
        children: /* @__PURE__ */ jsxs("div", {
          className: "relative container mx-auto flex h-16 px-12 items-center justify-between ",
          children: [/* @__PURE__ */ jsx("div", {
            className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
            children: /* @__PURE__ */ jsxs(Disclosure.Button, {
              className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
              children: [/* @__PURE__ */ jsx("span", {
                className: "sr-only",
                children: "Open main menu"
              }), open ? /* @__PURE__ */ jsx(XMarkIcon, {
                className: "block h-6 w-6",
                "aria-hidden": "true"
              }) : /* @__PURE__ */ jsx(Bars3Icon, {
                className: "block h-6 w-6",
                "aria-hidden": "true"
              })]
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-1 items-center justify-center sm:items-stretch  sm:justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex flex-shrink-0 items-center",
              children: /* @__PURE__ */ jsx(Link, {
                to: "about",
                spy: true,
                smooth: true,
                offset: -70,
                duration: 1e3,
                delay: 100,
                className: `font-bold text-xl cursor-pointer  ${theme == "light" ? " text-gray-800" : "text-gray-100"}`,
                children: "ISHARA"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "hidden sm:ml-6 sm:block",
              children: /* @__PURE__ */ jsx("div", {
                className: "flex space-x-4",
                children: navigation.map((item) => /* @__PURE__ */ jsx(Link, {
                  to: item.href,
                  spy: true,
                  smooth: true,
                  offset: -70,
                  duration: 1e3,
                  delay: 100,
                  className: classNames(theme == "light" ? " text-gray-800" : "text-gray-100", item.current ? "underline " : "over:underline   underline-offset-4 ", "rounded-md px-3 py-2 text-md font-medium cursor-pointer"),
                  "aria-current": item.current ? "page" : void 0,
                  children: item.name
                }, item.name))
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-center justify-center ml-6",
            children: /* @__PURE__ */ jsx("label", {
              htmlFor: "toggleB",
              className: "flex items-center cursor-pointer",
              children: /* @__PURE__ */ jsxs("div", {
                className: "relative",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "checkbox",
                  id: "toggleB",
                  className: "sr-only",
                  onChange: () => {
                    changeTheme();
                  }
                }), /* @__PURE__ */ jsx("div", {
                  className: "block bg-gray-500 w-14 h-8 rounded-full"
                }), /* @__PURE__ */ jsx("div", {
                  className: "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full flex justify-center  items-center transition",
                  children: theme == "light" ? /* @__PURE__ */ jsx(MdOutlineLightMode, {}) : /* @__PURE__ */ jsx(CiDark, {})
                })]
              })
            })
          })]
        })
      }), /* @__PURE__ */ jsx(Disclosure.Panel, {
        className: "sm:hidden",
        children: /* @__PURE__ */ jsx("div", {
          className: classNames(theme == "light" ? "text-red-800 bg-gray-100" : "text-gray-100 bg-gray-800", "space-y-1 px-2 pt-2 pb-3 border-b-gray-500 border-b"),
          children: navigation.map((item) => /* @__PURE__ */ jsx(Disclosure.Button, {
            as: "a",
            href: item.href,
            className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-900 hover:bg-gray-900 hover:text-white", theme == "light" ? " text-gray-800" : "text-white", "block rounded-md px-3 py-2 text-base font-medium"),
            "aria-current": item.current ? "page" : void 0,
            children: item.name
          }, item.name))
        })
      })]
    })
  });
}
export {
  Navbar as default
};
