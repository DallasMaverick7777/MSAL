import { Container, Col, Card, Row } from 'react-bootstrap';
import React from 'react';
import "../styles/StyledCard.css";

export const SharePointListData = (props) => {
    console.log('***!!!!data 👉', props.data)

     return (
        <Container>
            <Row className="cardContainer">
                    {!props.data?.value || props.data?.value?.length === 0 ? (
                    <p className="text-center">You have 0 SharePoint data</p>
                    ) : (
                    props.data?.value.map((sharepointList) => (
                        <Col className="col-md-3" key={sharepointList.id}>
                             <Card className="card">                            
                                 <div className="cardContent">
                                    <h5 className="card-title">{sharepointList?.fields?.Title}</h5>
                                            <div>{sharepointList?.fields?.serverRelativeUrl}</div>           
                                            {sharepointList?.fields?.Image && (
                                                <img
                                                className="cardImage"
                                                src={JSON.parse(sharepointList.fields.Image).serverUrl + "/" + JSON.parse(sharepointList.fields.Image).serverRelativeUrl}
                                                alt="Item Image"
                                                />
                                            )}
                                </div>   
                            </Card>
                        </Col>
                    ))
                    )}
                </Row>
        </Container>


    );
};






