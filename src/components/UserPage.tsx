import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useHistory} from 'react-router-dom';

const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem onClick={(user)=> history.push('user/' + user.id) } user={user} key={user.id}/>}
            />

        </div>
    );
};

export default UserPage;