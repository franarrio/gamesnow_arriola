import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ContextProvider } from './components/Context/CartContext';

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer greeting={''} />
                        </Route>
                        <Route exact path="/category/:categoryId">
                            <ItemListContainer greeting={''} />
                        </Route>
                        <Route exact path="/item/:itemId">
                            <ItemDetailContainer />
                        </Route>
                    </Switch>
                </Router>
            </ContextProvider>
        </div>
    );
}

export default App;
