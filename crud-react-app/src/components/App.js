import React, {lazy} from 'react'
//get React-Router from youtube br react-router-dom
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import Create from './create/create';
import Get from './get/get';
import Update from './update/update';
import Delete from './delete/delete';

function App() {

    return (
        <Router>
            <div className='App'>
                <div>
                    <h1> React CRUD </h1> 
                </div>              
            </div>   
            <Routes>
                <Route exact path="/create" element={<Create/>}/>
                <Route exact path="/get" element={<Get/>}/>
                <Route path="/update" element={<Update/>}/>
                <Route path="/delete" element={<Delete/>}/>
                <Route path="/show"/>
            </Routes>
        </Router>
    );
}

export default App;