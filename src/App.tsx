import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { BlogRouter } from './BlogRouter';

function App() {
    return (
        <div className="App">
            <BlogRouter />
        </div>
    );
}

export default App;
