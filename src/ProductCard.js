import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.results.map(el=>el.photo.map(el=>el.url))} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         14
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;