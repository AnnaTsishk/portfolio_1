import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import My_works from "./my_works/My_works";
import Remote_work from "./remote_work/Remote_work";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <My_works/>
            <Remote_work/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
