// import React from "react";
// import Note from "../Note/Note";
// import "./NoteContainer.css";

// function NoteContainer(props) {
//   // const reverArray = (arr) => {
//   //   const array = [];

//   //   for (let i = arr.length - 1; arr >= 0; --i) {
//   //     array.push(arr[i]);
//   //   }
//   //   return array;
//   // };

//   // const notes = reverArray(props.notes);
//   // console.log(props.notes, notes);

//   return (
//     <div className="note-container">
//       <div className="position-sticky top-0">
//         <h2 className="">Notes</h2>
//       </div>

//       <div className="note-container-notes d-flex flex-wrap gap-3 align-items-center justify-content-center">
//         {/* <div className="col-md-3"> */}
//         {props.notes.length === 0 ? (
//           <p className="text-muted">No notes added yet</p>
//         ) : (
//           props.notes.map((item) => (
//             <Note
//               key={item.id}
//               note={item}
//               deleteNote={props.deleteNote}
//               updateNote={props.updateNote}
//             />
//           ))
//         )}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;

// import React from "react";
// import Note from "../Note/Note";
// import "./NoteContainer.css";

// function NoteContainer(props) {
//   console.log("Notes:", props.notes, "Type:", typeof props.notes); // Debugging log

//   const notes = Array.isArray(props.notes) ? props.notes : [];

//   return (
//     <div className="note-container ">
//       <div className="text-white text-center p-2 mb-2 rounded-3">
//         <h2 className="fw-bolder">All Notes</h2>
//       </div>

//       <div className="note-container-notes d-flex flex-wrap gap-3 align-items-center">
//         {notes.length === 0 ? (
//           <p className="text-muted text-white-50 mt-2">No notes added yet</p>
//         ) : (
//           notes.map((item) => (
//             <Note
//               key={item.id}
//               note={item}
//               deleteNote={props.deleteNote}
//               updateNote={props.updateNote}
//               deletingAll={props.deletingAll}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;

// import React, { useState } from "react";
// import Note from "../Note/Note";
// import "./NoteContainer.css";

// function NoteContainer(props) {
//   const [selectedNote, setSelectedNote] = useState(null); // Track expanded note

//   const notes = Array.isArray(props.notes) ? props.notes : [];

//   return (
//     <div className="note-container">
//       <div className="text-white text-center p-2 mb-2 rounded-3">
//         <h2 className="fw-bolder">All Notes</h2>
//       </div>

//       <div className="note-container-notes d-flex flex-wrap gap-3 align-items-center">
//         {notes.length === 0 ? (
//           <p className="text-muted text-white-50 mt-2">No notes added yet</p>
//         ) : (
//           notes.map((item) => (
//             <Note
//               key={item.id}
//               note={item}
//               deleteNote={props.deleteNote}
//               updateNote={props.updateNote}
//               onClick={() => setSelectedNote(item)} // Set selected note
//             />
//           ))
//         )}
//       </div>

//       {selectedNote && (
//         <div className="fullscreen-note">
//           <Note
//             note={selectedNote}
//             deleteNote={props.deleteNote}
//             updateNote={props.updateNote}
//           />
//           <button className="close-btn" onClick={() => setSelectedNote(null)}>
//             ✖ Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NoteContainer;

// import React, { useState } from "react";
// import Note from "../Note/Note";
// import "./NoteContainer.css";

// function NoteContainer({ notes, deleteNote, setNotes, deletingAll }) {
//   const [selectedNote, setSelectedNote] = useState(null);

//   // Function to update a note in the notes array
//   const updateNote = (id, newTitle, newText) => {
//     const updatedNotes = notes.map((note) =>
//       note.id === id ? { ...note, title: newTitle, text: newText } : note
//     );

//     setNotes(updatedNotes); // ✅ Update notes state
//     localStorage.setItem("notes", JSON.stringify(updatedNotes)); // ✅ Save to localStorage
//   };

//   return (
//     <div className="note-container">
//       <div className="text-white text-center p-2 mb-2 rounded-3">
//         <h2 className="fw-bolder">All Notes</h2>
//       </div>

//       <div className="note-container-notes d-flex flex-wrap gap-3 align-items-center">
//         {notes.length === 0 ? (
//           <p className="text-muted text-white-50 mt-2">No notes added yet</p>
//         ) : (
//           notes.map((note) => (
//             <Note
//               key={note.id}
//               note={note}
//               deleteNote={deleteNote}
//               updateNote={updateNote}
//               setSelectedNote={setSelectedNote}
//               isFullScreen={false} // Regular note view
//               deletingAll={deletingAll}
//             />
//           ))
//         )}
//       </div>

