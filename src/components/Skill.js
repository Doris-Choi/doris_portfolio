import React from 'react';
import '../style/Skill.scss';

function SkillIcon({ name }) {
  const style = {
    backgroundColor: '#fff',
    backgroundImage: `url(${require('../style/logo/' + name + '.png')})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className={`SkillIcon ${name}`} style={style}>
      {name}
    </div>
  );
}
function Skill() {
  return (
    <div className="Skill">
      <h2>SKILLs</h2>
      <div>
        <h3>LANGUAGE</h3>
        <SkillIcon name="Python" />
        <SkillIcon name="JavaScript" />
        <SkillIcon name="C" />
      </div>
      <div>
        <h3>WEB</h3>
        <SkillIcon name="HTML" />
        <SkillIcon name="CSS" />
        <SkillIcon name="Sass" />
        <SkillIcon name="React" />
      </div>
      <div>
        <h3>BACK?</h3>
        <SkillIcon name="Nodejs" />
      </div>
      <div>
        <h3>DATABASE</h3>
        <SkillIcon name="MySQL" />
      </div>
      <div>
        <h3>ETC</h3>
        <SkillIcon name="GitHub" />
        <SkillIcon name="Linux" />
      </div>
      <div>
        <h3>DATA ANALYSIS</h3>
        <SkillIcon name="R" />
        <SkillIcon name="GA" />
        <SkillIcon name="Firebase" />
        {/* <SkillIcon name="ML" /> */}
        {/* <SkillIcon name="NN" /> */}
      </div>
    </div>
  );
}

export default Skill;
