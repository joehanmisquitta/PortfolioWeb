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
        <h2 className="App-Info-Title">Joehan Misquitta</h2>
        <h3 className="App-Info-Designation">BSc.IT Graduate</h3>
        <h3 className="App-Info-Website">joehanmisquitta.com</h3>
        <a href="mailto:joehanm10@gmail.com?subject=I Recently Visited Your Website" rel="noreferrer">
          <button className="App-Info-Email">
            <img src={Email} alt="Email"/>
            <p>Email</p>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/joehan-misquitta/" target="_blank" rel="noreferrer">
          <button className="App-Info-Linkedln">
            <img src={linkedln} alt="Linkedln"/>
            <p>Linkedln</p>
          </button>
        </a>
        <h2 className="App-About-Text">About</h2>
        <p className="App-About-Para">Hi, I’m Joehan Misquitta, an IT student at the University of Mumbai. I’m passionate about cybersecurity and learning new skills in this field. I’m also an amateur photographer who loves to capture the beauty and diversity of the world. I’m always open to new opportunities and challenges that can help me grow as a professional and as a person. Feel free to connect with me and check out my work.</p>
        <h2 className="App-Interest-Text">Interests</h2>
        <p className="App-Interest-Para">Gaming. Programming. Music. Photography. Graphics Design. Ethical Hacking.  </p>
              
      </div>
      <footer className="App-Footer-Social">
        <nav className="Navbar">
          <a className="F-Facbook" href="https://www.facebook.com/profile.php?id=100076309787802" target="_blank" rel="noreferrer"> 
            <img src={facebook} className="F-Facebook" alt="Facebook"/>
          </a>
          <a className="F-Github" href="https://github.com/joehanmisquitta" target="_blank" rel="noreferrer">
            <img src={github} className="F-Github" alt="Github"/>
          </a>
          <a className="F-Twitter" href="https://twitter.com/MisquittaJoehan" target="_blank" rel="noreferrer">
            <img src={twitter} className="F-Twitter" alt="Twitter"/>
          </a>
        </nav>
      </footer>
    </div>
  );
}
