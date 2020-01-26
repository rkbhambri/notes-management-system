import React from 'react';
import NoteCard from '../NoteCard/NoteCard';

const List = (props) => {

    const { notes, getNote, deleteNote } = props;

    const cards = notes.map((note, index) => {
        return (
            <NoteCard
                key={index}
                index={index}
                note={note}
                getNote={(noteId) => getNote(noteId, note)}
                deleteNote={deleteNote}
            />
        );
    });

    return (
        <div className="list-container">
            {cards}
        </div>
    );
};

export default List;