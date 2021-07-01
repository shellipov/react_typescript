import React, {FC, useState,} from 'react';

// создание типа перечисления
export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProp {
    num1: string;
    num2?: string;
    variant?: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProp> =
    ({
         num1,
         num2,
         variant,
         onClick,
         children
     }) => {
        // eslint-disable-next-line
        const [state, setState] = useState(1)
        return (
            <div style={{
                width: num1,
                height: num2,
                border: variant === CardVariant.outlined ? "1px solid black" : 'none',
                background: variant === CardVariant.primary ? 'gray' : ''
            }}
                 onClick={() => onClick(state)}
            >
                {children}
            </div>
        );
    };

export default Card;
