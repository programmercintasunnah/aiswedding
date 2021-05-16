import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function CardComp(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <CardImg variant="top" src={props.imgUrl} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default CardComp;
