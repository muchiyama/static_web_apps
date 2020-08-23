import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchState } from '../models/types/SearchParams'
import { CategoryState } from '../models/types/CategoryParams'
import SearchBox from '../components/SearchBox'
import CategoryGroup from '../components/CategoryGroup'
import { SearchResult } from '../components/SearchResult'
import { SkillCategory } from '../models/enums/SkillCategory';

class Search extends React.Component<{}, SearchState> {
    constructor(props: any) {
        super(props);
        this.state = { SelectedCategory: SkillCategory.Users, Tags: [] };
    }

    private handleCategoryChange = (Category: CategoryState) => {
        this.setState({ SelectedCategory: Category.CurrentSelected })
        console.log("個に渡したイベント呼ばれたよ")
        console.log(this.state);
    }

    // private handleSearchwordChanged = 

    render () {
        return (
            <Container>
                <Row style={{height: "10px"}}></Row>
                <Row>
                    <Col></Col>
                    <Col xs={12} lg={8}>
                        <CategoryGroup EmitChangedCategory={ this.handleCategoryChange }/>
                        <SearchBox/>
                        <SearchResult/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Search