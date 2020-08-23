import { SkillCategory } from '../enums/SkillCategory'

export type CategoryProps = {
    DefaultSelected: SkillCategory,
    Categories: CategoryButtonProp[]
}

export type CategoryState = {
    CurrentSelected: SkillCategory
}

export type CategoryButtonProp = {
    CategoryName: string,
    CategoryValue: SkillCategory,
    Style: React.CSSProperties,
}