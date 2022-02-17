import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import {HomeScreen} from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import './App.css';

function App() {
  return (
    <>
    <Router>
    

      {/* If Header. Goes here. */}
      

        <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact />
        </Container>
      
      

    </Router>
    </>
  );
}

export default App;
