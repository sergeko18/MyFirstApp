import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Content from './componets/Profile/Profile';

const App = () => {
  return (<div className='app-wrapper'>
    <Header />
    <Navbar />
    {/* <Content /> */}
    <Dialogs />
    

  </div>);
}

export default App;
