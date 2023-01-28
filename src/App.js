import './App.css';
import BaseBox from './Sections/box'
import {Routes,Route} from "react-router-dom"
import Home from './Sections/Home';
import About from './Sections/About';
import Profile from './Sections/Profile';
import Questions from './Sections/Question';
import ChatRoom  from './Sections/ChatRoom'
import Signup from './Sections/Signup';

function App() {

  return (
    <div className="App" >
   
   <Routes>
      <Route exact path='/' element={<BaseBox/>}/>
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Questions" element={<Questions/>} />
      <Route path="/ChatRoom" element={<ChatRoom/>} />
      <Route path="/Signup" element={<Signup/>} />
      </Routes>

    </div>
  );
}

export default App;
