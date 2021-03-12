import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import DarkMode from './DarkMode';

DarkMode.showWidget();

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Hi! here from gamesnow! 😎😎'} />
        </div>
    );
}

export default App;
