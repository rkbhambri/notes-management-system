import React from 'react';
import AddNoteForm from './AddNoteForm';

const Note = (props) => {
    const { closeTagForm } = props;
    return (
        <div className="note-container">
            <h2>Edit This Note</h2>
            <AddNoteForm notes={props.notes} closeTagForm={closeTagForm} submitNote={props.submitNote} note={props.note} />
        </div>
    );
};

export default Note;