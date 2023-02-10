import './App.css';
import Nav from './components/NavBar/Nav'
import HomePage from './components/HomePage/HomePage'


function App() {
    return (
        <div className="App">
            <div>
                <Nav/>
                <main>
                    <HomePage/>
                </main>
            </div>

        </div>
    );
}

export default App;
