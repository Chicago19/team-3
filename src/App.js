import React from 'react';
import Landing from '../src/Pages/Landing/landing'

import ButtonAppBar from '../src/Components/navbar'
import SignIn from '../src/Components/sign-in'

function App() {
  return (
    <div>
    <React.Fragment>
    <ButtonAppBar/>
    <Landing/>
    </React.Fragment>
    </div>
  );
}

export default App;
