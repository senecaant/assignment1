import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/*
    CSS modules allow you to reuse class names in different components
    class names are generated after you build the react app
    reduces the likelihood of classes clashing.
    If you target tags, you won't get the benefits of CSS modules
*/

const Button = (props) => {
    // The shadow state will be internally managed by the button
    const [shadow, setShadow] = useState(false);
    const {children, color, handleClick, throwAwayProp} = props;
    // throwAwayProp is data that comes from App.js state.
    // From the perspective of the Button.js component, throwAway
    // is data that is external, therefore it is a prop to the Button
    // but a state to App.js
    console.log(throwAwayProp)
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[color]} ${shadow ? styles.shadow : ''}`}
            onClick={handleClick}
            onMouseOver={ () => setShadow(true)}
            onMouseOut={() => setShadow(false)}
        >
            {children}
        </button>
    );
};

// Props
/*
    children - string, html element, React Component
    handleClick - function
    color - string
*/
Button.propTypes = {
    color: PropTypes.string,
    handleClick: PropTypes.func,
    throwAwayProp: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node,
    ]),
};

export default Button;