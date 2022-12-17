import React, { useEffect, useState } from 'react'
import { ProductData, headData } from "./db"
import { useNavigate, Link } from "react-router-dom";
import {Box, useBoolean} from "@chakra-ui/react"
// import Posts from './Posts';
// import Pagination from './Pagination';

import "./products.css"


export default function Products() {

  // const pagination = paginationFactory({
  //   page:1,
  //   sixeperPage:5,
  //   lastPageText:">>",
  //   firstPageText:"<<",
  //   nextPageText:'>',
  //   prePageText:'<',
  //   showTotal:true,
  //   alwaysShowAll8tns:true,
  //   onPageChange:function(page, sizePerPage){
  //     console.log('page', page);
  //     console.log("sizePerPage", sizePerPage)
  //   },

  //   onSizePerPageChange: function (page, sizePerPage) {
  //     console.log('page' , page)
  //     console.log('sizePerPage', sizePerPage);
  //   }
  // })
  // const [loading,setLoading] = useState(false)
  // const [curPage, setCurPage] = useState(1)
  // const [postsPerPage, setPostPerPage] = useState(16)


  // const indexOfLastPost= curPage* postsPerPage;
  // const indexOfFirstPost= indexOfLastPost - postsPerPage;
  // const curPoste=ProductData.slice(indexOfFirstPost, indexOfLastPost);

  let [data, setData] = useState([])

  const datafetch = () => {
    fetch("http://localhost:8080/products/get/all")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(error => console.log(error))
  }

  useEffect(() => {

    datafetch();
    console.log(data)
  }, [])


  const navigate = useNavigate();
  return (
    <Box>
      <Box className='main'>
        <hr />
        <Box>
          <Box className='side'>
            <Box className='sidebar'><a href="#">HOME</a>/ <p>WALLFLOWERS & AIR FRESHENERS</p></Box>
            <Box className='sidebarBox'>
              <h2 className='topoff'>TOP OFFERS</h2>
              <p>5/$25Wallflowers Fragrance Refills</p>
              <p>Wallflower Pick of the Day</p>
              <p>3/$22 Room Sprays</p>
              <p>3/$10 Car Fragrance Refills</p>
            </Box>
            <Box className='sidebarBox'>
              <h3 className='topoff'>WALLFLOWERS</h3>
              <p>All Wallflowers</p>
              <p>Wallflowers Plugs</p>
              <p>Auto Refresh Wallflowers</p>

            </Box>
            <Box className='sidebarBox'>
              <h3 className='topoff'>AIR FRESHENERS</h3>
              <p>Room Sprays & Mists</p>
              <p>Car Fragrance</p>
            </Box>
          </Box>
        </Box>

        <Box>
          {/* <Box>
            <h1>my blog</h1>
            <Posts ProductData={curPoste} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={ProductData.lenght} />
          </Box> */}
          {
            <Box className='heads'>

              {
                headData.map(({ image, name }) => {
                  return (
                    <Box className='heaBox' >
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </Box>

                  )
                })
              }
            </Box>

          }
          

          <Box>
            <h1 className='wall'>Wallflowers & Air Fresheners</h1>
            <hr />
            <Box className='filter'>
              <h2>Filter By </h2>
              <select name="" id="">
                <option value="Car Fragrace Holder">Car Fragrace Holder</option>
                <option value="Car Fragrance Refill">Car Fragrance Refill</option>
                <option value="Gift Set">Gift Set</option>
                <option value="Room Spray">Room Spray</option>
                <option value="Wallfowes Fragrance Plug">Wallfowes Fragrance Plug</option>
                <option value="Wallflowers Fragrance Refill">Wallflowers Fragrance Refill</option>
                <button>DONE</button>
              </select>
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
              <select name="" id="">
                <option value="">Sort BY</option>
                <option value="">Price High to low</option>
                <option value="">Price Low to High</option>

              </select>
            </Box>
          </Box>
          {
            <Box className="recBox">
              {data.map(({ _id, image, name, category, price }) => {
                return (

                  <Box
                    key={_id}
                    className="Boxfood"

                  >
                    <Link to={`/products/:${_id}`}>
                      <img className="img" src={image} alt="" />
                    </Link>

                    <Link to={`/products/:${_id}`}>
                      <Box className="title">
                        <h1>{name}</h1>

                      </Box>
                    </Link>

                    <p className="name">{category}</p>
                    {/* <p>$ {price}</p> */}
                    <p className='ret'>Mix & Match: {Math.floor(Math.random() * 10)}/${Math.floor(Math.random() * 100)}</p>
                    <Box className='btn'><button>ADD TO BAG</button></Box>
                    <Box>&#11088; &#11088; &#11088; &#11088; &#11088; _({Math.floor(Math.random() * 100)})</Box>
                    <Box className="watch">



                    </Box>
                  </Box>

                );
              })}
            </Box>
          }

          <Box className='btne'>
            <button>Prev</button>
            <button>1</button>
            <button>Next</button>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
