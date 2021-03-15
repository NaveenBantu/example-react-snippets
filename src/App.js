import React from 'react';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

    render() {

        return (
            <div className="pure-g">
                <div className="pure-u-1">
                    <Header/>
                    <TodoEditor/>
                    <Footer/>
                </div>
            </div>
        );
    }

}

export default App;
