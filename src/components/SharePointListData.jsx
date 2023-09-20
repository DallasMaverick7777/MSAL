import Table from 'react-bootstrap/Table';
import { Container, Card, Row } from 'react-bootstrap';
import React from 'react';
import { createClaimsTable } from '../utils/claimUtils';
import '../styles/App.css';

export const SharePointListData = (props) => {
  console.log('SharePointListData props:', props);
  const { SharePointListData } = props;

  const memoizedSharePointListData = useMemo(() => SharePointListData.value, [SharePointListData.value]);

  return (
    <Container>
      <Row className="d-flex flex-row">
        {!SharePointListData || ! memoizedSharePointListData.length === 0 ? (
          <p className="text-center">You have 0 shifts</p>
        ) : (
          memoizedSharePointListData.map((list, fields) => (
            <Card className="card" key={list.id}>
              <Card.Body>
                <Card.Title>{list.fields.title}</Card.Title>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
}