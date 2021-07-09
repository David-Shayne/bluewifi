import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';

import './assets/css/nucleo-icons.min.css';
import './assets/css/blk-design-system-react.min.css';
import './assets/css/custom.css';

import LandingPage from './views/LandingPage';
import IssuePage from './views/IssuePage';
import PricingPage from './views/PricingPage';
import AUP from './views/AcceptableUsePolicy';
import Book from './views/BookPage';
import Terms from './views/TermsPage'

function App() {
    return (
        <BrowserRouter basename='/'>
    
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/issue'>
        <IssuePage />
      </Route>
      <Route path='/pricing'>
        <PricingPage />
      </Route>
      <Route path='/aup'>
        <AUP />
      </Route>
      <Route path='/book'>
        <Book />
      </Route>
      <Route path='/contact'>
        <Book />
      </Route>
      <Route path="/terms">
        <Terms/>
      </Route>
    
  </BrowserRouter>
    )
}

export default App