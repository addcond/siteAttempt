import React from 'react';
import Form from './elements/form/form';
import Info from './elements/information/info';
import Favorites from './elements/listManipulations/favorites';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './store/reducers';
import {Provider} from 'react-redux';
import './App.css';
import SearchResults from './elements/listManipulations/searchResults';
import thunk from 'redux-thunk';


const store = createStore(Reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Router>
                    <Route exact={true} path='/' render={() => {
                        return (
                            <>
                                <div className='navigationButton'>
                                    <Link to='/favorites' className='favButton'>Favorites</Link>
                                </div>
                                <Form />
                                <SearchResults/>
                            </>
                        )
                    }}
                    />
                    <Route path='/favorites' render={() => {
                        return (
                            <>
                                <div className='navigationButton'>
                                    <Link to='/' className='favButton'>Home</Link>
                                </div>
                                <Favorites/>
                            </>
                        )
                    }}
                    />
                    <Route path='/info' render={() => {
                        return (
                            <>
                                <div className='navigationButton'>
                                    <Link to='/' className='favButton'>Home</Link>
                                    <Link to='/favorites' className='favButton'>Favorites</Link>
                                </div>
                                <Info />
                            </>
                        )
                    }}
                    />
                </Router>
            </div>
        </Provider>
    );
}

export default App;