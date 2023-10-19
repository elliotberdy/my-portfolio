import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold mb-2">{name}</span>
      <div className="flex flex-col gap-y-2 mb-5">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 5} = skill;

  const ratingBlocks = Array.from({length: max}, (_, index) => (
    <div
      className={`bg-neutral-300 h-5 mx-0.5 mt-1 w-16 ${index < level ? 'bg-sky-900' : 'bg-neutral-300'}`}
      key={index}
    />
  ));

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="flex">{ratingBlocks}</div>
    </div>
  );
});

Skill.displayName = 'Skill';
