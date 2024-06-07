import React from "react";
import { useEffect, useState } from "react";
import UserContectMain from "../UserContext";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import mens from "./images/mens.jpeg";
import womens from "./images/womens.jpeg";
import electronic from "./images/eletronic.jpeg";
import jewelery from "./images/jewelery.jpeg";

const API = "https://fakestoreapi.com/products ";

export const Main = () => {
  const { item,setitem,handleClick, searches,setsearches,display,setdisplay, clickLike, } = UserContectMain();
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(users);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  },[setdisplay]);

  return (
    <>
      <div
        className="row justify-content-center mt-5 gap-3 w-100"
        style={{ display: display }}
      >
         {setitem(users)}

        <div
          className="col-md-6 rounded-3 fs-2"
          onClick={() => {
            setsearches("men's clothing");
            setdisplay("none");
          }}
          style={{
            color: "white",
            fontFamily: "initial",
            height: "40vh",
            backgroundImage: `url(${mens})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          Mens'clothing
        </div>

        <div
          className="col-md-5 rounded-3 fs-2"
          onClick={() => {
            setsearches("jewelery");
            setdisplay("none");
          }}
          style={{
            color: "white",
            fontFamily: "initial",
            height: "40vh",
            backgroundImage: `url(${jewelery})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          jewelery
        </div>

        <div
          className="col-md-6 rounded-3 fs-2"
          onClick={() => {
            setsearches("electronic");
            setdisplay("none");
          }}
          style={{
            color: "white",
            fontFamily: "initial",
            height: "40vh",
            backgroundImage: `url(${electronic})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          electronic
        </div>

        <div
          className="col-md-5 rounded-3 fs-2"
          onClick={() => {
            setsearches("women's clothing");
            setdisplay("none");
          }}
          style={{
            color: "white",
            fontFamily: "initial",
            height: "40vh",
            backgroundImage: `url(${womens})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          women's clothing
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row ">
          <h1 className="text-center">OUR TOP PRODUCTS</h1>
          {users.filter((one) => {
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
