import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Findout = () => {
    return (
    <section className='dark'>
        <span className="titleBackground">
            <div className="sectionTitle">
                <div><h3>&nbsp;Discover More&nbsp;</h3></div>
            </div>
        </span>
        <br />
        <Row>
            <Col xs={12} md={3}>
                <figure>
                    <div className="frontPageBlock"></div>
                    <figcaption>
                        <h3>Image</h3>
                        <h5>30% off</h5>
                    </figcaption>
                </figure>
            </Col>
            <Col xs={12} md={3}>
                <figure>
                    <div className="frontPageBlock"></div>
                    <figcaption>
                        <h3>Image</h3>
                        <h5>30% off</h5>
                    </figcaption>
                </figure>
            </Col>
            <Col xs={12} md={3}>
                <figure>
                    <div className="frontPageBlock"></div>
                    <figcaption>
                        <h3>Image</h3>
                        <h5>30% off</h5>
                    </figcaption>
                </figure>
            </Col>
            <Col xs={12} md={3}>
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

    )
}

export default Findout;