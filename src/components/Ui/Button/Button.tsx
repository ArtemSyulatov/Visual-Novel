import classes from './Button.module.css'

export const Button = (props) => {
    return (
        <button {...props} className={classes.button} type="button">
            {props.children}
        </button>
    );
};
