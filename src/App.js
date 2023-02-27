import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';
// import Signin from './components/Signin';
function App() {
    return (
        <div>
            <Header />
            <Hero />
            <List
            head = 'Treanding on Medium'
            num = '01' />
        </div>
    );
}

export default App ;