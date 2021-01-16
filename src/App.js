import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TicketList from "./components/TicketList/TicketList";
import CurrencySwitcher from "./components/CurrencySwitcher/CurrencySwitcher";
import StopsFilter from './components/StopsFilter/Stopsfilter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Sidebar>
        <CurrencySwitcher />
        <StopsFilter/>
      </Sidebar>
      <TicketList/>
    </div>
  );
}

export default App;
