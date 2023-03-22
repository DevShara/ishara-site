import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className=" flex flex-col  items-center justify-center h-screen">
      <h1 className=" text-3xl leading-snug  text-center">
        <span className=" font-bold">ISHARA SAMUDITHA</span>
        <br/>
        IS
        <br />
        A WEB DEVELOPER
      </h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
