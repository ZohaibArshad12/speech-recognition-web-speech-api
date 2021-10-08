import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Act from './pages/act/Act';
import SpeechRecognition from './pages/speechRecognition/SpeechRecognition';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Act />
          </Route>
          <Route path="/speech" exact>
            <SpeechRecognition></SpeechRecognition>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
