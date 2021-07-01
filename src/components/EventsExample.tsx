import React, {useRef, useState} from 'react';

const EventsExample = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent) => {
        console.log('управл - ' + value)
        console.log('неуправл - ' + inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('it\'s drag!!')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROOOOP!!!!')
    }
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>

            <input value={value} onChange={changeHandler} placeholder={'управляемый'}/> <br/>
            <input ref={inputRef} placeholder={'неуправляемый'}/>
            <button onClick={clickHandler}>Кнопь</button>

            <div
                draggable={true}
                style={{height:'100px', width: '100px', background: 'red'}}
                onDrag={dragHandler}
            ></div>

            <div
                style={{height: '100px', width: '100px', background: isDrag ? 'green' : 'red', marginTop: '10px'}}
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
            ></div>

        </div>
    );
};

export default EventsExample;