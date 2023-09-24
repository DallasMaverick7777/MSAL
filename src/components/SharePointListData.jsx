import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import '../styles/App.css';

export const SharePointListData = (props) => {
    console.log('***!!!!data 👉', props.data)

    return (
        <Container>
            <Row className="d-flex flex-row">
                {!props.data?.value || props.data?.value?.length === 0 ? (
                    <p className="text-center">You have 0 sharepoint data</p>
                ) : (
                    props.data?.value.map((sharepointList) => (
                        <Card className="card" key={sharepointList.id}>
                            <Card.Body>
                                <Card.Title>{sharepointList?.fields?.Title}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </Row>
        </Container>
    );
};