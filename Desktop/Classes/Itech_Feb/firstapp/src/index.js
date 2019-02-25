import React from 'react';
import ReactDOM from 'react-dom';

// component
import Book from './components/books';
import Header from './components/header'


const App = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <div>Functional Part</div>
            <h1>React Component</h1>
            <Book/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
