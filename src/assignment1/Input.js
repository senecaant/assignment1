import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = (props) => {

    //States
    const [value, setValue] = useState('');

    //Props
    const {onChange, type, placeholder} = props;

    const handleOnChange = (event, onChange) => {
        setValue(event.target.value);
        onChange();
    }

    return (
        <input 
            onChange={(event) => handleOnChange(event, onChange)} 
            type={type} 
            placeholder={placeholder || "This is my custom input"}
            value={value}
            className={styles.input}
        />
    );
};

// Prop Types
Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

export default Input;