import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../pages/about';
import Home from '../../pages/home';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

export default Main;