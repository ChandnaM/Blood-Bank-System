import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Just=()=>
{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/img/team/02.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default Just;