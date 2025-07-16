import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';

export function Forms() {
const [productname, setName] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [stock, setStock] = useState('');




const handlesubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('productname', productname)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('stock', stock)
   

    console.log(formData)
    const res = await axios.post('http://localhost:3000/product/add', formData, {headers: {'content-type': 'multipart/form-data'}})

    if (res.status === 201) {
        setName('')
        setDescription('')
        setCategory('')
        setPrice('')
        setStock('')
        alert("Product added successfully") 
       
    }
}


  return (
    <div className="max-w-2xl mx-auto p-4">
        <form onSubmit={handlesubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={productname} required placeholder='Enter your name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
           
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                <input type="text" onChange={(e)=>setCategory(e.target.value)} value={category} required placeholder='Enter category' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />    
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                <input type="number" onChange={(e)=>setStock(e.target.value)} value={stock} required placeholder='Enter stock' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} required placeholder='Enter price' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} required placeholder='Enter description' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
           
            <div className="mb-4 flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Submit
                </button>
            </div>
          
        </form>
    </div>
  )
}

