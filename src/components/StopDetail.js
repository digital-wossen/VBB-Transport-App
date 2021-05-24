import Card from 'react-bootstrap/Card';




function ShowStopDetail(props){
  const {item} = props;
  return (
  
      <Card>
        <Card.Header>{item.name}</Card.Header>
          <Card.Body>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
      </Card>


  )
}

export default ShowStopDetail;