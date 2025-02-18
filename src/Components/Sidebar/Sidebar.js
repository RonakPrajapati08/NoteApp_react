import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = [
    "#D8E1E8",
    "#a9ffe4d9",
    "#f5f2ffcc",
    "#fde8e8e6",
    "#cfffd5cc",
  ];

  const [listOpen, setListOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setListOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" ref={dropdownRef}>
      <div
        className="text-center bg-black text-white rounded-circle"
        style={{
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          cursor: "pointer",
        }}
        onClick={() => setListOpen(!listOpen)}
      >
        <i
          className={`fa-solid fa-plus plus-icon   ${
            listOpen ? "rotated" : ""
          }`}
        ></i>
      </div>
      <ul
        className={`sidebar-list d-flex flex-column gap-2 align-items-center bg-dark rounded-4 justify-content-evenly ps-0 mt-2 ${
          listOpen ? "side-list-active" : ""
        }`}
      >
        {colors.map((item, index) => {
          return (
            <li
              key={index}
              className="sidebar-list-item  rounded-circle list-unstyled"
              onClick={() => props.addNote(item)}
              style={{ backgroundColor: item }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

// -----normal sidebar----//

// import React, { useState } from "react";

// const colors = ["#60A5FA", "#34D399", "#F87171", "#FBBF24", "#C084FC"];

// export default function ColorPicker() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
//       <div className="relative">
//         {/* Main Button */}
//         <button
//           className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="text-gray-600 text-xl">×</span>
//         </button>

//         {/* Circular Color Options */}
//         <ul
//           className={`absolute transition-all duration-300 ${
//             isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
//           }`}
//         >
//           {colors.map((color, index) => {
//             const angle = (index / colors.length) * (2 * Math.PI);
//             const x = Math.cos(angle) * 60;
//             const y = Math.sin(angle) * 60;
//             return (
//               <li
//                 key={index}
//                 className="absolute w-12 h-12 rounded-full shadow-md cursor-pointer transition-transform"
//                 style={{
//                   backgroundColor: color,
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               ></li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

//Expandable Circular Menu sidebar//

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Sidebar.css"; // Custom CSS for styling

// export default function ColorPicker(props) {
//   const colors = ["#60A5FA", "#34D399", "#F87171", "#FBBF24", "#C084FC"];
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="d-flex justify-content-center position-relative">
//       <div className="position-relative color-picker-container">
//         {/* Close Button - Centered */}
//         <button
//           className="btn btn-light rounded-circle shadow-lg main-btn"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ✖
//         </button>

//         {/* Color Options Expanding Around the Button */}
//         <ul className={`position-absolute color-menu ${isOpen ? "open" : ""}`}>
//           {colors.map((color, index) => {
//             const angle = (index / colors.length) * (2 * Math.PI);
//             const x = Math.cos(angle) * 60; // Adjusted for better spacing
//             const y = Math.sin(angle) * 60;
//             return (
//               <li
//                 key={index}
//                 className="position-absolute rounded-circle shadow color-option"
//                 onClick={() => props.addNote(color)}
//                 style={{
//                   backgroundColor: color,
//                   transform: isOpen
//                     ? `translate(${x}px, ${y}px)`
//                     : "translate(0,0)",
//                 }}
//               ></li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
