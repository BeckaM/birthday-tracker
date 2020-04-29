import React from 'react';

import Aux from '../../hoc/auxiliary';
import styles from './layout.module.css';
import TodaysBirthday from '../TodaysBirthdays/todaysBirthdays';
import BirthdayListContainer from '../../containers/BirthdayListContainer/birthdayListContainer';

const layout = (props) => (
    <Aux>
        <main className={styles.Content}>
            {props.children}
            <BirthdayListContainer />
        </main>
    </Aux>
);

export default layout;