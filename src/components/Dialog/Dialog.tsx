import classes from './Dialog.module.css'

interface DialogProps {
    dialog:string
}

export const Dialog = ({dialog}:DialogProps) => {
    return (
        <div className={classes.dialogContainer}>
            <p>
                Dialog: {dialog}
            </p>
        </div>
    );
};

