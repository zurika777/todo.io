export function Card(props) {
    const {taskData, theme} = props;
    return (
        <div className={`cart__container ${theme}`}>
            <p>{taskData.title}</p>
        </div>
    )
}

//TODO ref რეფერენსი იგივე id - ია
//TODO useCallBack