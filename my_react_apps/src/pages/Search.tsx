import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBox from '../components/SearchBox'
import CategoryGroup from '../components/CategoryGroup'
import { SearchResult } from '../components/SearchResult'

class Search extends React.Component {
    render () {
        return (
            <Container>
                <Row style={{height: "10px"}}></Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <CategoryGroup/>
                        <SearchBox/>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <SearchResult/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Search