import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { SkillCategory } from '../models/enums/SkillCategory'
import { CategoryProps, CategoryState } from '../models/types/CategoryParams'

class CategoryGroup extends React.Component<CategoryProps, CategoryState> {
    public static defaultProps: CategoryProps = {
        DefaultSelected: SkillCategory.Users,
        Categories: [
            { CategoryName:  "社員検索", CategoryValue: SkillCategory.Users, Style: {color: "#6f42c1", margin: "1px"}},
            { CategoryName:  "開発スキル", CategoryValue: SkillCategory.DevSkill, Style: {color: "#ff7fbf", margin: "1px"}},
            { CategoryName:  "経験ポジション", CategoryValue: SkillCategory.ProjectPosision, Style: {color: "#7fbfff", margin: "1px"}},
            { CategoryName:  "資格", CategoryValue: SkillCategory.Certification, Style: {color: "#7fff7f", margin: "1px"}},
            { CategoryName:  "経験業務", CategoryValue: SkillCategory.Industry, Style: {color: "#ffbf7f", margin: "1px"}},
        ]
    }

    constructor(props: CategoryProps) {
        super(props);
        this.state = { CurrentSelected: props.DefaultSelected };
        console.log(props);
    }

    render () {
        const categories = this.props.Categories.map((c, idx) => 
            {
                return(
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="light"
                    name="radio"
                    value={c.CategoryValue}
                    checked={ c.CategoryValue === this.state.CurrentSelected}
                    style={{ color: this.state.CurrentSelected === c.CategoryValue ? "white" : c.Style.color, background: this.state.CurrentSelected === c.CategoryValue ? c.Style.color : "white" }}
                    onChange={ e => this.setState({ CurrentSelected: parseInt(e.target.value)}) }
                >
                    {c.CategoryName}
              </ToggleButton>
                )
            });

        return (
            <>
                <ButtonGroup toggle>
                    {categories}
                </ButtonGroup>
            </>
        )
    }

}

export default CategoryGroup