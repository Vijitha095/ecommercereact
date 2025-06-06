import React, { useState } from 'react'
import { useEffect } from 'react'
import { listProducts } from '../api/fetchApi'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';

function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    listProducts().then((res) => {
      console.log(res.data);
      setProducts(res.data)
    })
  }, [])

  return (
    <div>
      <Row className='m-5'>
      <Col>
        {
          products.length > 0 ?
            products.map((res) => (
              
                <Card style={{ width: '18rem' }} className='m-4'>
                  <Card.Img variant="top" src={res.image} />
                  <Card.Body>
                    <Card.Title>{res.product_name}</Card.Title>
                    <Card.Text>
                      ₹{res.price}
                      <br/>
                      <i className="fa-regular fa-star" style={{color: "#FFD43B",}} />{res.total_rating}
                    </Card.Text>
                    <Link variant="primary" to={`detail/${res.id}`} className='btn btn-warning'>View</Link>
                  </Card.Body>
                </Card>
              
            ))
            : <h4>No products</h4>
        }
        </Col>
      </Row>
    </div>
  )
}

export default Home