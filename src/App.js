import React from 'react';
import './App.css';
import Wine from './Components/wine'
import WineInfo from './Components/wineinfo'
import { BrowserRouter, Route } from 'react-router-dom'



export default function App() {
        return (
          <BrowserRouter>
          <div className = "App">
              <Route exact path="/" component={Wine} />
              <Route path= "/wines/:id" component={WineInfo} />  
             </div>
            </BrowserRouter>
        )
}