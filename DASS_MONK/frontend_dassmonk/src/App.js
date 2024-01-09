import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SignInSide from "./pages/SignInSide";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SignInSide /> */}
      <SurveyForm />
    </div>
  );
}

export default App;
