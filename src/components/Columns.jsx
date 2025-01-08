import {useState, useContext, useEffect} from "react";
import {Title, Card} from './'
import {TasksContext} from "../global/TasksContex";

export function Columns(props) {
const {columnData, theme} = props;
const {tasks} = useContext(TasksContext);
    const processInTasks = () => {
      return  tasks.filter(task => task.status === columnData.id)
};
const [tasksColumn, setTasksColumn] = useState(processInTasks());
useEffect(() => {
 setTasksColumn(processInTasks());
 //eslint-disable-next-line react-hooks/exhaustive-deps
},[tasks]);
    return (
        <div className={`col__column ${theme}`}>
            <Title
                type="h4"
                text={columnData.title}
                className="col__column_title"
            />
            <Title
                type="h4"
                text={columnData.id}
                className={` col__column_id ${theme}`}
            />
            <div className="column__cards">
                {
                    tasksColumn.map((task, index) => (
                        <Card
                        key={`card-${index}-${task.id}`}
                        taskData={task}
                        theme={theme}
                        />
                    ))
                }
            </div>
        </div>
    )
}