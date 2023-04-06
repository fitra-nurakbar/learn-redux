import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productSelectors,
  getProducts,
  deleteProduct,
} from "../features/product/productSlice";
import { Link } from "react-router-dom";

export const ShowProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="box mt-5">
      <h4 className="title is-4">Products</h4>
      <Link to="add" className="button is-success">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>
                <Link
                  to={`/edit/${data.id}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(data.id)}
                  className="button is-danger is-small"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
