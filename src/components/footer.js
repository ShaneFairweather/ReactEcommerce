import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer>
            <Row>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">help</h6>
                    <ul>
                        <li>Status</li>
                        <li>Support</li>
                        <li>Size Chart</li>
                        <li>Terms of Delivery</li>
                        <li>My Orders</li>
                        <li>Return Policy</li>
                        <li>Offers</li>
                        <li>Rewards Program</li>
                        <li>Partners</li>
                    </ul>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">Social media</h6>
                    <ul>
                        <li><a><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><i class="fa fa-envira" aria-hidden="true"></i>
                        </li>
                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                    </ul>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">Payment Methods</h6>
                </Col>
                <Col xs={6} md={3}>
                    <h6 className="footerHeader">mobile</h6>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;