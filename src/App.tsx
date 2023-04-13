import React from 'react';
import Header from './components/Header';

function App() {
  const handleHomeClick = () => {
    console.log('Home clicked');
  };

  const handleAboutClick = () => {
    console.log('About clicked');
  };

  const handleLoginClick = () => {
    console.log('Login clicked');
  };
  return (
    <div className="App">
      <Header
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onLoginClick={handleLoginClick} />
      JALLO
    </div>
  );
}

export default App;
