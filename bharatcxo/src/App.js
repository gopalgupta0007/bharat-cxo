import { Route, Routes } from 'react-router-dom'// import logo from './logo.svg';
// import { Route, Switch } from 'react-router-dom';
import About from '../src/components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// import About from './components/About';
// import Industries from './components/Industries';
import './App.css';
import Post from './components/Post';
import Content from './components/Content';
import Award from './components/Award';
import { useEffect, useState } from 'react';
import Articales from './components/Articales';
import Test from './components/Test';
import axios from 'axios';

function App() {
  const [cxoData, setcxoData]=useState({});
  useEffect(() => {
    document.body.classList.add('cls1');
    const fetchData = async () => {
      try {
        const response = await axios.get('/getallcxodata');
        setcxoData(response.data[0]);
        // console.log(response.data[0]);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [])
  // console.log(cxoData);
  return (
    <>
      <Header />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/industries" component={Industries} />
      </Switch> */}
      <Routes>
        <Route exact path="/" element={<Home data={cxoData.home} />} />
        <Route exact path="/post" element={<Post data={cxoData.posts} />} />
        <Route exact path="/events" element={<Award data={cxoData.events} />} />
        <Route exact path="/articles" element={<Articales data={cxoData.articles} />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
