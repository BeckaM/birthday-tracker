import React from 'react';

import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aux from '../../hoc/auxiliary';

import styles from './birthday.module.scss';
import globalStyles from '../../assets/globalStyles/bootstrap.module.css'

const birthday = (props) => (
    <Aux>
        <span className={styles.BirthdayContainer}>
            <div className={styles.BirthdayName}>
                <span className={styles['Light-Text']}>{props.date}</span>
                <span className={globalStyles['ml-2']}>{props.name}</span>
            </div>        
            
            <button type="button" onClick={props.hide} className={`${globalStyles.btn} ${globalStyles['btn-default']} ${styles.HideBirthdayBtn}`} aria-label="Left Align">
                <FontAwesomeIcon icon={faEyeSlash} />
            </button>        
        </span>        
        
    </Aux>
);

export default birthday;