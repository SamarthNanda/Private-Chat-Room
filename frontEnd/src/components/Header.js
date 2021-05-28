import React from 'react';
import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './Chat/Chat'


export default function Header() {

    return (
        <div>
            <header className="App-header">
                
                <Router>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/" exact component={Login} />
                        <Route path="/chat" exact component={Chat} />
                    </Switch>
                </Router>
                
            </header>
        </div>
    )
}
