import classes from './Button.module.css'

interface buttonProps{
    children:string
    onClick:()=>void
}

export const Button = (props:buttonProps) => {
    return (
        <button {...props} className={classes.button} type="button">
            {props.children}
        </button>
    );
};
