import React, { useEffect, useState } from 'react'
import { ProductData, headData } from "./db"
import { useNavigate, Link } from "react-router-dom";
import {div, useBoolean} from "@chakra-ui/react"
import { backend_url } from '../../Utils/backendURL';
// import Posts from './Posts';
// import Pagination from './Pagination';

import "./products.css"
import FilterSort from './FilterSort';


export default function Products({category}) {

  
  const [showcat, setShowCat] = useState([]);
  let [page, setPage] = useState(1);
  let [sort, setSort] = useState("");
  

  let [data, setData] = useState([])

  const handlesort = (event) =>{
    setSort(event.target.value)
  }

  let [cat, setCat] = useState("");

  const handleCatagory = (event) =>{
    setCat(event.target.value);
  }

  const datafetch = () => {
    fetch(`${backend_url}/products/get/all?ps=${sort}&cat=${category}&page=${page}`)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(error => console.log(error))
  }

  const getSortingData = () =>{
    fetch(`http://localhost:8080/products/get/all`)
    .then(res => res.json())
    .then(result => {
      setShowCat(result)
      console.log(result)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getSortingData();
    // datafetch();
    // console.log(data)
  }, [page, sort])


  const navigate = useNavigate();
  return (
    <div>
      <div className='main'>
        <hr />
        <div>
          <div className='side'>
            <div className='sidebar'><a href="#">HOME</a>/ <p>WALLFLOWERS & AIR FRESHENERS</p></div>
            <div className='sidebardiv'>
              <h2 className='topoff'>TOP OFFERS</h2>
              <p>5/$25Wallflowers Fragrance Refills</p>
              <p>Wallflower Pick of the Day</p>
              <p>3/$22 Room Sprays</p>
              <p>3/$10 Car Fragrance Refills</p>
            </div>
            <div className='sidebardiv'>
              <h3 className='topoff'>WALLFLOWERS</h3>
              <p>All Wallflowers</p>
              <p>Wallflowers Plugs</p>
              <p>Auto Refresh Wallflowers</p>

            </div>
            <div className='sidebardiv'>
              <h3 className='topoff'>AIR FRESHENERS</h3>
              <p>Room Sprays & Mists</p>
              <p>Car Fragrance</p>
            </div>
          </div>
        </div>

        <div>
          {
            <div className='heads'>

              {
                headData.map(({ image, name }) => {
                  return (
                    <div className='headiv' >
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </div>

                  )
                })
              }
            </div>

          }
          

          <div>
            <h1 className='wall'>{category}</h1>
            <hr />
            <div className='filter'>
              <h2>Filter By </h2>
              {/* <FilterSort/> */}
              {/* <select name="" id="" onChange={handleCatagory}>
                <option value="" selected disabled>--Select Category--</option>
                {
                  showcat.map((ele) =>{
                    return  <option value={ele.category}>{ele.category}</option>
                  })
                }
               
            
                <button >DONE</button>
              </select> */}
              <select name="" id="">
                <option value="A Thousand Wishes">A Thousand Wishes</option>
                <option value="After Dark">After Dark</option>
                <option value="Applewood & clove">Applewood & clove</option>
                <option value="Balsam & Firwood">Balsam & Firwood</option>
                <option value="Bergamot Waters">Bergamot Waters</option>
                <option value="Black Cherry Merlot">Black Cherry Merlot</option>
                <option value="Black Tie">Black Tie</option>
                <option value="Cactus Blossom">Cactus Blossom</option>
                <option value="Caramel Pumpkin Swirl">Caramel Pumpkin Swirl</option>
                <option value="Champagne Toast">Champagne Toast</option>
                <option value="Christmas Cider">Christmas Cider</option>
                <option value="Cinnamon Stick">Cinnamon Stick</option>
                <option value="Dream Bright">Dream Bright</option>
                <option value="Endless Weekend">Endless Weekend</option>
                <option value="Eucalyptus Mint">Eucalyptus Mint</option>
                <option value="Eucalyptus Spearmint">Eucalyptus Spearmint</option>
                <option value="Evergreen">Evergreen</option>
                <option value="Fa La La Latte">Fa La La Latte</option>
                <option value="Falling Flurries">Falling Flurries</option>
                <option value="Flanne">Flanne</option>
                <option value="Fresh">Fresh</option>
                <option value="Frsh Balsam">Frsh Balsam</option>
                <option value="Fresh Cotton">Fresh Cotton</option>
                <option value="Fresh Fall Morning">Fresh Fall Morning</option>
                <option value="Fresh Linen">Fresh Linen</option>
                <option value="Frozen Lake">Frozen Lake</option>
                <option value="Gingham">Gingham</option>
                <option value="Gingham Love">Gingham Love</option>
                <option value="Holiday">Holiday</option>
                <option value="Honeycrisp Apple">Honeycrisp Apple</option>
                <option value="Hot Cocoa & Cream">Hot Cocoa & Cream</option>
                <option value="Iced Blue Lavender">Iced Blue Lavender</option>
                <option value="Iced Cinnamon Rolls">Iced Cinnamon Rolls</option>
                <option value="Into the Night">Into the Night</option>
                <option value="Japanese Cherry Blossom">Japanese Cherry Blossom</option>
                <option value="Kitchen Lemon">Kitchen Lemon</option>
                <option value="Warm Vanilla Sugar">Warm Vanilla Sugar</option>
                <option value="White lris & Cedarwood">White lris & Cedarwood</option>
                <option value="Wild Berry & Plum">Wild Berry & Plum</option>
                <option value="Wild Lavender Mint">Wild Lavender Mint</option>
                <option value="Winter">Winter</option>
                <option value="Winter Candy Apple">Winter Candy Apple</option>
                <option value="Winter Citrus Wreath">Winter Citrus Wreath</option>
                <option value="Winterberry Ice">Winterberry Ice</option>
                <button>DONE</button>
              </select>
              <select name="" id="" onChange={handlesort}>
                <option value="">Sort BY</option>
                <option value="ds" >Price High to low</option>
                <option value="as">Price Low to High</option>

              </select>
            </div>
          </div>
          {
            <div className="recdiv">
              {data.map(({ _id, image, name, category, price }) => {
                return (

                  <div
                    key={_id}
                    className="divfood"

                  >
                    <Link to={`/products/:${_id}`}>
                      <img className="img" src={image} alt="" />
                    </Link>

                    <Link to={`/products/:${_id}`}>
                      <div className="title">
                        <h1>{name}</h1>

                      </div>
                    </Link>

                    <p className="name">{category}</p>
                    {/* <p>$ {price}</p> */}
                    <p className='ret'>Mix & Match: {Math.floor(Math.random() * 10)}/${Math.floor(Math.random() * 100)}</p>
                    <div className='btn'><button>ADD TO BAG</button></div>
                    <div>&#11088; &#11088; &#11088; &#11088; &#11088; _({Math.floor(Math.random() * 100)})</div>
                    <div className="watch">



                    </div>
                  </div>

                );
              })}
            </div>
          }

          <div className='btne'>
            <button onClick={() => {page <= 1? setPage(1) : setPage(page - 1)}}>Prev</button>
            <button>{page}</button>
            <button onClick={() => {setPage(page + 1)}}>Next</button>
          </div>
        </div>
      </div>

    </div>
  )
}
