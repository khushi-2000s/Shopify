import React from 'react'
import { Link } from 'react-router-dom';
import UserContectMain from '../UserContext'
import { BsCart4 } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

export const Nav = () => {
    const {cart,setsearches,setdisplay,like} = UserContectMain()
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow ">
  <div class="container">
  <Link to='/' className="text-decoration-none fs-1" style={{color:"black",fontFamily:"cursive"}} 
    onClick={()=> {
        setdisplay("")
        setsearches("")
       }}
  >Shopify</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarTogglerDemo02">
      <form class="d-flex">
        <input class="form-control me-2 shadow" type="search" placeholder="Search" aria-label="Search"
        onChange={(e) => setsearches(e.target.value)}
        />
        <button class="btn btn-outline-success shadow" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ms-auto gap-5">
        <li class="nav-item fs-2">
          <Link to='home' className=" text-decoration-none"><FcHome /></Link>
        </li>
        <li class="nav-item fs-2">
        <Link to='like' className=" text-decoration-none"><FcLike /></Link>
        <sup>{like.length}</sup>
        </li>
        <li class="nav-item fs-2">
        <Link to='card' className=" text-decoration-none"><BsCart4 /></Link>
        <sup>{cart.length}</sup>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
