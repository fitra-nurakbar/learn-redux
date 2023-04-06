import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../features/product/productSlice";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(saveProduct(inputs));
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="box mt-5">
        <div className="field">
          <label htmlFor="title" className="label">
            Title :
          </label>
          <input
            type="text"
            className="control p-2"
            id="title"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="price" className="label">
            Price :
          </label>
          <input
            type="number"
            className="control p-2"
            id="price"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input type="submit" className="control button" />
        </div>
      </form>
    </div>
  );
};
