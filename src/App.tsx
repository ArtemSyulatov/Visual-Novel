import './App.css'
import {MainMenu} from "./components/Pages/MainMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Scene} from "./components/Scene/Scene";
import {observer} from "mobx-react-lite";
import { injectStores } from '@mobx-devtools/tools';
import { Store, config } from './store/store';
const storeB = new Store(config);

injectStores({
  storeB,
});


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
