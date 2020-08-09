import React from 'react';
import '../style/Skill.scss';

function Skill() {
  return (
    <div className="Skill">
      <h2>SKILLs</h2>
      <div>
        <h3>LANGUAGE</h3>
        <div class="skill_icon python">Python</div>
        <div class="skill_icon javascript">JavaScript</div>
        <div class="skill_icon c">C</div>
      </div>
      <div>
        <h3>WEB</h3>
        <div class="skill_icon html">HTML</div>
        <div class="skill_icon css">CSS</div>
        <div class="skill_icon react">React</div>
      </div>
      <div>
        <h3>BACK?</h3>
        <div class="skill_icon nodejs">Node.js</div>
      </div>
      <div>
        <h3>DATABASE</h3>
        <div class="skill_icon mysql">MySQL</div>
      </div>
      <div>
        <h3>ETC</h3>
        <div class="skill_icon github">GitHub</div>
        <div class="skill_icon linux">Linux</div>
      </div>
      <div>
        <h3>DATA ANALYSIS</h3>
        <div class="skill_icon r">R</div>
        <div class="skill_icon ga">Google Analytics</div>
        <div class="skill_icon fb">Firebase</div>
        <div class="skill_icon ml">Machine Learning</div>
        <div class="skill_icon nn">Neural Networks</div>
      </div>
    </div>
  );
}

export default Skill;
