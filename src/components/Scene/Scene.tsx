import classes from './Scene.module.css'
import {Dialog} from "../Dialog/Dialog";
import {Button} from "../Ui/Button/Button";

export const Scene = () => {
    return (
        <div className={classes.backGround}>
            <div className={classes.dialogWindow}>
            <Button>{'<-'}</Button>
                <Dialog/>
            <Button>{'->'}</Button>
            </div>
        </div>
    );
};

