import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import Card from "./pages/Card";



function App() {
  return (
    <div className="App">
      <>
     <Router>
      <Header />

       <Route exact path="/" component={Home}/>
       <Route path="/login"  component={Login}/>
       <Route path="/register" component={Register}/>
       <Route path="/detail/:id" component={Detail}/>
       <Route path="/card/:id?" component={Card} />
       
       <Footer/>
    </Router>

       </>
    </div>
  );
}

export default App;
