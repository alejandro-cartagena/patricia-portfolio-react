import React from "react";

export default function SkillsCard({skillIcon, skillName}) {
    return (
        <div className="skills__card">
            <div className="skills__card__icon__circle">
                {skillIcon}
            </div>
            <h3 className="skills__card__title">{skillName}</h3>
        </div>
    )
}