import React from "react";
import UserContectMain from "../UserContext";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

export const Home = () => {
  const {item, handleClick, searches, clickLike } = UserContectMain();

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row ">
          <h1 className="text-center">OUR TOP PRODUCTS</h1>
          {item.filter((one) => {
              return searches.toLowerCase() === ""
                ? one
                : one.category.toLowerCase().includes(searches);
            }).map((one) => {
              return (
                <div className=" col-md-3 ">
              
                  <div
                    className="card mt-3 p-2 shadow"
                    style={{ width: "20rem", height: "18rem" }}
                  >
                    <img
                      src={one.image}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "8rem", width: "8rem" }}
                    />
                    <div className="card-body">
                      <h4>{one.category}</h4>
                      <h6 className="card-title">{one.title}</h6>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="fs-4"> ${one.price}</div>
                        <div role="button" onClick={() => handleClick(one)}>
                          <BsCart4 size={25} />
                        </div>
                        <div>
                          {" "}
                          <FaStar size={25} color="yellow" />{" "}
                        </div>
                        <div role="button" onClick={() => clickLike(one)}>
                          <FcLike size={25} />
                        </div>
                        <div>{one.rating.rate}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
