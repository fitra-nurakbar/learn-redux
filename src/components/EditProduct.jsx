import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelectors,
  updateProduct,
} from "../features/product/productSlice";
import { useParams, useNavigate } from "react-router-dom";

export const EditProduct = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await dispatch(updateProduct({ id, inputs }));
    console.log(inputs);
    navigate("/");
  };

  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setInputs(product);
    }
  }, [product]);

  return (
    <div className="container">
      <form onSubmit={handleUpdate} className="box mt-5">
        <div className="field">
          <label htmlFor="title" className="label">
            Title :
          </label>
          <input
            type="text"
            className="control p-2"
            id="title"
            name="title"
            value={inputs.title}
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
            value={inputs.price}
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <input type="submit" className="control button" value="Update" />
        </div>
      </form>
    </div>
  );
};
