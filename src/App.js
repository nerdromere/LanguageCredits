import './App.css';
import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import seattle from './seattle.png';
import profile from './profile.jpeg';


function App() {
  return (
    <div className="App" style={{ color: "#0F2A54", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", margin: "1vh 0vh", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: "2.5vh", textAlign: "center" }}>Elena Eremenko, World Language Proficiency Exam</div>
          <div style={{ fontSize: "2vh", textAlign: "center" }}>and Russian Language Tutor</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "2.2vh", textAlign: "center" }}>ElenaRussianLanguage@gmail.com</div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${seattle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", width: "100%", minHeight: "20vh",
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div style={{ fontSize: "4vh", textAlign: "center" }}>Get your World Language Credits!</div>
      </div>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "1.5vh" }}>How can I help?</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3.5vh", marginTop: "3vh", textAlign: "center", marginBottom: "1.5vh" }}>
          I can help you pass the <u>World Language Proficiency Test</u> <br/>
          and get <u>up to 4 credits</u> for High School, College or <br/>
          University.</div>
        <div style={{ fontSize: "3.5vh", textAlign: "center" }}></div>
      </div>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "1.5vh" }}>How my lessons look like:</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3vh", margin: "3vh 1vw" }}>
          <ul style={{ margin: "1vh 0 0 2vw" }}>
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
          My students attend elementary, middle and high schools of Everett
          and Mukilteo School Districts. <br/> <br/>
          Most have passed the World
          proficiency tests being at middle school and received 4 credits for
          high school. I like to hear their feedback when they pass the tests and proud for their achievements! I pay attention to
          the areas they need to improve and help them to gain the skills. <br/> <br/>

          In my free time I like to read scientific articles about brain
          development, new technologies and artificial intelligence. <br/> <br/>

          I also like to spend my time with my children going for a walk, baking
          their favorite cakes and doing mutual projects. <br/> <br/>
        </div>
      </div>
      <hr/>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "1.5vh" }}>My credentials</div>
      <div style={{ margin: "2vh 10vw 0", boxShadow: "0 0px 1.2vh black", padding: "4vh", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ fontSize: "3vh", margin: "3vh 1vw" }}>
        <ul style={{ margin: "1vh 0 0 2vw" }}>
            <li>17 years experience of teaching Russian heritage students.</li>
            <li>Russian Heritage Teacher Certificate from UW. “Preparing Russian <br/>Teacher for the 21st Century”</li>
            <li>Teacher Certificate for Russian as a Foreign Language from Moscow <br/>State University, Russia.</li>
            <li>Consultant for Russian Startalk language program at UW.</li>
            <li>Russian Language Tests: ACTFL OPIC and WRT. Superior rating.</li>
            <li>Middle/high school students who need to sharpen their skills have 1 hour lessons</li>
          </ul>
          <br/>
          <p style={{ marginLeft: "1vw" }}>Contact me for my Resume</p>
        </div>
      </div>
      <Container>
      <div style={{ fontSize: "5vh", textAlign: "center", marginTop: "1.5vh" }}>Previous Experiences</div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How my lessons look like.</Accordion.Header>
            <Accordion.Body>
              For the last two years I am doing online lessons through the Zoom.
              I work with a group of students and individually.
              Elementary and middle school students in groups have two lessons
              for 45 min.
              They read and write in Russian. They study Russian grammar,
              literature and learn poems. I have Russian language programs for pre
              K-4 grade.
              For those middle and high school students who wants to sharp their
              skills and be ready to pass the World Language Proficiency exam I
              have 1 hour lessons.
              I evaluate their skills and offer them individual program to improve
              their reading, writing, speaking and listening skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>My experience working with MSD</Accordion.Header>
            <Accordion.Body>
              I started to work for the Mukilteo School District as a Natural Leader. I
              have 17 years experience working with Russian Ukrainian community
              who’s children attend schools in Everett, Edmond, Mill Creek,
              Lynwood and Mukilteo.
              I received two Certificates of achievement from MSD. These
              certificates are awarded to an outstanding Natural Leader in
              recognition of the valuable contributions you have made to your
              community, families, and children for the Readiness to Learn
              Program.
              For Odyssey Elementary School I organized Russian Club for children
              from Russian and Ukrainian families and taught them to read and
              write in Russian.
              I helped students at the Middle Schools of the MSD during tests
              periods at the end of the school years.
              At Mariner High School I worked as a Russian/Ukrainian Parent
              Liaison. I communicated with Russian and Ukrainian parents
              regarding the teachers' requests. Arranged meetings between the
              parents and the teachers. Participated in the parent/teacher
              conferences.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div style={{ marginTop: "15vh" }}></div>
      </Container>
    </div>
    
  );
}

export default App;

{/* <Card className="" style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>My Credentials</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card> */}
