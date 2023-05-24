import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { createContext, lazy, useState, Suspense } from "react";
import "react-dom/client";
import * as jsxRuntime from "react/jsx-runtime";
const ThemeContext = createContext({ textColor: "text-red-500" });
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Contact = lazy(() => import("./assets/Contact.37a52b94.js"));
const Works = lazy(() => import("./assets/Works.9c7b4706.js"));
const Skills = lazy(() => import("./assets/Skills.971c3a38.js"));
const About = lazy(() => import("./assets/About.0351bd19.js"));
const Navbar = lazy(() => import("./assets/Navbar.ea47c6f0.js"));
const Hero = lazy(() => import("./assets/Hero.eade2053.js"));
const App = () => {
  const [theme, setTheme] = useState("dark");
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return /* @__PURE__ */ jsx(ThemeContext.Provider, {
    value: theme,
    children: /* @__PURE__ */ jsx(Suspense, {
      fallback: /* @__PURE__ */ jsx("div", {
        className: "bg-red-600",
        children: /* @__PURE__ */ jsx("h2", {
          className: "text-2xl",
          children: "\u{1F602}"
        })
      }),
      children: /* @__PURE__ */ jsxs("div", {
        className: `${theme == "light" ? "bg-white" : "bg-gray-900"}`,
        children: [/* @__PURE__ */ jsx(Navbar, {
          changeTheme
        }), /* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsx("div", {
          id: "about",
          children: /* @__PURE__ */ jsx(About, {})
        }), /* @__PURE__ */ jsx(Skills, {}), /* @__PURE__ */ jsx("div", {
          id: "works",
          children: /* @__PURE__ */ jsx(Works, {})
        }), /* @__PURE__ */ jsx("div", {
          className: "contact",
          children: /* @__PURE__ */ jsx(Contact, {})
        })]
      })
    })
  });
};
function render(url, opts) {
  const stream = renderToPipeableStream(/* @__PURE__ */ jsx(StaticRouter, {
    location: url,
    children: /* @__PURE__ */ jsx(App, {})
  }), opts);
  return stream;
}
export {
  Fragment as F,
  ThemeContext as T,
  jsxs as a,
  render as default,
  jsx as j
};
