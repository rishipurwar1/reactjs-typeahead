const SuggestionList = ({ skills }) => {
  return (
    <div className="skill-container">
      {skills.items.map((skill) => (
        <div className="skill-suggestion" key={skill.count}>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestionList;
