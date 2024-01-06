import classes from './Dialog.module.css'
import {useStore} from "../../store/store";


export const Dialog = () => {
    const {store} = useStore()
    const test = store.state[1].dialogs.map((e) => <div>{e.text}</div>)
    console.log(store.state[1])
    return (
        <div className={classes.dialogContainer}>
            <p>
                Dialog:{test[0]}
            </p>
        </div>
    );
};

