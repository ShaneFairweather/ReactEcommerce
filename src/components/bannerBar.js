import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BannerBar = (props) => {
    if(props.gender == 'men') {
        return (
            <Row>
                <Col xs={12} md={2}>Nike</Col>
                <Col xs={12} md={2}>Lacoste</Col>
                <Col xs={12} md={2}>Adidas</Col>
                <Col xs={12} md={2}>Tommy Hilfiger</Col>
                <Col xs={12} md={2}>Puma</Col>
                <Col xs={12} md={2}>Mango</Col>
            </Row>
        )
    } else {
        return (
            <Row>
                <Col xs={12} md={2}>Burberry</Col>
                <Col xs={12} md={2}>Nike</Col>
                <Col xs={12} md={2}>Dorothy Perkins</Col>
                <Col xs={12} md={2}>Mango</Col>
                <Col xs={12} md={2}>Lost Ink</Col>
                <Col xs={12} md={2}>oodji</Col>
            </Row>
        )
    }


}

export default BannerBar;