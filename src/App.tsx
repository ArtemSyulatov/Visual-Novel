import './App.css'
import {MainMenu} from "./components/Pages/MainMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Scene} from "./components/Scene/Scene";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'}
                           element={<MainMenu/>}/>
                    <Route path={'/scene'}
                           element={<Scene/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
})

export default App
