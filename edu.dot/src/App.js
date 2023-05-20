import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import HowItWorkContent from "./components/HowItWorkContent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <HowItWorkContent />
    </div>
  );
}

export default App;
