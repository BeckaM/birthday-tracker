import React from 'react';
import Birthday from '../Birthday/birthday';
import styles from './birthdayList.module.css';
import { months } from '../../constants';

const birthdayList = (props) => (
    <div className={styles.BirthdayList}>
        <p className="h4 pb-3">Birthdays</p>

        {months.map(month => (
            <div className="pb-3">
                <p className="h5">{month}</p>
                <ul className="list-group list-group-flush">
                    {props.birthdays.filter(bday => !bday.hidden).map(bday => (
                        
                        <li className="list-group-item" key={bday.id}>
                            
                            <Birthday
                                name={bday.name}
                                date={bday.date} 
                                hide={() => props.onBirthdayHidden(bday.id)}/>
                        </li>
                        
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default birthdayList;