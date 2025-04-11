import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productDetail } from '../api/fetchApi'
import Card from 'react-bootstrap/Card';


function ProductDetail() {

    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])

    const { id } = useParams()

    useEffect(() => {
        productDetail(id).then((res) => {
            console.log(res.data);
            setProduct(res.data)
            setReviews(res.data.list_comments)
        })
    }, [])

    console.log(reviews);
    

    return (
        <div className='d-flex justify-content-center align-items-center w-100'>
            <div className='w-50 p-5'>
                <Card style={{ width: '18rem' }} className='m-4'>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.product_name}</Card.Title>
                        <Card.Text>
                            ₹{product.price}
                            <br />
                            <i className="fa-regular fa-star" style={{ color: "#FFD43B", }} />{product.total_rating}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <h4>Reviews</h4>
                <table className='table table-bordered text-light'>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Comment</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    reviews.length >0?
                        reviews.map((res)=>(
                            <tr>
                                <td>{res.user}</td>
                                <td>{res.comment}</td>
                                <td>{res.rating}</td>
                            </tr>
                        ))
                    : <h4>No reviews yet</h4>
                   }
                      
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductDetail