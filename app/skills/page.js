export default function SkillsPage() {
    const skills = ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind", "Node.js", "MongoDB"];
  
    return (
      <main className="skills-container">
        <h1>My Skills</h1>
        <p>Beberapa teknologi yang saya kuasai.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">{skill}</div>
          ))}
        </div>
      </main>
    );
  }
  