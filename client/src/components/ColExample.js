import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Bootstrap.css';


const ColExample = observer(() => {
    const { item } = useContext(Context);

    return (<>
        <Container>

            <Row xs={1} md={2} xl={4}>
                <Col style={{ background: 'blue' }} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                <Col style={{ background: 'blue' }} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
            </Row>
        </Container >
        <Container>
            <Row xs={2} md={4} lg={6} >
                <Col style={{ background: 'yellow' }}>1 of 2</Col>
                <Col style={{ background: 'yellow' }}>2 of 2</Col>
            </Row>
            <Row xs={1} md={2} lg={4}>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row xs="auto">
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </>);
}
);

export default ColExample;






