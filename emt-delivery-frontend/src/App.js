import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import {HomeScreen} from "./screens/HomeScreen";
import {EmtScreen} from './screens/EmtScreen'
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
        <Route path="/emt" component={EmtScreen} exact />
        </Container>
      
        <Footer/>

    </Router>
    </>
  );
}

export default App;
