import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastrarInvestimento from "../pages/CadastrarInvestimento";
import ListarInvetimentos from "../pages/ListarInvestimentos";


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListarInvetimentos}></Route>
                <Route exact path="/cadastrar-investimento" component={CadastrarInvestimento}></Route>
                <Route exact path="/listar-investimentos" component={ListarInvetimentos}></Route>
            </Switch>
        </BrowserRouter>
    );
}