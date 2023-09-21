import Table from 'react-bootstrap/Table';
import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import { createClaimsTable } from '../utils/claimUtils';
import '../styles/App.css';

  export const SharePointListData = (props) => {
    return (
        <Container>
        <Row className="d-flex flex-row">
        {!props.SharePointListData.value || props.SharePointListData.value.length === 0 ? (
        <p className="text-center">You have 0 shifts</p>
    ) : (
        props.SharePointListData.value.map((sharepointList) => (    
            console.log('SharePoint List:', sharepointList), // Add console.log statement      
            <Card className="card" key={sharepointList.id}>
                <Card.Body>
                    <Card.Title>{sharepointList}</Card.Title> 
                </Card.Body>
            </Card>
                ))
            )}
        </Row>         
    </Container>
    );    
};