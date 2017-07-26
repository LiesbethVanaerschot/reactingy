import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './../header';
import About from '../../pages/about';
import Greeting from '../greeting';

class Main extends Component {
    render() {
        return (
            <main>
                <Header/>
                {/*<Switch>*/}
                    {/*<Route exact path='/about' component={About}/>*/}
                {/*</Switch>*/}
                <div className="content">
                    <Greeting />
                    <About/>
                </div>
            </main>
        )
    }
}

export default Main;