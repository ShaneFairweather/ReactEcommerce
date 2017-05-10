import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Brands from './brands';
import Findout from './findout';
import Recommended from './recommended';

const FrontPage = () => {
    return (
        <div className="frontPageContainer">
            <section>
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
                <br />
                <Row>
                    <Col xs={12} md={6}>
                        <figure>
                            <div className="frontPageBlock"></div>
                            <figcaption>
                                <h3>Image</h3>
                                <h5>30% off</h5>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col xs={12} md={6}>
                        <figure>
                            <div className="frontPageBlock"></div>
                            <figcaption>
                                <h3>Image</h3>
                                <h5>30% off</h5>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </section>
            <Recommended/>
            <Brands/>
            <Findout/>
        </div>
    )
}

export default FrontPage;