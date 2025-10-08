/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// import React from 'react'
import {  useState } from 'react';
import {assets} from '../../assets/assets'
import './Add.css'
import axios from 'axios'
import { SERVER_URL } from '../../Services/server_url';
import { toast } from 'react-hot-toast';

function Add() {

  const [image, setImage] = useState(false);
  // to store the data
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category:'Salad'
        
    })
  
    const onChangeHandler = (event) => {
        const name = event.target.name
      const value = event.target.value
      // its updates the new changes , ...data is the old data and name &value is the new data
        setData(data=>({...data,[name]:value}))
    }

    //api call
    const onSubmitHandler = async (event) => {
        // to prevent the reload
      event.preventDefault()
      // sending the data collected data to formdata
        const formData = new FormData()
        formData.append("name",data.name)
      formData.append("description", data.description)
      // defined the price as number in the backend
        formData.append("price",Number(data.price))
      formData.append("category", data.category)
      // image is store in the image state
      formData.append("image", image)
      
      //api call
      const response = await axios.post(`${SERVER_URL}/food/add`,formData);
      if (response.data.success) {
        // if the data added successfully empty the fields
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        
        toast(response.data.message, {
          icon: "😀",
        });
      } else {
        toast.error(response.data.message);
      }
        
    }

  return (
    
      <div className="add">
        
        <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img
                className="image"
                //to set the preview of the image
                {/* src={image?URL.createObjectURL(image):assets.upload_area} */}
                src={image}
                alt=""
              />
            </label>
            <input
                      
                      onChange={(e)=>setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here"
            />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="5"
              placeholder="Write content here"
              required
            ></textarea>
          </div>
          <div className="add-category-price ">
            <div className="add-category flex-col">
              <p>Product Category</p>
              <select
                className="selectt"
                onChange={onChangeHandler}
                name="category"
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product Price</p>
              <input
                className="inputclasa"
                onChange={onChangeHandler}
                value={data.price}
                type="Number"
                name="price"
                placeholder="$20"
              />
            </div>
          </div>
          <button type="submit" className="add-btn">
            ADD
          </button>
        </form>
      </div>
    
  );
}

export default Add
