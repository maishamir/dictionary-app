import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";
import { Menu, Button, Text } from "@mantine/core";
import Dropdown from "../Dropdown/Dropdown";

function ThemeToggle({ toggled }) {
  return (
    <div className="themeToggle">
      <label className="switch">
        <input type="checkbox" onChange={(e) => toggled(e.target.checked)} />
        <span className="slider"></span>
      </label>
      <div className="themeToggle__iconWrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke="#838383"
            class="themeIcon"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </div>
    </div>
  );
}

function Header({ onFontSwitch, onToggle, fontClass }) {
  // const [fontClass, setFontClass] = useState("sans-serif");

  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />

      <div className="header__toggles">
        {/* <form action="">
          <select
            name="fontStyle"
            id="fontStyle"
            className="fontStyle"
            onChange={(e) => onFontSwitch(e.target.value)}
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </form> */}
        <Dropdown
          options={[
            { name: "Sans Serif", value: "sans-serif" },
            { name: "Serif", value: "serif" },
            { name: "Mono", value: "mono" },
          ]}
          value={fontClass}
          onChange={onFontSwitch}
        />

        <div className="header__divider"></div>
        <ThemeToggle toggled={onToggle} />
      </div>
    </header>
  );
}

export default Header;
