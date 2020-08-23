import { SkillCategory } from '../enums/SkillCategory'

export type SearchProps = {
    SelectedCategory: SkillCategory
}

export type SearchState = {
    SelectedCategory: SkillCategory
    Tags: Tag[]
}

export type Tag = {
    Category: SkillCategory,
    Word: string
}

// export SearchBoxState = {

// }