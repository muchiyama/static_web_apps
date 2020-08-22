import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { SkillCategory } from '../models/enums/SkillCategory'

class CategoryGroup extends React.Component {
    render () {
        return (
            <>
                <ButtonGroup toggle>
                    <ToggleButton type="radio" variant="light" value={SkillCategory.Users} style={{color: "#6f42c1", margin: "1px"}}>社員検索</ToggleButton>
                    <ToggleButton type="radio" variant="light" value={SkillCategory.DevSkill} style={{color: "#ff7fbf", margin: "1px"}}>開発スキル</ToggleButton>
                    <ToggleButton type="radio" variant="light" value={SkillCategory.ProjectPosision} style={{color: "#7fbfff", margin: "1px"}}>経験ポジション</ToggleButton>
                    <ToggleButton type="radio" variant="light" value={SkillCategory.Certification} style={{color: "#7fff7f", margin: "1px"}}>資格</ToggleButton>
                    <ToggleButton type="radio" variant="light" value={SkillCategory.Industry} style={{color: "#ffbf7f", margin: "1px"}}>経験業務</ToggleButton>
                </ButtonGroup>
            </>
        )
    }
}

export default CategoryGroup