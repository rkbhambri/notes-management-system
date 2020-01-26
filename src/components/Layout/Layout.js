import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import List from '../List/List';
import Note from '../Note/Note';
// import axios from 'axios';
import { getPredefinedNotes } from '../../helpers/notes';
import { isArrayNotEmpty } from '../../helpers/miscellaneous'
import Flash from '../Flash/Flash';

const Layout = (props) => {

    const [showNote, toggleShowNote] = useState(false);
    const [notes, setNotes] = useState(getPredefinedNotes);
    const [note, setNoteDetails] = useState({});
    const [newTag, setNewTag] = useState(false);
    const [error, setError] = useState('');
    const [filteredNotes, setFilteredNotes] = useState([]);

    const toggleNote = () => {
        toggleShowNote(prevState => !prevState);
        setNoteDetails({});
    };


    const getNote = (id, note) => {
        setNoteDetails(note);
        toggleShowNote(true)
    };

    const submitNote = (data) => {
        let notesData = [...notes];

        notesData.id = notesData.id ? notesData.id : Math.random();
        notesData.tags = notesData.tags ? notesData.tags : [];

        const noteIndex = notesData.findIndex(item => item.id === data.id);

        if (noteIndex > -1) {
            notesData[noteIndex] = data
        } else {
            notesData = notes.concat(data);
        }

        setNotes(notesData);
        toggleShowNote(false);
    };

    const deleteNote = (id) => {
        const newNotesState = notes.filter((note) => note.id !== id);
        setNotes(newNotesState);
    };

    const showTagForm = () => {
        setNewTag(true);
    };

    const closeTagForm = () => {
        setNewTag(false);
    };

    const deleteTag = (noteId, id) => {
        getNote(noteId);
    };

    const resetError = () => {
        setError('');
    };

    const filterByTag = (event) => {
        const value = event.target.value.toLowerCase();
        const updatedNotes = notes.filter((item) => {
            return (
                item.tags.indexOf(value) !== -1
            );
        });
        setFilteredNotes(updatedNotes);
    };

    return (
        <div className="layout">
            <Nav toggleNote={toggleNote} showNote={showNote} />
            <br />
            <div className="filter">
                <select
                    className="filter-by-tag"
                    style={{ border: '1px solid #ccc' }}
                    onChange={(event) => filterByTag(event)}
                    defaultValue="">
                    <option value="">Filter by tag</option>
                    <option value="code">code</option>
                    <option value="javascript">javascript</option>
                    <option value="reactjs">reactjs</option>
                    <option value="adventure">adventure</option>
                </select>
            </div>
            {error && <Flash error={error} resetError={resetError} />}
            <br />
            {showNote ?
                <Note
                    notes={notes}
                    note={note}
                    newTag={newTag}
                    submitNote={(data) => submitNote(data)}
                    showTagForm={showTagForm}
                    closeTagForm={closeTagForm}
                    deleteTag={deleteTag}
                />
                :
                <List
                    notes={isArrayNotEmpty(filteredNotes) ? filteredNotes : notes}
                    getNote={(noteId, note) => getNote(noteId, note)}
                    deleteNote={deleteNote}
                />}
        </div>
    );
};

export default Layout;
