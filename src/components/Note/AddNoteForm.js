import React, { useState, useEffect } from 'react';
import { isEmpty, isObjectEmpty, isArrayNotEmpty } from '../../helpers/miscellaneous';

const AddNoteForm = (props) => {

    const [noteDetails, setNoteDetails] = useState({
        title: '',
        content: ''
    });

    const [tagText, setTagText] = useState('');
    const [tags, setTags] = useState([]);

    useEffect(() => {
        if (!isObjectEmpty(props.note)) {
            setNoteDetails(props.note);
            setTags(props.note.tags);
        }
    }, [props.note]);

    const [invalidNoteDetails, setInvalidNoteDetails] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const invalidNoteData = { ...invalidNoteDetails };

        for (let key in noteDetails) {
            if (key !== 'tags' && key !== 'id' && isEmpty(noteDetails[key])) {
                invalidNoteData[key] = true;
            }
        }

        if (!isArrayNotEmpty(tags)) {
            invalidNoteData.tags = true;
        }

        setInvalidNoteDetails(invalidNoteData);

        if (isObjectEmpty(invalidNoteData)) {
            let notes = { ...noteDetails, tags: tags }
            props.submitNote(notes);
            props.closeTagForm();
        }
    };

    const noteChangeHandler = (event) => {
        const note = { ...noteDetails };
        note[event.target.id] = event.target.value;
        setNoteDetails(note);

        if (invalidNoteDetails[event.target.id]) {
            delete invalidNoteDetails[event.target.id];
            setInvalidNoteDetails(invalidNoteDetails);
        }
    };

    const addTag = (event) => {
        let tagsDetails = [];
        if (event.keyCode === 13) {
            tagsDetails = tags.concat(event.target.value);
            setTags(tagsDetails);
            setTagText('');
        }
    };

    const addTagOnBlur = (event) => {
        let tagsDetails = [...tags];
        if (!isEmpty(event.target.value)) {
            tagsDetails = tags.concat(event.target.value);
            setTags(tagsDetails);
            setTagText('');
        }
    };

    const tagTextChangeHandler = (value) => {
        setTagText(value)
        if (invalidNoteDetails.tags) {
            delete invalidNoteDetails.tags;
            setInvalidNoteDetails(invalidNoteDetails);
        }
    };

    const deleteTag = (tagIndex) => {
        const tagsDetails = [...tags];
        tagsDetails.splice(tagIndex, 1);
        setTags(tagsDetails);
    };

    return (
        <form className="note-form">
            <div className="note-title">
                <input
                    className="note-title-input"
                    required
                    type="text"
                    placeholder="Note Title..."
                    id="title"
                    value={noteDetails.title}
                    onChange={(event) => noteChangeHandler(event)}
                />
                {invalidNoteDetails.title && <div style={{ color: 'red' }}>Title is required</div>}
            </div>
            <div className="note-title">
                <input
                    className="note-title-input"
                    type="text"
                    placeholder="Tags"
                    id="tags"
                    value={tagText}
                    onKeyDown={(event) => addTag(event)}
                    onBlur={(event) => addTagOnBlur(event)}
                    onChange={(event) => tagTextChangeHandler(event.target.value)}
                />
                {invalidNoteDetails.tags && <div style={{ color: 'red' }}>Tags are required</div>}
            </div>
            <div className="tags" style={{ margin: '10px 0px 10px 0px', display: 'flex' }}>
                {
                    tags.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginLeft: '10px' }}
                                onClick={() => deleteTag(index)}>
                                {item} &nbsp;&#x2715;
                            </div>
                        );
                    })
                }
            </div>
            <div className="note-textarea-container">
                <textarea
                    className="note-textarea"
                    required
                    placeholder="Type Here..."
                    id="content"
                    value={noteDetails.content}
                    onChange={(event) => noteChangeHandler(event)}
                />
                {invalidNoteDetails.content && <div style={{ color: 'red', textAlign: 'center' }}>Content is required</div>}
            </div>
            <input
                className="note-button"
                type="button"
                defaultValue="Submit"
                onClick={(e) => onSubmit(e)} />
        </form>
    );
};

export default AddNoteForm;
