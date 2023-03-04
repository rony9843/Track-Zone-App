import './App.css';
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";

function App() {
    return (
        <div className="App">
            <LocalClock />
            <ClockList />
        </div>
    );
}

export default App;
