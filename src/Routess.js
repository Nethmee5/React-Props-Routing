import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const StateTutorial = lazy(() => import("./routes/StateTutorial"));

const EffectTutorial = lazy(() => import("./routes/EffectTutorial"));

const ReducerTutorial = lazy(() => import("./routes/ReducerTutorial"));

const RefTutorial = lazy(() => import("./routes/RefTutorial"));

// // const ContextTutorial = lazy(() => import("./routes/ContextTutorial"));

const MemoTutorial = lazy(() => import("./routes/MemoTutorial"));

const CallbackTutorial = lazy(() => import("./routes/CallbackTutorial"));
const CustomHooks = lazy(() => import("./routes/CustomHooks"));

const Routess = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<StateTutorial />} />
        <Route path="/effect" element={<EffectTutorial />} />
        <Route path="/reducer" element={<ReducerTutorial />} />
        <Route path="/ref" element={<RefTutorial />} />
        {/* <Route path="/Context" element={<ContextTutorial />} /> */}
        <Route path="/memo" element={<MemoTutorial />} />
        <Route path="/call" element={<CallbackTutorial />} />
        <Route path="/customhook" element={<CustomHooks />} />

     </Routes>
    </Suspense>
  </Router>
);

export default Routess;
