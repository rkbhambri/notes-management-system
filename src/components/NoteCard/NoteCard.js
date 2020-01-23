import React from 'react';

const NoteCard = (props) => {

    const getTags = (note) => {
        return (
            note.tags.map((tag, index) =>
                <span className="note-card-tag" key={index}>
                    {tag}
                </span>
            )
        );
    };

    const { note, getNote, deleteNote } = props;

    return (
        <div className="note-card-container">
            <div className="note-card-title">
                {note.title}
            </div>
            <div className="note-card-content">
                {note.content}
            </div>
            <div className="note-card-tags">
                {getTags(note)}
            </div>
            <span className="note-card-delete" onClick={() => deleteNote(note.id)}>
                <i className="material-icons">close</i>
            </span>
            <span className="note-card-edit" onClick={() => getNote(note.id)}>
                <i className="material-icons">mode_edit</i>
            </span>
        </div>
    );
}

export default NoteCard;