//       {/* Full-screen Edit Mode */}
//       {selectedNote && (
//         <div className="fullscreen-note">
//           <div className="fullscreen-note-content">
//             <Note
//               className="roni"
//               note={selectedNote}
//               deleteNote={deleteNote}
//               updateNote={updateNote} // Pass update function
//               setSelectedNote={setSelectedNote}
//               isFullScreen={true} // Enable full-screen edit mode
//             />
//             <button
//               type="button"
//               className="btn-close bg-danger text-bg-danger closee"
//               aria-label="Close"
//               onClick={() => setSelectedNote(null)}
//             >
//               {/* <i class="fa-solid fa-xmark"></i> */}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NoteContainer;

//when user Edit then show popup note and with note delete logic updated

// import React, { useState, useEffect } from "react";
// import Note from "../Note/Note";
// import Sidebar from "../Sidebar/Sidebar";
// import "./NoteContainer.css";
// import { Button } from "react-bootstrap";

// function NoteContainer() {
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });

//   const [deletingAll, setDeletingAll] = useState(false);
//   const [selectedNote, setSelectedNote] = useState(null);

//   // ✅ Sync notes with local storage when updated
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   // ✅ Add a new note
//   const addNote = (color) => {
//     const newNote = {
//       id: Date.now() + "" + Math.floor(Math.random() * 78),
//       title: "",
//       text: "",
//       time: Date.now(),
//       color,
//     };
//     setNotes((prevNotes) => [newNote, ...prevNotes]);
//   };

//   // ✅ Update a note
//   const updateNote = (id, newTitle, newText) => {
//     setNotes((prevNotes) =>
//       prevNotes.map((note) =>
//         note.id === id ? { ...note, title: newTitle, text: newText } : note
//       )
//     );
//   };

//   // ✅ Delete a single note
//   const deleteNote = (id) => {
//     setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
//   };

//   // ✅ Delete all notes with animation
//   const deleteAllNotes = () => {
//     setDeletingAll(true);
//     setTimeout(() => {
//       setNotes([]);
//       localStorage.removeItem("notes");
//       setDeletingAll(false);
//     }, 300);
//   };

//   return (
//     <div className="container-fluid my-3 app-flex justify-content-between">
//       {/* Sidebar */}
//       <div className="col-md-1 slide-app">
//         <Sidebar addNote={addNote} />
//       </div>

//       {/* Notes List */}
//       <div className="col-md-11">
//         <div className="note-container">
//           <div className="text-white text-center p-2 mb-2 rounded-3">
//             <h2 className="fw-bolder">All Notes</h2>
//           </div>

//           <div className="note-container-notes d-flex flex-wrap gap-3 justify-content-sm-start justify-content-center align-items-center">
//             {notes.length === 0 ? (
//               <p className="text-muted text-white-50 mt-2">
//                 No notes added yet
//               </p>
//             ) : (
//               notes.map((note) => (
//                 <Note
//                   key={note.id}
//                   note={note}
//                   deleteNote={deleteNote}
//                   updateNote={updateNote}
//                   setSelectedNote={setSelectedNote}
//                   setNotes={setNotes}
//                   isFullScreen={false}
//                   deletingAll={deletingAll}
//                 />
//               ))
//             )}
//           </div>
//         </div>

//         {/* Full-screen Edit Mode */}
//         {selectedNote && (
//           <div className="fullscreen-note">
//             <div className="fullscreen-note-content">
//               <Note
//                 note={selectedNote}
//                 deleteNote={deleteNote}
//                 updateNote={updateNote}
//                 setSelectedNote={setSelectedNote}
//                 isFullScreen={true}
//               />
//               <button
//                 type="button"
//                 className="btn-close bg-danger text-bg-danger closee"
//                 aria-label="Close"
//                 onClick={() => setSelectedNote(null)}
//               ></button>
//             </div>
//           </div>
//         )}

//         {/* Delete All Notes Button */}
//         <Button
//           onClick={deleteAllNotes}
//           className="button allNote-del btn btn-danger float-end"
//         >
//           <i className="fa-regular fa-trash-can"></i>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;

// when user add new note as popup way after save with note updated

import React, { useState, useEffect } from "react";
import Note from "../Note/Note";
import Sidebar from "../Sidebar/Sidebar";
import "./NoteContainer.css";
import { Button, Modal, Form } from "react-bootstrap";

