import React from 'react';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header/>
                <TodoEditor/>
                <Footer/>
            </div>
        );
    }

}

export default App;
