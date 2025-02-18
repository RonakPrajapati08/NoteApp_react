// import React, { useEffect, useState } from "react";
// import NoteContainer from "./Components/NoteContainer/NoteContainer";
// import "./App.css";
// import Sidebar from "./Components/Sidebar/Sidebar";

// function App() {
//   const [notes, setNotes] = useState([]);
//   // const addNote = (color) => {
//   //   const tempNotes = [...notes];

//   //   tempNotes.unshift({
//   //     id: Date.now + "" + Math.floor(Math.random() * 78),
//   //     text: "",
//   //     time: Date.now(),
//   //     color,
//   //   });
//   //   setNotes(tempNotes);
//   // };

//   const addNote = (color) => {
//     // Add the new note at the beginning of the array
//     setNotes((prevNotes) => [
//       {
//         id: Date.now() + "" + Math.floor(Math.random() * 78),
//         text: "",
//         time: Date.now(),
//         color,
//       },
//       ...prevNotes, // Keep the rest of the notes
//     ]);
//   };

//   const deleteNote = (id) => {
//     // Filter out the note with the given id
//     setNotes((prevNotes) => prevNotes.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="container-fluid my-3 App d-flex gap-3">
//       <Sidebar addNote={addNote} />
//       <NoteContainer notes={notes} deleteNote={deleteNote} />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import NoteContainer from "./Components/NoteContainer/NoteContainer";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import "./App.css";
// import { Button } from "react-bootstrap";

// function App() {
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });

//   const [deletingAll, setDeletingAll] = useState(false); // New state for animation

//   useEffect(() => {
//     if (notes.length > 0) {
//       localStorage.setItem("notes", JSON.stringify(notes));
//     }
//   }, [notes]);

//   // add a new note
//   const addNote = (color) => {
//     const newNote = {
//       id: Date.now() + "" + Math.floor(Math.random() * 78),
//       text: "",
//       time: Date.now(),
//       color,
//     };
//     setNotes((prevNotes) => [newNote, ...prevNotes]);
//   };

//   // Function to delete a note
//   // const deleteNote = (id) => {
//   //   setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
//   // };

//   // Function to delete a single note
//   const deleteNote = (id) => {
//     const updatedNotes = notes.filter((note) => note.id !== id);
//     setNotes(updatedNotes);
//     localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Update localStorage after deletion
//   };

//   // const deleteAllNotes = () => {
//   //   setNotes([]); // Clear the notes state
//   //   localStorage.removeItem("notes"); // Remove notes from localStorage
//   // };

//   // Delete all notes with animation
//   const deleteAllNotes = () => {
//     setDeletingAll(true); // Trigger animation
//     setTimeout(() => {
//       setNotes([]); // Remove all notes after animation completes
//       localStorage.removeItem("notes"); // Clear local storage
//       setDeletingAll(false); // Reset animation state
//     }, 300); // Match animation duration
//   };

//   // Function to update note text
//   const updateNote = (id, newTitle, newText) => {
//     setNotes((prevNotes) => {
//       const updatedNotes = prevNotes.map((note) =>
//         note.id === id ? { ...note, title: newTitle, text: newText } : note
//       );

//       localStorage.setItem("notes", JSON.stringify(updatedNotes)); // ✅ Save to local storage
//       return updatedNotes;
//     });
//   };

//   //new updated code
//   // const updateNote = (id, newTitle, newText) => {
//   //   setNotes((prevNotes) => {
//   //     const updatedNotes = prevNotes.map((note) =>
//   //       note.id === id ? { ...note, title: newTitle, text: newText } : note
//   //     );

//   //     localStorage.setItem("notes", JSON.stringify(updatedNotes)); // ✅ Save to local storage
//   //     return updatedNotes;
//   //   });
//   // };

//   // const updateNote = (id, newText) => {
//   //   const updatedNotes = notes.map((note) =>
//   //     note.id === id ? { ...note, text: newText } : note
//   //   );
//   //   setNotes(updatedNotes); // Update state
//   // };

//   return (
//     <div className="container-fluid my-3 app-flex justify-content-between ">
//       <div className="col-md-1 slide-app">
//         <Sidebar addNote={addNote} />
//       </div>
//       <div className="col-md-11">
//         <NoteContainer
//           notes={notes}
//           setNotes={setNotes}
//           deleteNote={deleteNote}
//           deleteAllNotes={deleteAllNotes}
//           updateNote={updateNote}
//           deletingAll={deletingAll}
//         />

//         {/* //updated NoteContainer */}

//         {/* <NoteContainer
//           notes={notes}
//           setNotes={setNotes} // <-- Pass this down
//           deleteNote={deleteNote}
//           deleteAllNotes={deleteAllNotes}
//           updateNote={updateNote}
//           deletingAll={deletingAll}
//         /> */}

//         <Button
//           onClick={deleteAllNotes}
//           className="button allNote-del btn btn-danger float-end"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 69 14"
//             className="svgIcon bin-top"
//           >
//             <g clipPath="url(#clip0_35_24)">
//               <path
//                 fill="black"
//                 d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
//               ></path>
//             </g>
//             <defs>
//               <clipPath id="clip0_35_24">
//                 <rect fill="white" height="14" width="69"></rect>
//               </clipPath>
//             </defs>
//           </svg>

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 69 57"
//             className="svgIcon bin-bottom"
//           >
//             <g clipPath="url(#clip0_35_22)">
//               <path
//                 fill="black"
//                 d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
//               ></path>
//             </g>
//             <defs>
//               <clipPath id="clip0_35_22">
//                 <rect fill="white" height="57" width="69"></rect>
//               </clipPath>
//             </defs>
//           </svg>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <div className="slide-app">
        <Sidebar />
      </div>
      <div className="col-md-12">
        <NoteContainer />
      </div>
    </>
  );
}

export default App;
