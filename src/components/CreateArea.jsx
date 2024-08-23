import React from "react";
import Note from "./Note";

export default function CreateArea() {

    const [createNote, setCreateNote] = React.useState({
        titleString: "",
        detailsString: ""
    });

    const [allNotes, setAllNotes] = React.useState([]);

    function handleTitleChange(event) {
        const inputText = event.target.value;
        setCreateNote(prevNote => ({
            ...prevNote,
            titleString: inputText
        }));
    }

    function handleDetailsChange(event) {
        const inputText = event.target.value;
        setCreateNote(prevNote => ({
            ...prevNote,
            detailsString: inputText
        }));
    }

    function addNote(event) {
        event.preventDefault();

        setAllNotes(prevNotes => [
            ...prevNotes,
            createNote
        ]);

        setCreateNote({
            titleString: "",
            detailsString: ""
        });
    }

    return (
        <div className="newNote">
            <form>
                <input 
                    className="newNoteTitle" 
                    id="newNoteTitle" 
                    type="text" 
                    placeholder="Title" 
                    value={createNote.titleString}
                    onChange={handleTitleChange} 
                />
                <textarea 
                    className="newNoteDetails" 
                    id="newNoteDetails" 
                    placeholder="Take a note..." 
                    value={createNote.detailsString}
                    onChange={handleDetailsChange}
                />
                <button 
                    className="newNoteBtn" 
                    id="newNoteBtn" 
                    onClick={addNote}
                >
                    Add
                </button>
            </form>

            {/* Render all notes */}
            <div className="notesList">
                {allNotes.map((note, index) => (
                    <Note 
                        key={index}
                        title={note.titleString} 
                        content={note.detailsString}
                    />
                ))}
            </div>
        </div>
    );
}
