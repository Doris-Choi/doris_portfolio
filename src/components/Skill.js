import React from 'react';
import '../style/Skill.scss';

function SkillIcon({ name, level }) {
  const style = {
    backgroundColor: '#fff',
    backgroundImage: `url(${require('../style/logo/' + name + '.png')})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="SkillIcon" style={style}>
      <div className="status--hover">
        <div>{name}</div>
        <div>{level}</div>
      </div>
    </div>
  );
}
function Skill() {
  const level = {
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  };

  return (
    <div className="Skill">
      <h2>SKILLs</h2>
      <div>
        <h3>LANGUAGE</h3>
        <SkillIcon name="Python" level={level.intermediate} />
        <SkillIcon name="JavaScript" level={level.intermediate} />
        <SkillIcon name="C" level={level.basic} />
      </div>
      <div>
        <h3>WEB</h3>
        <SkillIcon name="HTML" level={level.intermediate} />
        <SkillIcon name="CSS" level={level.intermediate} />
        <SkillIcon name="Sass" level={level.intermediate} />
        <SkillIcon name="React" level={level.intermediate} />
      </div>
      <div>
        <h3>BACK?</h3>
        <SkillIcon name="Nodejs" level={level.basic} />
      </div>
      <div>
        <h3>DATABASE</h3>
        <SkillIcon name="MySQL" level={level.intermediate} />
      </div>
      <div>
        <h3>ETC</h3>
        <SkillIcon name="GitHub" level={level.intermediate} />
        <SkillIcon name="Linux" level={level.basic} />
      </div>
      <div>
        <h3>DATA ANALYSIS</h3>
        <SkillIcon name="R" level={level.intermediate} />
        <SkillIcon name="GA" level={level.basic} />
        <SkillIcon name="Firebase" level={level.basic} />
        {/* <SkillIcon name="ML" /> */}
        {/* <SkillIcon name="NN" /> */}
      </div>
    </div>
  );
}

export default Skill;
