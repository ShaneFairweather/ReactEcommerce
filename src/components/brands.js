import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BrandBar from './brandBar';

const Brands = () => {
    return (
        <section className='light'>
                <span className="titleBackground">
                    <div className="sectionTitle">
                        <div><h3>&nbsp;Top Brands&nbsp;</h3></div>
                    </div>
                </span>
                <br />
            <Row>
                <Col xs={12} md={4}>
                    <figure>
                        <div className="frontPageBlock"></div>
                        <figcaption>
                            <h3>Image</h3>
                            <h5>30% off</h5>
                        </figcaption>
                    </figure>
                </Col>
                <Col xs={12} md={4}>
                    <figure>
                        <div className="frontPageBlock"></div>
                        <figcaption>
                            <h3>Image</h3>
                            <h5>30% off</h5>
                        </figcaption>
                    </figure>
                </Col>
                <Col xs={12} md={4}>
                    <figure>
                        <div className="frontPageBlock"></div>
                        <figcaption>
                            <h3>Image</h3>
                            <h5>30% off</h5>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
            <br/>
            <span className="titleBackground">
                <div className="sectionTitle">
                </div>
            </span>
            <br />
            <BrandBar gender="men"/>
        </section>

    )
}

export default Brands;