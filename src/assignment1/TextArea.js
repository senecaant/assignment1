import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = (props) => {

    //States
    const [value, setValue] = useState('');

    //Props
    const {onChange, rows, cols, placeholder} = props;

    const handleOnChange = (event, onChange) => {
        setValue(event.target.value);
        onChange();
    }

    return (
        <textarea 
            onChange={(event) => handleOnChange(event, onChange)} 
            rows={rows} 
            cols={cols} 
            placeholder={placeholder || "This is my custom text area"}
            value={value}
            className={styles.textArea}>
        </textarea>
    );
};

// Props
TextArea.propTypes = {
    onChange: PropTypes.func,
    rows: PropTypes.number,
    cols: PropTypes.number,
    placeholder: PropTypes.string
};

export default TextArea;