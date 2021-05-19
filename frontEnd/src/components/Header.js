import React from 'react';
import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom'
import Chat from './Chat/Chat'


export default function Header(props) {

    return (
        <div>
            <header className="App-header">
                
                <HashRouter>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/" exact component={Login} />
                        <Route path="/chat" exact component={Chat} />
                    </Switch>
                </HashRouter>
                
            </header>
        </div>
    )
}
