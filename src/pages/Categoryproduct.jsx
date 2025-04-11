import React from 'react'
import { useContext } from 'react'
import { categoryDataContext } from './ContextApi'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';

function Categoryproduct() {

    const {categoryData}=useContext(categoryDataContext)

    console.log(categoryData);
    

  return (
    <div>
      <Row className='m-5'>
      <Col>
        {
          categoryData.length > 0 ?
            categoryData.map((res) => (
              
                <Card style={{ width: '18rem' }} className='m-4'>
                  <Card.Img variant="top" src={`http://127.0.0.1:8000/${res.image}`} />
                  <Card.Body>
                    <Card.Title>{res.product_name}</Card.Title>
                    <Card.Text>
                      ₹{res.price}
                      <br/>
                      <i className="fa-regular fa-star" style={{color: "#FFD43B",}} />{res.total_rating}
                    </Card.Text>
                    <Link variant="primary" to={`/detail/${res.id}`} className='btn btn-warning'>View</Link>
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

export default Categoryproduct