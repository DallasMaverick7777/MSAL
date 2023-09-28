import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import '../styles/ContactCard.css';


export const ContactsData = (props) => {
    console.log('ContactsData props:', props);

    const emailAddressesData = {
        emailAddresses: props.graphContacts.value.map((contact) => ({
          address: contact.emailAddresses[0]?.address || '', // Access the first email address or set to an empty string if not available
          name: contact.emailAddresses[0]?.name || '', // Access the first email name or set to an empty string if not available
        })),
      };
    
      const emailAddressesJsonString = JSON.stringify(emailAddressesData, null, 2);
      console.log('Email props:', emailAddressesJsonString);


    return (
        <Container>            
            <Row className="d-flex flex-row">
                {!props.graphContacts.value || props.graphContacts.value.length === 0 ? (
                <p className="text-center">You have 0 contacts</p>
                ) : (
                props.graphContacts.value.map((contact) => (
            
            // <Card className="card cardContainer" key={contact.id}>
            //     <Card.Body>
            //     <Card.Title>{contact.displayName}</Card.Title>
            //     <Card.Text>{contact.personalNotes}</Card.Text>
            //     <Card.Text>{contact.mobilePhone}</Card.Text>
            //     {contact.emailAddresses.map((email, index) => (
            //       <Card.Text key={index}>{`Email ${index + 1}: ${email.address}`}</Card.Text>
            //     ))}
            //   </Card.Body>
            // </Card>


<div class="col-md-4">
    <div class="card profile-card-3">
        <div class="background-block">
            <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
        </div>
        <div class="profile-thumb-block">
            <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile"/>
        </div>
        <div class="card-content">
            <h2><Card.Title>{contact.displayName}</Card.Title><small>Designer</small></h2>
            <div class="icon-block"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
            </div>
        </div>
        
</div>


          ))
        )}
      </Row>
        </Container>
    );    
};