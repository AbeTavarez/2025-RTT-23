

// Child Component
function Skill({ skill, level }) {
  return (
    <div>
      <div>{skill}</div>
      <div>Level {level}</div>
      <button>Github</button>
    </div>
  );
}

// Parent Component
function SkillList() {
  // Data
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NodeJS"];
  const levelValue = 100;

  // Array of JSX elements
  const skillsElements = skills.map((skill, index) => (
    <Skill skill={skill} level={levelValue} key={index}/>
  ));
  console.log(skillsElements);

  return (
    <div>
      <h2>SkillList component</h2>
      <ul>{skillsElements}</ul>
    </div>
  );
}

export default SkillList;
