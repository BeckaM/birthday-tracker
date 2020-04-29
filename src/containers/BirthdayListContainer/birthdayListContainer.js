import React, { Component } from "react";

import Aux from '../../hoc/auxiliary';
import BirthdayList from '../../components/BirthdayList/birthdayList';

class BirthdayListContainer extends Component {

    state = {
        birthdays: [
            { id: 1, name: 'Dag Wahlstedt', date: '14 November', hidden: false },
            { id: 2, name: 'Francis Bacon', date: '10 December', hidden: true },
            { id: 3, name: 'Per Wahlstedt', date: '14 Juni', hidden: false },
            { id: 4, name: 'Lora Merkel', date: '14 Juli', hidden: false },
        ]
    }

    hideBirthdayHandler = (id) => {        
        const updatedBirthdays = [
            ...this.state.birthdays
        ];

        var birthdayToHide = updatedBirthdays.find(birthday => birthday.id === id);
        birthdayToHide.hidden = true;
        
        this.setState( { birthdays: updatedBirthdays } );
    }

    render () {

        // show todays birthday or countdown to next birthday
        // show list of all birthdays

        return (
            <Aux>
                <BirthdayList
                    birthdays={this.state.birthdays}
                    onBirthdayHidden={this.hideBirthdayHandler} />
            </Aux>
        );
    }
}

export default BirthdayListContainer;