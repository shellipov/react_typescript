import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import {useHistory} from 'react-router-dom';


interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    const history = useHistory()
        return (
        <div>
            {users.map(user =>

                <UserItem user={user} onClick={ (user)=> history.push('/user/' + user.id) } key={user.id}/>

            )}
        </div>
    );
}
;

export default UserList;