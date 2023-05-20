import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import HowItWorkContent from "./components/HowItWorkContent";
import OurFeatures from "./components/OurFeatures";
import AccessToEverything from "./components/AccessToEverything";
import WhatOurStudent from "./components/WhatOurStudent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <HowItWorkContent />
      <OurFeatures />
      <AccessToEverything />
      <WhatOurStudent />
    </div>
  );
}

export default App;
