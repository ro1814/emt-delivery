import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";

import './App.css';

function App() {
  return (
    <>
    <Router>
    <Route>
      {/* If Header. Goes here. */}
      

        <Container>
        <Route path="/login" component={LoginScreen} />
        <Route path="/" component={HomeScreen} exact />
        </Container>
      
      
    </Route>
    </Router>
    </>
  );
}

export default App;
