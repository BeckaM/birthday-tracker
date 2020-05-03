import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import globalStyles from '../../assets/globalStyles/bootstrap.module.css';

const iconButton = (props) => {
    return (    
        <button type="button" onClick={props.onClick} className={`${globalStyles.btn} ${props.classes}`} aria-label={props.ariaLabel}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    );
}

export default iconButton;