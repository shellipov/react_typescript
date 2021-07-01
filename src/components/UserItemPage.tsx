import React, {FC, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {IUser} from "../types/types";
import axios from "axios";

interface UsesItemPageParams {
    id: string
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UsesItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const resp = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(resp.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <button onClick={()=> history.push('/users')}> Back</button>

            <h1> UserPage of {user?.id}</h1>

            <h3>{user?.email}</h3>

            <h3>{user?.address.city} {user?.address.city} {user?.address.zipcode}</h3>


        </div>
    );
};

export default UserItemPage;