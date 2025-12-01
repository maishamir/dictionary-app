import React, { useState } from 'react';
import logo from "../../assets/images/logo.svg";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";


function ThemeToggle({toggled}) {
    return <label className="switch">
      <input type="checkbox" onChange={(e)=> toggled(e.target.checked)}/>
        <span className="slider"></span>
    </label>
}


function Header({ onFontSwitch, onToggle}) {

    const [fontClass, setFontClass] = useState("sans-serif");

    return (
        <header className='header'>
            <img src={logo} alt="" className='header__logo' />

            <div className="header__toggles">
                <form action="">
                    <select name="fontStyle" id="fontStyle" className="fontStyle" onChange={(e) => onFontSwitch(e.target.value)}>
                        <option
                            value="sans-serif"

                        >
                            Sans Serif
                        </option>
                        <option value="serif" >
                            Serif
                        </option>
                        <option value="mono" >
                            Mono
                        </option>
                    </select>
                </form>
                <div className="header__divider"></div>
          <ThemeToggle toggled={onToggle} />
            </div>
        </header>
    )
}

export default Header