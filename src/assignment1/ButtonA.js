import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonA.module.css';

const ButtonA = (props) => {

    //States

    //Props
    const {onClick, color, children} = props;

    return (
        <button 
            onClick={onClick} 
            type="button"
            className={`${styles.button} ${styles[color || "success"]}`}>
        {children}
        </button>
    );
};

// Props
ButtonA.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ])
};

export default ButtonA;