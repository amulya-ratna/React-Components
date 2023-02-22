import logo from './logo.svg';
import './App.css';

const last_name = "Singh";

const Footer = () => (
  <div className="footer">
    <center><p>©20xx {last_name} development. All rights reserved.</p></center>
  </div>
);


function App() {
  return (
    <>
    <header className='header'>
      
    <nav id="navbar">
			<a href="#Intro" class="nav-link">
				Home </a>
			<a href="#Object" class="nav-link">
				About </a>
			<a href="#Inheritance" class="nav-link">
				Contact </a>
		</nav>
    </header>
    <h1>Hi, Below are the reasons why I'm excited to learn React:</h1>
    <ol>
      <li>It's popular library, so I'll be able to fit in with the cool kids!</li>
      <li>I'm more likely to get  a job as a developer if I know React</li>
    </ol>
    <Footer/>
    </>
  );
}

export default App;
