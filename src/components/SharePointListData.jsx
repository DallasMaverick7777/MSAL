import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import '../styles/App.css';

export const SharePointListData = (props) => {
    console.log('***!!!!data 👉', props.data)

     return (
        <Container>
            <Row className="d-flex flex-row">
                {!props.data?.value || props.data?.value?.length === 0 ? (
                    <p className="text-center">You have 0 SharePoint data</p>
                ) : (
                    props.data?.value.map((sharepointList) => (
                        <Card className="card" key={sharepointList.id}>
                            <Card.Body>
                                <div><Card.Title>{sharepointList?.fields?.Title}</Card.Title></div>
                                <div><Card.Title>{sharepointList?.fields?.serverRelativeUrl}</Card.Title></div>
                                {sharepointList?.fields?.Image && (
                                    <img className="cardImage" src={JSON.parse(sharepointList.fields.Image).serverUrl + "/" + JSON.parse(sharepointList.fields.Image).serverRelativeUrl} alt="Item Image" />
                                )}
                            </Card.Body>
                        </Card>
                    ))
                )}
            </Row>
        </Container>
    );
};






