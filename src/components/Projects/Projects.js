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
              description=" Log in using Google OAuth2, Users can create custom file upload targets using Google Drive folder IDs, allowing
 anyone to upload files via a provided link, Once logged in, users can view all their created upload targets and revoke access
 to any of them build with React Js, Redux, Rest API using Node Js, Express Js, Mongo DB, Google OAuth Application &
 Library, Google APIs for JWT auth."
              ghLink="https://github.com/aritrakumar/DriveShare-Master"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blogger"
              description="A place for writer Sign up and Log in, Posting and Sharing articles, Users can follow other users build with React Js, Redux, Rest API using Node Js, Express Js, Mongo DB."
              ghLink="https://github.com/soumyajit4419/Editor.io"
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


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
