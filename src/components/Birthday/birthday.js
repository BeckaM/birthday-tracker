import React from 'react';

import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import Aux from '../../hoc/auxiliary';
import IconButton from '../IconButton/iconButton';

import styles from './birthday.module.scss';
import globalStyles from '../../assets/globalStyles/bootstrap.module.css';

const birthday = (props) => {

    const renderHideShowButton = () => {
        if (props.isEditMode && props.hidden){
            return (<IconButton classes={styles.HideShowBirthdayBtn} onClick={props.toggleVisibility} icon={faEye} ariaLabel="Show birthday for person"></IconButton>);
        }
        else if (props.isEditMode && !props.hidden) {
            return (<IconButton classes={styles.HideShowBirthdayBtn} onClick={props.toggleVisibility} icon={faEyeSlash} ariaLabel="Hide birthday for person"></IconButton>);
        }
    }

    return (    
            <Aux>
                <span className={styles.BirthdayContainer}>
                    <div className={styles.BirthdayName}>
                        <span className={styles['Light-Text']}>{props.date}</span>
                        <span className={globalStyles['ml-2']}>{props.name}</span>
                    </div>        
                    
                    {renderHideShowButton()}
                        
                </span>        
                
            </Aux>
        );
}

export default birthday;