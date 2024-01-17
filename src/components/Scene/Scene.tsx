import classes from './Scene.module.css'
import {Dialog} from "../Dialog/Dialog";
import {Button} from "../Ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store/store";
import {FC} from "react";
import { observer } from 'mobx-react-lite';

export const Scene: FC = observer(() => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
    const {store} = useStore()
    return (
        <div className={classes.container} style={{backgroundImage:`url('../../../public/${1}.jpg')`}}>
            <Button className={classes.mainMenuBtn} onClick={handleClick}>Back To menu</Button>
            <div className={classes.backGround}>
                <div onClick={store.currentScene.nextDialog} className={classes.dialogWindow}>
                    <Button onClick={store.currentScene.PreviousDialog}>{'<-'}</Button>
                    <Dialog dialog={store.currentScene.currentDialog.text}/>
                    <Button >{'->'}</Button>
                </div>
            </div>
        </div>
    );
});

