import './App.css';
import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import seattle from './seattle.png';
import profile from './profile.jpeg';


function App() {
  return (
    <div className="App" style={{ color: "#0F2A54", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Times New Roman" }}>
      <div style={{ width: "100%", margin: "1vh 0vh", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: "2.8vh", textAlign: "center" }}>Elena Eremenko, World Language Proficiency Test</div>
          <div style={{ fontSize: "2.3vh", textAlign: "center" }}>Private Russian Language Teacher</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "2.6vh", textAlign: "center" }}>ElenaRussianLanguage@gmail.com</div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${seattle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", width: "100%", minHeight: "20vh",
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ fontSize: "4.3vh", textAlign: "center" }}>Pass the test and get your World Language Credits!</div>
      </div>
      <div style={{ fontSize: "4vh", textAlign: "center", marginTop: "1.5vh" }}>How can I help?</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "50vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3.5vh", marginTop: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>
          I can help you pass the <u>World Language Proficiency Test</u> <br/>
          and get <u>up to 4 credits</u> for High School, College or <br/>
          University.</div>
        <div style={{ fontSize: "3.5vh", textAlign: "center" }}></div>
      </div>
      <div style={{ fontSize: "4vh", textAlign: "center", marginTop: "1.5vh" }}>How my lessons look like:</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "60vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3vh", margin: "3vh 1vw" }}>
          <ul style={{ margin: "1vh 0 0 0" }}>
            <li>Online lessons through Zoom.</li>
            <li>Both group and individual learning.</li>
            <li>Students ranging from Elementary and middle school students</li>
            <li>Students read and write in Russian, study grammar, literature and learn poems.</li>
            <li>I have created Russian language programs for pre K-4 grade.</li>
            <li>Middle/high school students who need to sharpen their skills have 1 hour lessons</li>
          </ul>
          <br/>
          <p style={{ marginLeft: "1vw" }}>I evaluate their skills and offer them individual program to improve their <br/>
          reading, writing, speaking and listening skills.</p>
        </div>
      </div>
      <hr/>

      <div style={{ display: "flex", margin: "5vh 0", padding: "5vh 5vw", borderStyle: "solid none solid", borderWidth: "0.1vh", flexWrap: "wrap", alignContent: "center" }}>
        <div style={{ display: "flex", flex: "1 0 20vw", justifyContent: "center", alignItems: "center" }}>
          <img alt={"<Profile Pic>"} src={profile} style={{ height: "40vh" }} />
        </div>
        <div style={{ fontSize: "3vh", flex: "1 0 60vw", alignItems: "center" }}>
          I have 17 years experience working with Russian heritage students.
          My students attend elementary, middle and high schools. <br/> <br/>
          My students who passed the World
          proficiency test received 4 credits for
          high school. I like to hear their feedback when they pass the tests and I am proud of their achievements! I pay attention to
          the areas they need to improve and help them to gain the skills. <br/> <br/>

          In my free time I like to read scientific articles about brain
          development, new technologies and artificial intelligence. <br/> <br/>

          I also like to spend time with my children, baking
          their favorite cakes and doing mutual projects. <br/> <br/>
        </div>
      </div>
      <hr/>
      <div style={{ fontSize: "4vh", textAlign: "center", marginTop: "1.5vh" }}>My credentials</div>
      <div style={{ margin: "2vh 10vw 3vh", boxShadow: "0 0px 1.2vh black", padding: "2vh 2vw", width: "60vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3vh", margin: "3vh 1vw" }}>
        <ul style={{ margin: "1vh 0 0 0" }}>
            <li>17 years experience of teaching Russian heritage students.</li>
            <li>Russian Heritage Teacher Certificate from UW. “Preparing Russian <br/>Teacher for the 21st Century”</li>
            <li>Teacher Certificate for Russian as a Foreign Language from Moscow <br/>State University, Russia.</li>
            <li>Consultant for Russian Startalk language program at UW.</li>
            <li>Russian Language Tests: ACTFL OPIC and WRT. Superior rating.</li>
          </ul>
          <br/>
          <p style={{ marginLeft: "1vw" }}>Contact me for my Resume</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
