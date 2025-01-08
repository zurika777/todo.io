import {useState} from 'react'
import {createContext} from "react";
import {config} from "./config";
import {browserStorage} from "./browserStorage";

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
    const processExistingTasks = () => {

        if (browserStorage.exists(config.storage.tasks)) { // თუ არის  storage
            return browserStorage.get(config.storage.tasks); // მაშინ ვაბრუნებთ  JSON - ის სახით
        }
        return []; // თუ არა ვაბრუნებთ ცარიელ ერეის []
    };

    const [tasks , setTasks] = useState(processExistingTasks()); // useState(processExistingTasks() ნიშნავს tasks -ის defaul value თუ მოიპოვება storage მაშინ ეს სტორიგია თუ არ მოიპოვება მაშინ ცარიელი ერეი []
    const setVars = (data) => {   //  (data) არის {id: 1, title: 'sdsd', status: 1, sorting:  1}
        setTasks(data);
        browserStorage.set(config.storage.tasks, data);
    };
    const createNewTask = (taskName) => {
        let tasksClone = [...tasks];
        let  filterFirstColumnTasks = tasksClone.filter(task => task.status === config.defaultColumnIndex);
          // tasks არის (3) [{…}, {…}, {…}]  {id: 1, title: 'რაღაც', status: 1, sorting:}
        let newTask ={
            id: tasksClone.length + 1,
            title: taskName,
            status: config.defaultColumnIndex,
            sorting: filterFirstColumnTasks.length + 1
        };
        //console.log(newTask)
        tasksClone.push(newTask);
        setVars(tasksClone);
    };

    return (
        <TasksContext.Provider value={{
            tasks,
            createNewTask
        }}>
            {children}
        </TasksContext.Provider>
    );
};

