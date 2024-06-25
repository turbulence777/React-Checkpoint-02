import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p><strong>Team:</strong> {team}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
          <p><strong>Age:</strong> {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://via.placeholder.com/150'
};

export default Player;
