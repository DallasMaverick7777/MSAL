import Table from 'react-bootstrap/Table';
import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import { createClaimsTable } from '../utils/claimUtils';
import TimeIntervalBar from './TimeIntervalBar';
import BeautifiedTime from './BeautifiedTime';

import '../styles/App.css';

export const IdTokenData = (props) => {
    const tokenClaims = createClaimsTable(props.idTokenClaims);
    const tableRow = Object.keys(tokenClaims).map((key) => {
        return (
            <tr key={key}>
                {tokenClaims[key].map((claimItem) => (
                    <td key={claimItem} className="tableColumn">
                        {claimItem}
                    </td>
                ))}
            </tr>
        );
    });



    return (
        <>
            <div className="data-area-div">
                <p>
                    See below the claims in your <strong> ID token </strong>. For more information, visit:{' '}
                    <span>
                        <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token">
                            docs.microsoft.com
                        </a>
                    </span>
                </p>
                <div className="data-area-div table">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Claim</th>
                                <th>Value</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>{tableRow}</tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export const ProfileData = (props) => {
    const tableRows = Object.entries(props.graphData).map((entry, index) => {
        return (
            <tr key={index}>
                <td>
                    <b>{entry[0]} </b>
                </td>
                <td>{entry[1]}</td>
            </tr>
        );
    });
    return (
        <>
            <div className="data-area-div">
                <p>
                    Acquired an <strong>Access Token </strong>for MS Graph with scopes:
                    {props.response.scopes.map((scope, index) => (
                        <mark key={scope}>{scope}</mark>
                    ))}
                </p>

                <p>
                    Calling <strong>Microsoft Graph API</strong>...
                </p>
                <ul>
                    <li>
                        <strong>resource:</strong> <mark>User</mark> object
                    </li>
                    <li>
                        <strong>endpoint:</strong> <mark>https://graph.microsoft.com/v1.0/me</mark>
                    </li>
                    <li>
                        <strong>scope:</strong>
                        <mark>User.Read</mark>
                    </li>
                </ul>
                <p>
                    Contents of the <strong>response</strong> is below:
                </p>
            </div>
            <div className="data-area-div">
                <Table responsive striped bordered hover>
                    <thead></thead>
                    <tbody>{tableRows}</tbody>
                </Table>
            </div>
        </>
    );
};

export const ContactsData = (props) => {
    
    return (
        <Container>
            <Row>
                <div className="data-area-div">
                    <p>
                        Acquired an <strong>Access Token </strong>for MS Graph with scopes:
                        {props.response.scopes.map((scope, index) => (
                            <mark key={scope}>{scope}</mark>
                        ))}
                    </p>

                    <p>
                        Calling <strong>Microsoft Graph API</strong>...
                    </p>
                    <ul>
                        <li>
                            <strong>resource:</strong>
                            <mark>User</mark> object
                        </li>
                        <li>
                            <strong>endpoint:</strong> <mark>https://graph.microsoft.com/v1.0/me/contacts</mark>
                        </li>
                        <li>
                            <strong>scope:</strong>
                            <mark>Contacts.Read</mark>
                        </li>
                    </ul>
                    <p>
                        Contents of the <strong>response</strong> is below:
                    </p>
                </div>
            </Row>
            
            <Row className="d-flex flex-row">
                {!props.graphContacts.value  || props.graphContacts.value.length === 0 ? (
                    <p className="text-center">You have 0 contacts</p>
                ) : (
                    props.graphContacts.value.map((contact) => (
                        <Card className="card" key={contact.id}>
                            <Card.Body>
                                <Card.Title>{contact.displayName}</Card.Title>
                                <Card.Text>{contact.personalNotes}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </Row>         
        </Container>
    );    
};

export const ShiftsData = (props) => {


    return (
        <Container>
        <Row>
            <div className="data-area-div">
                <p>
                    Acquired an <strong>Access Token </strong>for MS Graph with scopes:
                    {props.shiftsData.value.map((shift, index) => (
                    <mark key={index}>{shift.displayName}</mark>
                    ))}
                </p>

                <p>
                    Calling <strong>Microsoft Graph API</strong>...
                </p>
                <ul>
                    <li>
                        <strong>resource:</strong>
                        <mark>User</mark> object
                    </li>
                    <li>
                        <strong>endpoint:</strong> <mark>https://graph.microsoft.com/v1.0/teams/e143d3f7-a374-4086-b216-3c0ca42a243b/schedule/shifts</mark>
                    </li>
                    <li>
                        <strong>scope:</strong>
                        <mark>Schedule.Read.All</mark>
                    </li>
                </ul>
                <p>
                    Contents of the <strong>response</strong> is below:
                </p>
                {console.log('The shifts data is:', props.shiftsData.value)}
            </div>
        </Row>
        
        <Row className="d-flex flex-row">
        {!props.shiftsData.value || props.shiftsData.value.length === 0 ? (
        <p className="text-center">You have 0 shifts</p>
    ) : (
        props.shiftsData.value.map((shift) => (
            <Card className="card" key={shift.id}>
                <Card.Body>
                    <Card.Title>{shift.draftShift.notes}</Card.Title>
                    <Card.Text>{BeautifiedTime(shift.draftShift.startDateTime)}</Card.Text>
                    <Card.Text>{BeautifiedTime(shift.draftShift.endDateTime)}</Card.Text>

                    <TimeIntervalBar startTime={shift.draftShift.startDateTime} endTime={shift.draftShift.endDateTime} />
                </Card.Body>
            </Card>
                ))
            )}
        </Row>         
    </Container>
    );
}

