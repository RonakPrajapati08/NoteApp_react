// import React, { useState, useEffect } from "react";
// import "./Note.css";

// function Note(props) {
//   const [animate, setAnimate] = useState(true);
//   const [text, setText] = useState(props.note.text);

//   // Update the note's text
//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);
//   };

//   useEffect(() => {
//     // Remove animation class after 500ms
//     const timeout = setTimeout(() => setAnimate(false), 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`note ${animate ? "note-animate" : ""}`}
//       style={{ backgroundColor: props.note.color }}
//     >
//       <textarea
//         className="note_text border-0"
//         rows="10"
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Write your note here..."
//       ></textarea>
//       <div className="d-flex justify-content-between note-footer">
//         <p className="time mb-0">
//           {new Date(props.note.time).toLocaleString()}
//         </p>
//         <i
//           className="fa-solid fa-trash"
//           onClick={() => props.deleteNote(props.note.id)}
//         ></i>
//       </div>
//     </div>
//   );
// }

// export default Note;

// import React, { useState, useEffect } from "react";
// import "./Note.css";

// function Note(props) {
//   const [animate, setAnimate] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [title, setTitle] = useState(props.note.title || ""); // New title state
//   const [text, setText] = useState(props.note.text);

//   const handleTitleChange = (e) => {
//     const newTitle = e.target.value;
//     setTitle(newTitle);
//     props.updateNote(props.note.id, newTitle, text); // Update title in parent
//   };

//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);
//     props.updateNote(props.note.id, title, newText); // Update text in state
//   };

//   // If `deletingAll` is true, trigger the zoom-out animation
//   useEffect(() => {
//     if (props.deletingAll) {
//       setDeleting(true);
//     }
//   }, [props.deletingAll]);

//   useEffect(() => {
//     const timeout = setTimeout(() => setAnimate(false), 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`note ${animate ? "note-animate" : ""}  ${
//         deleting ? "note-zoom-out" : ""
//       }`}
//       style={{
//         backgroundColor: props.note.color,
//         border: "1px solid #b8b4b48a",
//         backdropFilter: "blur(10px)",
//         boxShadow: "inset -6px -4px 2px rgba(255, 255, 255, 0.03)",
//       }}
//     >
//       <input
//         className="note-title border-0 text-black-50"
//         type="text"
//         value={title}
//         onChange={handleTitleChange}
//         placeholder="Title..."
//         style={{
//           fontWeight: "bold",
//           fontSize: "1.2rem",
//           width: "100%",
//           marginBottom: "8px",
//           padding: "5px",
//           borderRadius: "5px",
//           outline: "none",
//           backgroundColor: "transparent",
//         }}
//       />
//       <textarea
//         className="note_text border-0 text-black-50"
//         rows="10"
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Write your note here..."
//       ></textarea>
//       <div className="d-flex justify-content-between note-footer">
//         <p className="time mb-0">
//           {new Date(props.note.time).toLocaleString()}
//         </p>
//         {/* <i
//           className="fa-solid fa-trash"
//           onClick={() => props.deleteNote(props.note.id)}
//         ></i> */}
//         <i
//           className="fa-regular fa-trash-can"
//           onClick={() => {
//             setDeleting(true);
//             setTimeout(() => props.deleteNote(props.note.id), 300); // Calls parent delete function
//           }}
//         ></i>
//       </div>
//     </div>
//   );
// }

// export default Note;

/////////////////this is MAIN code///////////////////

// import React, { useState, useEffect } from "react";
// import "./Note.css";

// function Note(props) {
//   const [animate, setAnimate] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [title, setTitle] = useState(props.note.title || "");
//   const [text, setText] = useState(props.note.text);

//   useEffect(() => {
//     if (props.deletingAll) {
//       setDeleting(true);
//     }
//   }, [props.deletingAll]);

//   useEffect(() => {
//     const timeout = setTimeout(() => setAnimate(false), 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`note ${animate ? "note-animate" : ""} ${
//         deleting ? "note-zoom-out" : ""
//       }`}
//       // Open full-screen on click
//       style={{
//         backgroundColor: props.note.color,
//         border: "1px solid #b8b4b48a",
//         backdropFilter: "blur(10px)",
//         boxShadow: "inset -6px -4px 2px rgba(255, 255, 255, 0.03)",
//         cursor: "pointer",
//       }}
//     >
//       <input
//         className="note-title border-0 text-black-50"
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title..."
//       />
//       <textarea
//         className="note_text border-0 text-black-50"
//         rows="10"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Write your note here..."
//       ></textarea>
//       <div className="d-flex justify-content-between note-footer">
//         <p className="time mb-0">
//           {new Date(props.note.time).toLocaleString()}
//         </p>
//         <div>
//           <i
//             className="fa-regular fa-pen-to-square mx-2"
//             onClick={props.onClick}
//           ></i>
//           <i
//             className="fa-regular fa-trash-can"
//             onClick={() => {
//               setDeleting(true);
//               setTimeout(() => props.deleteNote(props.note.id), 300);
//             }}
//           ></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Note;

