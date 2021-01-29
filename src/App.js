import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header/>
                <TodoList/>
                <Footer/>
            </div>
        );
    }

}

export default App;
