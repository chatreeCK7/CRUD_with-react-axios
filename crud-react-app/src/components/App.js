import React, {lazy} from 'react'
//get React-Router from youtube br react-router-dom
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
// import Table from "./Table-data"

const Table = lazy(() => import('./Table-data'));

function App(){
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Table/>}/>
            </Routes>
        </Router>
        // <div> 
        //     <h1> React-CRUD - App</h1>
        // </div>
    );
}

export default App;