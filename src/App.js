import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer greeting={'Hi! here from GamesNow! 😎😎'} />
                    </Route>
                    <Route exact path="/category/:categoryId">
                        <ItemListContainer greeting={'Hi! here from GamesNow! 😎😎'} />
                    </Route>
                    <Route exact path="/item/:itemId">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
