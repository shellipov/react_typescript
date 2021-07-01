import React from 'react';
import Card, {CardVariant} from "./Card";
import EventsExample from "./EventsExample";
// import UserList from "./components/UserList";
// import users from "./data/data";

const FuckingPage = () => {
    return (
        <div>
            <Card num1={'100px'} num2={'100px'} variant={CardVariant.outlined}
                  onClick={(num) => console.log('clicked' + num)}>
                <button> Кнопа</button>
            </Card>

            <EventsExample/>

            {/*<UserList users={users}></UserList>*/}
        </div>
    );
};

export default FuckingPage;