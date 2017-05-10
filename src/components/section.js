import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Section = (props) => {
    if(props.style && props.title) {
        return (
            <section className={props.style}>
                <span className="titleBackground">
                    <div className="sectionTitle">
                        <div><h3>&nbsp;{props.title}&nbsp;</h3></div>
                    </div>
                </span>
                <br />
            </section>
        )
    } else if (props.title) {
        return (
            <section>
                <Row className="recommended">
                <span className="titleBackground">
                    <div className="sectionTitle">
                        <div><h3>&nbsp;{props.title}&nbsp;</h3></div>
                    </div>
                </span>
                    <br />
                </Row>
            </section>
        )
    } else {
        return (
            <section>
                <Row className="recommended">
                <span className="titleBackground">
                    <div className="sectionTitle">
                    </div>
                </span>
                    <br />
                </Row>
            </section>
        )
    }
}

export default Section;
