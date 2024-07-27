import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FunChat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with HTML, CSS, JavaScript, Node JS, Socket.io & Docker Have features which allows user for realtime messaging & typing... visual ."
              ghLink="https://github.com/aritrakumar/FunChat"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DriveShare"
              description="Users log in using Google OAuth2 and can create custom file upload targets by specifying Google Drive folder
IDs, allows others to upload files via a shared link, After logging in, users can view all their created upload targets and
revoke access to any of them build using React Js, Redux, Rest API using Node Js, Express Js, Mongo DB, Google OAuth2 Application \&  Library, Google APIs for JWT auth."
              ghLink="https://github.com/aritrakumar/DriveShare-Master"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogger"
              description="A place for writer Sign up and Log in, Posting and Sharing articles, Users can follow other users build with HTML, Tailwind CSS, React Js, Redux, Rest API using Node Js, Express Js, Mongo DB."
              ghLink="https://github.com/aritrakumar/Blogger"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="InShare"
              description="Filesharing upto 100MB, Emailing to reciever & File link is avialable for 24 hrs build using HTML, Bootstrap CSS, JavaScript, NodeJs, Express Js, MongoDB."
              ghLink="https://github.com/aritrakumar/InShare"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodeSync"
              description="Live chat room based on WebSocket protocol using SocketIO & ”typing” visual build using HTML, BootStrap CSS, JavaScript, React Js, NodeJs, Express Js, Socket.io."
              ghLink="https://github.com/aritrakumar/CodeSync"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
