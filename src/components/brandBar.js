import React from 'react';
import { Row, Col } from 'react-bootstrap';
import lacoste from '../../assets/img/lacoste-logo.png';
import nike from '../../assets/img/nike.png';
import tommy from '../../assets/img/123.png';
import adidas from '../../assets/img/580b57fcd9996e24bc43c4f2.png';
import puma from '../../assets/img/Puma-Logo-1967-2010.jpg';
import mango from '../../assets/img/mango_logo_detail.png';

const BrandBar = (props) => {
    if(props.gender == 'men') {
        return (
            <Row className="brandBar">
                <Col xs={12} md={2}><img src={nike} /></Col>
                <Col xs={12} md={2}><img src={lacoste} /></Col>
                <Col xs={12} md={2}><img id='tommy' src={tommy} /></Col>
                <Col xs={12} md={2}><img src={adidas} /></Col>
                <Col xs={12} md={2}><img id='mango' src={mango} /></Col>
                <Col xs={12} md={2}><img id='puma' src={puma} /></Col>
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

export default BrandBar;