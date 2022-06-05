import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AllPages from "./Pages/AllPages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllPages />
      <Footer />
    </div>
  );
}

export default App;
