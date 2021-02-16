import React, { useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";

function ScrollTop() {
  useEffect(() => {
    const scroll = document.querySelector(".scroll-top");

    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 2000) {
        scroll.classList.add("visible");
      } else {
        scroll.classList.remove("visible");
      }
    });
  }, []);

  return (
    <Link to="header" smooth={true}>
      <div className="scroll-top">
        <ArrowUpOutlined />
      </div>
    </Link>
  );
}

export default ScrollTop;
