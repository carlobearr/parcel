import React, {useState, useEffect} from 'react';
import { Layout } from 'antd';
import UserHeader from './components/userHeader';
import LandingHeader from './components/landingHeader';
import LandingFooter from './components/landingFooter';
import Routes from './Routes';
import './App.css';
import {getSessionUser} from './api/sessionHandler';

<<<<<<< HEAD
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: {}
    }
    this.getFlower();
  }
  getFlower() {
    fetch("/flower")
      .then(response => response.json())
      .then(data => {
        this.setState({
          flower: data
        });
      });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.flower.name}</h1>
        <p>{this.state.flower.colour}</p>
      </div>
=======
const { Content } = Layout;

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        async function updateLoggedIn () {
            setIsLoggedIn(await getSessionUser());
        }
        updateLoggedIn();
    }, []);
    
    return ( 
        <Layout>
            { (isLoggedIn != null)
                ? <UserHeader></UserHeader>
                : <LandingHeader></LandingHeader>
            }
            <Content style={{ background: "#FFFFFF", height: "100%" }}>  
                <Routes></Routes>
            </Content>
            <LandingFooter></LandingFooter>
        </Layout>
>>>>>>> development-clone
    );
  }
}

export default App;