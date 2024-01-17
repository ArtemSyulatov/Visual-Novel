import classes from './MainMenu.module.css'
import {Button} from "../../Ui/Button/Button";
import {useNavigate} from "react-router-dom";

export const MainMenu = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/scene');
    }
    return (
        <div className={classes.menuHeader}>
            <h1>Main Menu</h1>
            <div className={classes.menu}>
                <div className={classes.buttons}>
                    <Button onClick={handleClick}>
                        Start
                    </Button>
                    <Button>
                        Settings
                    </Button>
                    <Button>
                        Exit
                    </Button>
                </div>
            </div>
        </div>
    );
};

