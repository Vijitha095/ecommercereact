import React, { useEffect, useState } from 'react'
import { listCategory } from '../api/fetchApi'
import { categoryProductList } from '../api/fetchApi'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { categoryDataContext } from './ContextApi'

function Category() {

    const [category,setCategory]=useState([])

    const {setCategoryData}=useContext(categoryDataContext)

    const navigate=useNavigate()

    useEffect(()=>{
        listCategory().then((res)=>{
            console.log(res.data);
            setCategory(res.data)
        })
    },[])

    const formSubmit=(e)=>{
        console.log(e.target.value);
        categoryProductList(e.target.value).then((res)=>{
            console.log(res.data);
            setCategoryData(res.data)
            navigate('category/product')
        })
    }

    return (
        <div>

            <select class="form-select" aria-label="Default select example" onChange={(e)=>{formSubmit(e)}}>
                <option selected disabled>Category</option>
                {
                    category.map((res)=>(
                        <option value={res.id}>{res.category_name}</option>
                    ))
                }
            </select>

        </div>
    )
}

export default Category