import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aritra Kumar </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am Final year CS/IT student with knowledge of DSA, coding skills, and projects in the MERN stack, seeking full-time Software
            Engineer roles.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football & Batminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Rubiks Cube
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aritra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
