import {IUser} from "../types/types";

const  users: IUser[] = [
    {
        id: 1,
        name: 'Dima',
        email: 'lalalalal@lalal.ua',
        address: {city: 'Moscow',
            street: 'Lenina',
            zipcode: '123'}
    },
    {
        id: 2,
        name: 'NeDima',
        email: 'nelalalalal@lalal.ua',
        address: {city: 'NeMoscow',
            street: 'NeLenina',
            zipcode: 'Ne123'}
    },
]

export default users