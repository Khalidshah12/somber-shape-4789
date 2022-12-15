import React,{useState} from 'react'
import ProductData, { headData } from "./db"
import { useNavigate } from "react-router-dom";
// import Posts from './Posts';
// import Pagination from './Pagination';

import "./products.css"

export default function Products() {
  // const [loading,setLoading] = useState(false)
  // const [curPage, setCurPage] = useState(1)
  // const [postsPerPage, setPostPerPage] = useState(16)


  // const indexOfLastPost= curPage* postsPerPage;
  // const indexOfFirstPost= indexOfLastPost - postsPerPage;
  // const curPoste=ProductData.slice(indexOfFirstPost, indexOfLastPost);

  const navigate = useNavigate();
  return (
    <div>
      Products
      <h1>I am Sonu Gupta</h1>
      <div className='main'>
        <div>
          <h1>shidebar</h1>
          <div>
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

           <div>
            <h1>Wallflowers & Air Fresheners</h1>
            <hr />
            <div>

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
              <option value="Car Fragrace Holder">Car Fragrace Holder</option>
              <option value="Car Fragrance Refill">Car Fragrance Refill</option>
              <option value="Gift Set">Gift Set</option>
              <option value="Room Spray">Room Spray</option>
              <option value="Wallfowes Fragrance Plug">Wallfowes Fragrance Plug</option>
              <option value="Wallflowers Fragrance Refill">Wallflowers Fragrance Refill</option>
              <button>DONE</button>
              </select>
              <select name="" id="">PRODUCT TYPE 
              <option value="Car Fragrace Holder">Car Fragrace Holder</option>
              <option value="Car Fragrance Refill">Car Fragrance Refill</option>
              <option value="Gift Set">Gift Set</option>
              <option value="Room Spray">Room Spray</option>
              <option value="Wallfowes Fragrance Plug">Wallfowes Fragrance Plug</option>
              <option value="Wallflowers Fragrance Refill">Wallflowers Fragrance Refill</option>
              <button>DONE</button>
              </select>
            </div>
           </div>
          {
            <div className="recdiv">
              {ProductData.map(({ img, FRAGRANCE, type, price }) => {
                return (
                  // <Link to="/fetch">
                  <div
                    className="divfood"
                    onClick={() => {
                      let obj = { img, FRAGRANCE, type, price };
                      localStorage.setItem("itemadd", JSON.stringify(obj));
                      navigate("/fetch");
                    }}
                  >

                    <div>
                      {/* <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw0d5be651/diff_innovation_c1_vn.jpg?yocs=o_s_" alt="" /> */}
                    </div>
                    <img className="img" src={img} alt="" />
                    <div className="title">
                      {/* <img src={logo} alt="" /> */}
                      <h1>{FRAGRANCE}</h1>

                    </div>
                    <p className="name">{type}</p>
                    <p>$ {price}</p>
                    <p className='ret'>Mix & Match: {Math.floor(Math.random() * 10)}/${Math.floor(Math.random() * 100)}</p>
                    <div className='btn'><button>ADD TO BAG</button></div>
                    <div>&#11088; &#11088; &#11088; &#11088; &#11088; _({Math.floor(Math.random() * 100)})</div>
                    <div className="watch">



                    </div>
                  </div>
                  // </Link>
                );
              })}
            </div>
          }
        </div>
      </div>

    </div>
  )
}
