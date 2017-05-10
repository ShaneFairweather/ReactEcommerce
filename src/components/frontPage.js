import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FrontPage = () => {
    return (
        <div className="frontPageContainer container">
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
        </div>
    )
}

export default FrontPage;