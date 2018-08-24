import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';
  

const DiscoverTile = (props) => {
  return (
    <div>
      <Card>
        <CardImg  src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default DiscoverTile;