function NoteContainer() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [deletingAll, setDeletingAll] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    text: "",
    color: "#fff",
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Open modal for adding a new note
  const handleAddNoteClick = (color) => {
    setNewNote({ title: "", text: "", color: color || "#fff" });
    setShowModal(true);
  };

  // Save new note
  const saveNewNote = () => {
    if (newNote.title.trim() === "" && newNote.text.trim() === "") {
      setShowModal(false);
      return;
    }

    const noteToSave = {
      ...newNote,
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      time: Date.now(),
    };

    setNotes((prevNotes) => [noteToSave, ...prevNotes]);
    setShowModal(false);
  };

  //   // ✅ Update a note
  const updateNote = (id, newTitle, newText) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: newTitle, text: newText } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const deleteAllNotes = () => {
    setDeletingAll(true);
    setTimeout(() => {
      setNotes([]);
      localStorage.removeItem("notes");
      setDeletingAll(false);
    }, 300);
  };

  return (
    <div className="container-fluid my-3 app-flex justify-content-between">
      {/* Sidebar */}
      <div className="col-md-1 slide-app">
        <Sidebar addNote={handleAddNoteClick} />
      </div>

      {/* Notes List */}
      <div className="col-md-11">
        <div className="note-container">
          <div className="text-white text-center p-2 mb-2 rounded-3">
            <h2 className="fw-bolder">All Notes</h2>
          </div>

          <div className="note-container-notes d-flex flex-wrap gap-3 justify-content-sm-start justify-content-center align-items-center">
            {notes.length === 0 ? (
              <p className="text-muted text-white-50 mt-2">
                No notes added yet
              </p>
            ) : (
              notes.map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  deleteNote={deleteNote}
                  updateNote={updateNote}
                  setSelectedNote={setSelectedNote}
                  isFullScreen={false}
                  deletingAll={deletingAll}
                />
              ))
            )}
          </div>
        </div>

        {/* Full-screen Edit Mode */}
        {selectedNote && (
          <div className="fullscreen-note">
            <div className="fullscreen-note-content">
              <Note
                note={selectedNote}
                updateNote={updateNote}
                deleteNote={deleteNote}
                setSelectedNote={setSelectedNote}
                isFullScreen={true}
              />
              <button
                type="button"
                className="btn-close bg-danger text-bg-danger closee"
                aria-label="Close"
                onClick={() => setSelectedNote(null)}
              ></button>
            </div>
          </div>
        )}

        {/* Delete All Notes Button */}
        <Button
          onClick={deleteAllNotes}
          className="button allNote-del btn btn-danger float-end"
        >
          <i className="fa-regular fa-trash-can"></i>
        </Button>
      </div>

      {/* Add Note Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newNote.title}
                onChange={(e) =>
                  setNewNote({ ...newNote, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newNote.text}
                onChange={(e) =>
                  setNewNote({ ...newNote, text: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-outline-secondary"
            variant=""
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button className="btn-success" variant="" onClick={saveNewNote}>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NoteContainer;

//Update code

// import React, { useState, useEffect } from "react";
// import Note from "../Note/Note";
// import "./NoteContainer.css";

// function NoteContainer(props) {
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [updatedTitle, setUpdatedTitle] = useState("");
//   const [updatedText, setUpdatedText] = useState("");

//   const notes = Array.isArray(props.notes) ? props.notes : [];

//   // Open full-view mode with note details
//   const openFullView = (note) => {
//     setSelectedNote(note);
//     setUpdatedTitle(note.title || "");
//     setUpdatedText(note.text || "");
//   };

//   // Handle saving the updated note
//   const handleSaveNote = () => {
//     if (selectedNote) {
//       const updatedNotes = props.notes.map((note) =>
//         note.id === selectedNote.id
//           ? { ...note, title: updatedTitle, text: updatedText }
//           : note
//       );

//       props.setNotes([...updatedNotes]); // ✅ Ensure state is updated
//       localStorage.setItem("notes", JSON.stringify([...updatedNotes])); // ✅ Save updated notes
//       setSelectedNote(null); // ✅ Close full view
//     }
//   };

//   useEffect(() => {
//     const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     props.setNotes(storedNotes);
//   }, []);

//   return (
//     <div className="note-container">
//       <div className="text-white text-center p-2 mb-2 rounded-3">
//         <h2 className="fw-bolder">All Notes</h2>
//       </div>

//       <div className="note-container-notes d-flex flex-wrap gap-3 align-items-center">
//         {notes.length === 0 ? (
//           <p className="text-muted text-white-50 mt-2">No notes added yet</p>
//         ) : (
//           notes.map((item) => (
//             <Note
//               key={item.id}
//               note={item}
//               deleteNote={props.deleteNote}
//               updateNote={props.updateNote}
//               onClick={() => openFullView(item)}
//             />
//           ))
//         )}
//       </div>

//       {selectedNote && (
//         <div className="fullscreen-note">
//           <div
//             className="note p-3"
//             style={{ backgroundColor: selectedNote.color }}
//           >
//             <input
//               className="note-title border-0 text-black-50"
//               type="text"
//               value={updatedTitle}
//               onChange={(e) => setUpdatedTitle(e.target.value)}
//               placeholder="Title..."
//             />
//             <textarea
//               className="note_text border-0 text-black-50"
//               rows="10"
//               value={updatedText}
//               onChange={(e) => setUpdatedText(e.target.value)}
//               placeholder="Write your note here..."
//             ></textarea>
//           </div>
//           <div className="d-flex justify-content-between mt-2">
//             <button className="btn btn-success" onClick={handleSaveNote}>
//               ✅ Save
//             </button>
//             <button
//               className="btn btn-danger"
//               onClick={() => setSelectedNote(null)}
//             >
//               ✖ Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NoteContainer;
