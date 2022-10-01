import './App.css';
import Face from './Images/myphoto.jpg';
import Email from './Images/Mail.svg'
import linkedln from './Images/linkedin.svg'
import facebook from './Images/FacebookIcon.png'
import github from './Images/GitHubIcon.png'
import twitter from './Images/TwitterIcon.svg'


export default function App() {
  return (
    <div className="App">
      <img src={Face} className="Face" alt="Face"/>
      <div className="App-Main">
        <text className="App-Info-Title">Joehan Misquitta</text>
        <text className="App-Info-Designation">Frontend Developer</text>
        <text className="App-Info-Website">joehanmisquitta.com</text>
        <a href="mailto:joehanm10@gmail.com?subject=I am Contacting you From Your Portfolio Website" rel="noreferrer">
          <button className="App-Info-Email">
            <img src={Email} alt="Email"/>
            <text>Email</text>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/joehan-misquitta/" target="_blank" rel="noreferrer">
          <button className="App-Info-Linkedln">
            <img src={linkedln} alt="Linkedln"/>
            <text>Linkedln</text>
          </button>
        </a>
        <text className="App-About-Text">About</text>
        <text className="App-About-Para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices like OWASP Top 10, and I am always looking for new things to learn.</text>
        <text className="App-Interest-Text">Interests</text>
        <text className="App-Interest-Para">Gaming. Programming. Music. Photography. Graphics Design. Penetration Testing.  </text>
              
      </div>
      <footer className="App-Footer-Social">
        <nav className="Navbar">
          <a classname="F-Facbook" href="https://www.facebook.com/profile.php?id=100076309787802" target="_blank" rel="noreferrer"> 
            <img src={facebook} className="F-Facebook" alt="Facebook"/>
          </a>
          <a classname="F-Github" href="https://github.com/joehanmisquitta" target="_blank" rel="noreferrer">
            <img src={github} className="F-Github" alt="Github"/>
          </a>
          <a classname="F-Twitter" href="https://twitter.com/MisquittaJoehan" target="_blank" rel="noreferrer">
            <img src={twitter} classname="F-Twitter" alt="Twitter"/>
          </a>
        </nav>
      </footer>
    </div>
  );
}
/*
<img scr={instagram} classname="F-Instagram" alt="Instagram"></img>
<img src={twitter} classname="F-Twitter" alt="Twitter"></img>
*/