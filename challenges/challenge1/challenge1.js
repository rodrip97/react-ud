import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill">
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {}

function Intro() {
  return (
    <div>
      <h1>Rodrigo Pinto</h1>
      <p>
        Coding for a few years, i can do lots of stuff. I love girls with big
        titties and video games.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="yellow" />
      <Skill skill="Python" emoji="🐍" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
