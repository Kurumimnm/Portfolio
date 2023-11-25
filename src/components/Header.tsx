import React from "react";
import style from "@/styles/header.module.scss";

function Header() {
  return (
    <>
      <div className={style.header}>
        <p className={style.title}>Taka</p>
        <div className={style.menu}>
          <a href="./" className={style.link}>
            Home
          </a>
          <a href="./works" className={style.link}>
            Works
          </a>
          <a href="./links" className={style.link}>
            Links
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
