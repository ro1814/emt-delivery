import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import {HomeScreen} from "./screens/HomeScreen";
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from "./screens/LoginScreen";

import './App.css';

function App() {
  return (
    <>
    <Router>
    

        <Header/>
      

        <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact />
        </Container>
      
        <Footer/>

    </Router>
    </>
  );
}

export default App;
