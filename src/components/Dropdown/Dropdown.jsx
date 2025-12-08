import { useState } from "react";
import "./Dropdown.scss"
import downArrow from "../../assets/images/icon-arrow-down.svg";

function Dropdown({ options, value, onChange }) {
  const [open, setOpen] = useState(false);
  let selectedFont = options.find(font => font.value === value)?.name;
  
  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)} className="dropdown__selected">
        <p>{selectedFont}</p>
        <img src={downArrow} alt="" />
      </button>

      {open && (
        <ul className="dropdown__list">
          {options.map((opt, index) => {
            return (<li className={opt.value}
              key={index}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.name}
            </li>);
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
