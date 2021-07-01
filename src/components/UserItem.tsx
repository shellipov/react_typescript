import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={()=> onClick(user)} style={{ padding : '15px', margin: '5px', border : '1px solid black'}}>
            {user.name} живет в городе {user.address.city} на улице { user.address.city}
        </div>
    );
};

export default UserItem;