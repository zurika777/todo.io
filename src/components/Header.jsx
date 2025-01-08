import {useContext, useState} from "react";
import {TasksContext} from "../global/TasksContex";
import {Button} from './Button'
import NightlightIcon from '@mui/icons-material/Nightlight';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export function Header(props) {
    const {theme, changeTheme} = props;
    const {createNewTask} = useContext(TasksContext);
    const [isOpen, setIsOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false)
    };
    const handleAdd =() => {
        createNewTask(taskName);  // შექმნის tasks და გადასცემს არსებულ taskName -ს
        setIsOpen(false);  // ჩახურავს values -ს false -ზე  useState(false);
        setTaskName('');  // შეცვლის სიცარიელეზე  useState('');
    };
    const changeTaskName =(event) => {
        let value = event.target.value;
        setTaskName(value);
    };
    return (

        <header className="app__header">

            <Button
            className ="button__icon__add__task"
            title="Add Task"
            onClick={handleOpen}
            />

            <Button
            theme={theme}
            className="button__icon__theme"
            onClick ={changeTheme}
            >
                <NightlightIcon

                sx={{ color: `${theme === 'dark' ? '#fff' : '#222'}`}}
                />
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Ready to create your first Task ?"}
                </DialogTitle>
                <DialogContent>
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={taskName}
                        onChange={changeTaskName}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleAdd} autoFocus>Add</Button>
                </DialogActions>
            </Dialog>
        </header>

    )
}

// TODO  onClick={() => console.log('CLICKED')}  ლოგ როგორ გამოვიტანოთ