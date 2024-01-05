import classes from './MainMenu.module.css'



export const MainMenu = () => {
    return (
        <div className={classes.menuHeader}>
            <h1>Main Menu</h1>
        <div className={classes.menu}>
            <div className={classes.buttons}>
                <button>
                    Start
                </button>
                <button>
                    Settings
                </button>
                <button>
                    Exit
                </button>
            </div>
        </div>
        </div>
    );
};