/////////// MAIN code CLOSE////////////////

import React, { useState, useEffect } from "react";
import "./Note.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Note({
  note,
  deleteNote,
  updateNote,
  setSelectedNote,
  setNotes,
  isFullScreen,
  deletingAll,
}) {
  const [title, setTitle] = useState(note.title || "");
  const [text, setText] = useState(note.text);
  const [isEditing, setIsEditing] = useState(isFullScreen);
  const [showModal, setShowModal] = useState(false); // View modal state
  const [animate, setAnimate] = useState(true);
  const [deleting, setDeleting] = useState(false);

  const handleSave = () => {
    updateNote(note.id, title, text);
    setIsEditing(false);
    setSelectedNote(null);
  };

  useEffect(() => {
    if (deletingAll) {
      setDeleting(true);
    }
  }, [deletingAll]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Disable scroll when modal is open
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Reset scroll when component unmounts
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {/* Main Note Component */}
      <div
        className={`${isEditing ? "note-fullscreen" : "note"} ${
          animate ? "note-animate" : ""
        } ${deleting ? "note-zoom-out" : ""}`}
        style={{ backgroundColor: note.color }}
      >
        {!isEditing ? (
          <div className="note-title single-line border-0 pb-2 text-black-50 bg-transparent fs-4">
            {title}
          </div>
        ) : (
          <input
            className="note-title border-0 text-black-50 bg-transparent mb-2 fs-4"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            disabled={!isEditing}
          />
        )}

        {!isEditing ? (
          <div className="truncated-text text-black-50 fw-bold">{text}</div>
        ) : (
          <textarea
            className="note_text border-0 text-black-50 bg-transparent"
            rows="7"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your note here..."
          ></textarea>
        )}

        <div
          className={`${
            isEditing ? "d-flex align-items-center justify-content-between" : ""
          }`}
        >
          <div className="d-flex align-items-center justify-content-between note-footer">
            <div>
              <p className="time mb-0">
                {new Date(note.time).toLocaleString()}
              </p>
            </div>
            <div>
              {!isFullScreen && (
                <>
                  {/* View Icon - Opens Full-Screen Modal */}
                  <i
                    className="fa-regular fa-eye "
                    onClick={() => setShowModal(true)}
                    style={{ cursor: "pointer" }}
                    title="View Note"
                  ></i>

                  <i
                    className="fa-regular fa-pen-to-square mx-2"
                    onClick={() => setSelectedNote(note)}
                  ></i>
                  <i
                    className="fa-regular fa-trash-can"
                    onClick={() => {
                      setDeleting(true);
                      setTimeout(() => deleteNote(note.id), 300);
                    }}
                  ></i>
                </>
              )}
            </div>
          </div>

          {/* Show Save button only in Full-Screen Edit Mode */}
          {isFullScreen && isEditing && (
            <button
              className="btn text-bg-success fs-5 px-2 py-1"
              onClick={handleSave}
            >
              <i className="fa-regular fa-floppy-disk"></i>
            </button>
          )}
        </div>
      </div>

      {/* Full-Screen View Modal */}
      {showModal && (
        <div
          className="modal fade show d-block note-animate"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog p-2 p-sm-4 modal-fullscreen">
            <div
              className="modal-content rounded-4"
              style={{ backgroundColor: note.color }}
            >
              <div className="modal-header">
                <div className="note-title text-black-50 modal-title">
                  {title}
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="note_text fs-6 text-black-50">{text}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Note;

// import React, { useState, useEffect } from "react";
// import "./Note.css";

// function Note(props) {
//   const [animate, setAnimate] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [text, setText] = useState(props.note.text);

//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);
//     props.updateNote(props.note.id, newText);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => setAnimate(false), 500);
//     return () => clearTimeout(timeout);
//   }, []);

//   const handleDelete = () => {
//     setDeleting(true); // Trigger zoom-out animation
//     setTimeout(() => {
//       props.deleteNote(props.note.id); // Delete note after animation
//     }, 300); // Match animation duration
//   };

//   return (
//     <div
//       className={`note ${animate ? "note-animate" : ""} ${
//         deleting ? "note-zoom-out" : ""
//       }`}
//       style={{ backgroundColor: props.note.color }}
//     >
//       <textarea
//         className="note_text border-0"
//         rows="10"
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Write your note here..."
//       ></textarea>
//       <div className="d-flex justify-content-between note-footer">
//         <p className="time mb-0">
//           {new Date(props.note.time).toLocaleString()}
//         </p>
//         <i className="fa-solid fa-trash" onClick={handleDelete}></i>
//       </div>
//     </div>
//   );
// }

// export default Note;
