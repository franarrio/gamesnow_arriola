import NavBar from './components/NavBar';
import Darkmode from 'darkmode-js';

// Loading dark mode
new Darkmode({
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: false,
    label: '🌓'
}).showWidget();

function App() {
    return (
        <div className="App">
            <NavBar />
        </div>
    );
}

export default App;
