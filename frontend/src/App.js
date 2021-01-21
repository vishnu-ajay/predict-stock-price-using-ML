import './App.css';
import Logo from './components/logo/Logo'
import React from 'react'

class App extends React.Component {
    render()
    {
      return(
        <div>
          <div className="App">
                <Logo />
          </div>
        </div>
      );
    }
} 

export default App;
