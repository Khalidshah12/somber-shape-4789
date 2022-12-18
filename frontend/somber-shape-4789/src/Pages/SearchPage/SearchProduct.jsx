import { calc } from '@chakra-ui/react';
import React,{useEffect, useState} from 'react'
import {div} from "@chakra-ui/react"

export default function SearchProduct() {
    const [Data, setData] = useState([]);

  const localStorageData = () => {
    let valueData = JSON.parse(localStorage.getItem("searchItems")) || [];
    setData(valueData);
    console.log(valueData)
  };

  useEffect(() => {
    localStorageData();
    console.log( localStorageData)
  }, []);

  const ProductData = [
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb572203b/crop/026589239_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Winter Candy Apple ",
      type: "Wallflowers Fragrance Refill",
      price: 7.5,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd2b9219a/crop/026553493_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Fresh Balsam ",
      type: "Wallflowers Fragrance Refills, 2-Pack",
      price: 14.5,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw69648712/crop/026584491_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Ombre Tree Nightlight",
      type: "Wallflowers Fragrance Plug",
      price: 14.5,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb40abb64/crop/026579696_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Twas the Night Before Christmas",
      type: "Concentrated Room Spray",
      price: 8.5,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw783453e7/crop/026579508_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Bath & Body Works",
      type: "Coziest Blanket",
      price: 59.95,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c13d6fe/crop/026585621_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Dancing Santa Visor & Vent Clip",
      type: "Car Fragrance Holder",
      price: 10.95,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8d550154/crop/026581279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Bright Christmas Morning",
      type: "Car Fragrance Refill",
      price: 4.95,
    },
    {
      _id: 1,
      img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw14b87378/crop/026585629_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      FRAGRANCE: "Christmas Lights Visor & Vent Clip",
      type: "Car Fragrance Holder",
      price: 9.95,
    },
]
  
  return (
    <div>
        {/* <div>
              <img className="fetch" src={Data.img} alt='' />

              
                <div className="fetch-recipe">
                  <img src={Data.logo} alt="logo" />
                  <div>
                    <div className="recipesfllow">
                      <h2 className="follow">{Data.type}</h2>
                    </div>
                    
                  </div>
                </div>
        </div> */}
        <div className="recdiv">
              {ProductData.map(({_id, img, FRAGRANCE, type, price }) => {
                return (
                   
                  <div
                    key={_id}
                    className="divfood"
                    
                  >

                    <div>
                     
                    </div>
                    <img className="img" src={img} alt="" />
                    <div className="title">
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
                  
                );
              })}
            </div>
    </div>
  )
}
