import { Routes as Switch, Route} from 'react-router-dom'
import Fotos from '../pages/Fotos'
import Home from '../pages/Home'


const Rotas = () => {
    return(
        <Switch>
            <Route index element={<Home/>}/>
            <Route path='fotos' element={<Fotos/>}/>
        </Switch>
    )

}
export default Rotas