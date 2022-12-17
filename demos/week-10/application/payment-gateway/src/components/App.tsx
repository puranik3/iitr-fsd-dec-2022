import Menu from './Menu';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1 className="app-title">Choose your mode of payment and complete the purchase</h1>
            <Menu />
        </div>
    );
};

export default App;