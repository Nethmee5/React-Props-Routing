import React from 'react';
import StateTutorial from './routes/StateTutorial';
import ReducerTutorial from './routes/ReducerTutorial';
import EffectTutorial from './routes/EffectTutorial';
import ContextTutorial from './routes/ContextTutorial';
import RefTutorial from './routes/RefTutorial';
import Routess from './Routess';
import Navigation from './components/Navigation';

function App(props) {
  return (
    <div className="App">
      {/* <Navigation/> */}
    <Routess/>
    {props.abc}
     {/* <StateTutorial/>
     <ReducerTutorial/>
     <EffectTutorial/>
     <RefTutorial/>
     <ContextTutorial/> */}
    </div>
  );
}

export default App;
