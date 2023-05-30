import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("/product.json");
      const prod = await response.json();
      setData(prod.products);
      setLoading(false);      
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src="./assets/P18.jpg" 
                    height="250px"
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.name}
                    </h5>
                    <p className="card-text lead fw-bold">$ {product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn  btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}
