import { BrowserRouter , Switch,Route} from 'react-router-dom';
import Bridge from '../components/Sections/Bridge';
const Routing = () =>{

    return(
       <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/bridge'  componenet={Bridge} />
                </Switch>
            </BrowserRouter>
       </>
    )
}

export default Routing;