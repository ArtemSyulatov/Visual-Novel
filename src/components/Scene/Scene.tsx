import classes from './Scene.module.css'
import {Dialog} from "../Dialog/Dialog";
import {Button} from "../Ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store/store";
import {FC, useEffect, useState} from "react";

export const Scene: FC = () => {
    const [dialog, SetDialog] = useState(0)
    const [currentScene, SetCurrentScene] = useState(1)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    const {store} = useStore()
    const dialogs = store.state[currentScene].dialogs
    const nextDialog = () => {
        SetDialog(() => dialog + 1)
    }
    useEffect(() => {
        if (!dialogs[dialog]) {
            SetCurrentScene(() => currentScene + 1)
            SetDialog(() => 0)
        }
        if (dialogs.length === 0) {
            navigate('/')
        }
    }, [dialog, dialogs])
    return (
        <div className={classes.container}>
            <Button className={classes.mainMenuBtn} onClick={handleClick}>Back To menu</Button>
            <div className={classes.backGround}>
                <div onClick={nextDialog} className={classes.dialogWindow}>
                    <Button>{'<-'}</Button>
                    <Dialog dialog={dialogs[dialog]?.text}/>
                    <Button onClick={nextDialog}>{'->'}</Button>
                </div>
            </div>
        </div>
    );
};

