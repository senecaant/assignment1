import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {

    //States

    //Props
    const {imageLink, title, text} = props;

    return (
        <div className={styles.card}>
            <img src={imageLink || "https://www.w3schools.com/howto/img_avatar.png"} alt="Avatar"/>
            <div className={styles.container}>
                <h3>{title || "Title"}</h3>
                <p>{text || "Sample text goes here"}</p>
            </div>
        </div>
    );
};

// Props
Card.propTypes = {
    imageLink: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default Card;