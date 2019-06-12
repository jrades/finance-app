import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from "./Components/Welcome";
import GetInformation from "./Components/GetInformation";
import Header from "./Components/Header";
import CalcButton from "./Components/CalcButton";
import Inputs from './Components/Inputs';


class App extends Component {
    render() {
        return (<div>
            <Switch>
                <Route path="/Inputs" component={Inputs} />
                <Route path="/GetInformation" component={GetInformation} />
                <Route path="/" component={Welcome} />
            </Switch>

        </div>);
    }
}

export default App;