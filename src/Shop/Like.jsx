import React from "react";
import { FcLike } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import UserContectMain from "../UserContext";
import whishlist from './images/whishlist.png'

export const Like = () => {
  const { like, clickLike, handleClick} = UserContectMain();
  return (
    <>
      <div className="row justify-content-center w-100" style={like.length === 0?{backgroundImage:`url(${(whishlist)})`,height:"90vh",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}:{backgroundColor:"white"}} >
        <h1 className="text-center mt-3">WISHLISTS</h1>
        {/* {console.log(like)} */}
        {like?.map((three) => {
          return (

            
            <div className=" col-md-3 ">
              <div
                className="card mt-3 p-2 shadow"
                style={{ width: "20rem", height: "18rem" }}
              >
                <img
                  src={three.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "8rem", width: "8rem" }}
                />
                <div className="card-body">
                  <h4>{three.category}</h4>
                  <h6 className="card-title">{three.title}</h6>
                  <div className="d-flex justify-content-between mt-3">
                    <div className="fs-4"> ${three.price}</div>
                    <div role="button" onClick={() => handleClick(three)}>
                      <BsCart4 size={25} />
                    </div>
                    <div>
                      {" "}
                      <FaStar size={25} color="yellow" />{" "}
                    </div>
                    <div role="button" onClick={() => clickLike()}>
                      <FcLike size={25} />
                    </div>
                    <div>{three.rating.rate}</div>
                  </div>
                </div>
              </div>
            </div>
         
        
        );
        })}
      </div>
    </>
  );
};
