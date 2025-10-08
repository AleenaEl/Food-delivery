// import React from 'react'
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Update.css"
import axios from "axios";
import { SERVER_URL } from "../../Services/server_url";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [image, setImage] = useState(false);
    const[prev,setPrev]=useState('')
    // to store the data
    const [data, setData] = useState({
      name: "",
      description: "",
      price: "",
      category: "Salad",
    });

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      // its updates the new changes , ...data is the old data and name &value is the new data
      setData((data) => ({ ...data, [name]: value }));
    };

    const getItem = async () => {
        
        const res = await axios.get(`${SERVER_URL}/food/get/`+ id);
        if (res.data.success) {
            // console.log(res.data.data.image);
            setData({
              name: res.data.data.name,
              description: res.data.data.description,
              price: res.data.data.price,
              category: res.data.data.category,
            });
            setPrev(res.data.data.image);
           
        } else {
            alert(res.data.message);
        }
    }



    //api call
    const onSubmitHandler = async (event) => {
      // to prevent the reload
      event.preventDefault();
      // sending the data collected data to formdata
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      // defined the price as number in the backend
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      // image is store in the image state
        if (image) {
            formData.append("image", image);
        } 
        
        

    //   //api call
      const response = await axios.put(`${SERVER_URL}/food/update/`+id, formData);
      if (response.data.success) {
        // if the data added successfully empty the fields
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
          setImage(false)
        navigate('/list')

        toast(response.data.message, {
          icon: "😀",
        });
      } else {
        toast.error(response.data.message);
      }
    };

    useEffect(() => {
      getItem();
      
    },[])
  return (
      <div className="add">
          <h4 className="mb-3 ">Edit Items</h4>
          <form className="flex-col"
              onSubmit={onSubmitHandler}
          >
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
            //   className="image"
              //to set the preview of the image
              // src={image ? URL.createObjectURL(image) : `${SERVER_URL}/images/`+prev} 
              src={image ? URL.createObjectURL(image) : image}
              alt="im"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
           
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
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              className="selectt"
              onChange={onChangeHandler}
                name="category"
                value={data.category}
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
        <button  className="add-btn">
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default Update
