import React from 'react';
import Birthday from '../Birthday/birthday';
import styles from './birthdayList.module.scss';
import { months } from '../../constants';
import IconButton from '../IconButton/iconButton';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import globalStyles from '../../assets/globalStyles/bootstrap.module.css';


const birthdayList = (props) => {

    const editBdayListClass = props.isEditMode ? styles.edit : '';

    return (
    <div className={`${styles.BirthdayList} ${editBdayListClass}`}>
        <div className={styles.header}>
            <p className="h4 pb-3">Birthdays</p>
            <IconButton onClick={props.onToggleEditMode} icon={faEdit} ariaLabel="Edit birthday list" />
        </div>  

        {months.map((month, index) => (
            <div className="pb-3" key={index}>
                <p className="h5">{month}</p>
                <ul className={`${globalStyles['list-group']} ${globalStyles['list-group-flush']}`}>

                    {props.birthdays.map(bday => {
                        const hiddenBdayClass = bday.hidden ? styles.hidden : '';
                        return (
                        
                        <li className={`${globalStyles['list-group-item']} ${hiddenBdayClass}`} key={bday.id}>
                            
                            <Birthday
                                name={bday.name}
                                date={bday.date}
                                hidden={bday.hidden} 
                                toggleVisibility={() => props.onToggleBirthdayVisibility(bday.id)}
                                isEditMode={props.isEditMode}/>
                        </li>
                        
                    )})}
                </ul>
            </div>
        ))}
    </div>
);
                    }

export default birthdayList;