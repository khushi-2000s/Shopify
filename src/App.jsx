
import React,{ useState } from 'react';
import { Main } from './Shop/Main';
import { UserContextProvider } from './UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card } from './Shop/Card';
import { Nav } from './Shop/Nav';
import { Like } from './Shop/Like';
import { Home } from './Shop/Home';


function App() {
  
 

  const [item, setitem] = useState([])
  const [cart, setcart] = useState([])
  const [like, setlike] = useState([])
  const [searches, setsearches] = useState('');
  const [display, setdisplay] = useState('')

  const handleClick = (data) =>{
       setcart([...cart,{...data, quantity:1}])
  }
  const clickLike = (datas) =>{
  
        setlike([...like,datas])
  }
      
  return (
    <>
   <UserContextProvider value={{display, setdisplay,searches,setsearches,item,setitem,cart,setcart,handleClick,clickLike,like}}>
     
 

<BrowserRouter>
   <Nav />
  <Routes>
     
    <Route path='/' element={<Main />} />
    <Route path='card' element={<Card />} />
    <Route path='home' element={<Home />} />
    <Route path='like' element={<Like />} />
  </Routes>
</BrowserRouter>


</UserContextProvider>
    </>
  );
}

export default App;
