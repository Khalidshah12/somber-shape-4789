import React, { useEffect, useState } from 'react'
import { ProductData, headData } from "./db"
import { useNavigate, Link } from "react-router-dom";
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
          {/* <div>
            <h1>my blog</h1>
            <Posts ProductData={curPoste} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={ProductData.lenght} />
          </div> */}
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
          {/* <div>
            <BootstrapTable
            bootstrap4
            keyfield="id"
            columns={columns}
            data={data}
            pagination={pagination}
            />
          </div> */}

          <div>
            <h1 className='wall'>Wallflowers & Air Fresheners</h1>
            <hr />
            <div className='filter'>

              <h2>Filter By </h2>
              <select name="" id="">PRODUCT TYPE
                <option value="Car Fragrace Holder">Car Fragrace Holder</option>
                <option value="Car Fragrance Refill">Car Fragrance Refill</option>
                <option value="Gift Set">Gift Set</option>
                <option value="Room Spray">Room Spray</option>
                <option value="Wallfowes Fragrance Plug">Wallfowes Fragrance Plug</option>
                <option value="Wallflowers Fragrance Refill">Wallflowers Fragrance Refill</option>
                <button>DONE</button>
                
              </select>
              <select name="" id="">PRODUCT TYPE
                <h3>A</h3>
                <option value="A Thousand Wishes">A Thousand Wishes</option>
                <option value="After Dark">After Dark</option>
                <option value="Applewood & clove">Applewood & clove</option>
                <h3>B</h3>
                <option value="Balsam & Firwood">Balsam & Firwood</option>
                <option value="Bergamot Waters">Bergamot Waters</option>
                <option value="Black Cherry Merlot">Black Cherry Merlot</option>
                <option value="Black Tie">Black Tie</option>
                <h1>C</h1>
                <option value="Cactus Blossom">Cactus Blossom</option>
                <option value="Caramel Pumpkin Swirl">Caramel Pumpkin Swirl</option>
                <option value="Champagne Toast">Champagne Toast</option>
                <option value="Christmas Cider">Christmas Cider</option>
                <option value="Cinnamon Stick">Cinnamon Stick</option>
                <h3>D</h3>
                <option value="Dream Bright">Dream Bright</option>
                <h3>E</h3>
                <option value="Endless Weekend">Endless Weekend</option>
                <option value="Eucalyptus Mint">Eucalyptus Mint</option>
                <option value="Eucalyptus Spearmint">Eucalyptus Spearmint</option>
                <option value="Evergreen">Evergreen</option>
                <h3>F</h3>
                <option value="Fa La La Latte">Fa La La Latte</option>
                <option value="Falling Flurries">Falling Flurries</option>
                <option value="Flanne">Flanne</option>
                <option value="Fresh">Fresh</option>
                <option value="Frsh Balsam">Frsh Balsam</option>
                <option value="Fresh Cotton">Fresh Cotton</option>
                <option value="Fresh Fall Morning">Fresh Fall Morning</option>
                <option value="Fresh Linen">Fresh Linen</option>
                <option value="Frozen Lake">Frozen Lake</option>
                <h3>G</h3>
                <option value="Gingham">Gingham</option>
                <option value="Gingham Love">Gingham Love</option>
                <h3>H</h3>
                <option value="Holiday">Holiday</option>
                <option value="Honeycrisp Apple">Honeycrisp Apple</option>
                <option value="Hot Cocoa & Cream">Hot Cocoa & Cream</option>
                <h3>I</h3>
                <option value="Iced Blue Lavender">Iced Blue Lavender</option>
                <option value="Iced Cinnamon Rolls">Iced Cinnamon Rolls</option>
                <option value="Into the Night">Into the Night</option>
                <h3>J</h3>
                <option value="Japanese Cherry Blossom">Japanese Cherry Blossom</option>
                <h3>K</h3>
                <option value="Kitchen Lemon">Kitchen Lemon</option>
                <h3>W</h3>
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
              <select name="" id="">PRODUCT TYPE
                <option value="">Sort BY</option>
                <option value="">Price High to low</option>
                <option value="">Price Low to High</option>

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

                    <div>
                      {/* <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw0d5be651/diff_innovation_c1_vn.jpg?yocs=o_s_" alt="" /> */}
                    </div>
                    <Link to={`/products/:${_id}`}>
                      <img className="img" src={image} alt="" />
                    </Link>

                    <Link to={`/products/:${_id}`}>
                      <div className="title">
                        <h1>{name}</h1>

                      </div>
                    </Link>

                    <p className="name">{category}</p>
                    <p>$ {price}</p>
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
            <button>Prev</button>
            <button>1</button>
            <button>Next</button>
          </div>
        </div>
      </div>

    </div>
  )
}
