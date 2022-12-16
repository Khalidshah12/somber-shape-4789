const headData = [
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dwd482bc56/images/diff_visual-filter-wf_junsas_vn.jpg?yocs=o_s_",
    name: "All Wallflowers",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw0d5be651/diff_innovation_c1_vn.jpg?yocs=o_s_",
    name: "Wallflowers Plugs",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw84d23c24/images/diff_visual-filter-auto-ref_junsas_vn.jpg?yocs=o_s_",
    name: "Auto Refresh Wallflowers",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dwa25ffadf/diff_crs_c1_ss.jpg?yocs=o_s_",
    name: "Room Sprays & Mists",
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw3c4daf8e/dif-f_car_sp3_ss.jpg?yocs=o_s_",
    name: "Car Fragrance",
  },
];

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
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw96fbaca6/crop/026581270_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Strawberry Snowflakes",
    type: "Car Fragrance Refill",
    price: 4.95,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd54ec30f/crop/026589245_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Sugared Snickerdoodle",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07d584c3/crop/026585324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Nice List Gnome Wallflowers Scent Control™",
    type: "Fragrance Plug",
    price: 16.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48cded41/crop/025148905_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Our Merriest",
    type: "Gift Box Ever",
    price: 30.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf9379633/images/Christmas2022/xcat_bopisgeneric_c1_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw23a26d56/crop/026587305_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Nutcracker",
    type: "Wallflowers Fragrance Refill",
    price: 12.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3409cebe/crop/026573054_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Winter",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw44862bd6/crop/026593856_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Santa Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 34.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw44862bd6/crop/026593856_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Santa Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 34.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw603b2bad/crop/026579694_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Balsam & Firewood",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw71650531/crop/026593847_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Frosted Cranberry",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5026342d/crop/026589246_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "The Perfect Christmas",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95a9bf1b/crop/026573056_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Evergreen",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f54b4b5/crop/026589243_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Cinnamon Caramel Swirl",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5f077bcd/images/Fall2022/diff_autorefresh_fa2_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.7,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw43dba6a8/crop/026573070_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tis the Season",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa1bea0c5/crop/026579674_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Winter Candy Apple",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc5da652/crop/026583810_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Dream Bright",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc4af22dd/crop/026579683_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Strawberry Snowflades",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa2e4d396/crop/026589240_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Snowy Peach Berry",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw49ad3e28/images/Fall2022/xcat_moxy-launch_fa3_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b15e0bd/crop/026583804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Warm Vanill Sugar",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc1b226e/crop/026247728_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Geometric Planter",
    type: "Wallflowers Fragrance Plug",
    price: 16.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d517a9d/crop/026567798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Gingham Love",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82fb22a1/crop/026416235_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Pink Hearts Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw600b4fb6/crop/026589241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Hol_iday",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc747c639/crop/026603146_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Crown Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe228158e/crop/026584189_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Under the Christmas Tree",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8d3bbd8a/crop/026631425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Sun-Drenched Linen",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1c5efba8/crop/026632373_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Gems Burst Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf47fd0bb/crop/026603142_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Townhome Luminary Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 19.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwab01f2f0/crop/026587286_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Dream Bright",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw12a02500/crop/026631424_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Mango Mai Tai",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Black Tie",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbf4bbad5/crop/026589263_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Twas the Night Before Christmas",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw411c7a45/crop/026573449_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tis the Season",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c1b0953/crop/026603150_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Vintage Snow Globe Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 24.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6dce3c05/crop/026587309_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tree & Stars Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 12.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw85df76fa/crop/026589244_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Vanilla Bean Noel",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe1b6a172/crop/026587278_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "After Dark",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw531862b9/crop/026589259_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Hot Cocoa & Cream",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw199a96b0/crop/026589277_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "M_idnight Snow",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw749e1cda/crop/026587283_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Applewood & Clove",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
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
    img: "https://www.bathandbodyworks.com/p/ombre-tree-nightlight-wallflowers-fragrance-plug-026584491.html?cg_id=home-fragrance",
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
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw96fbaca6/crop/026581270_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Strawberry Snowflakes",
    type: "Car Fragrance Refill",
    price: 4.95,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd54ec30f/crop/026589245_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Sugared Snickerdoodle",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw07d584c3/crop/026585324_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Nice List Gnome Wallflowers Scent Control™",
    type: "Fragrance Plug",
    price: 16.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48cded41/crop/025148905_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Our Merriest",
    type: "Gift Box Ever",
    price: 30.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf9379633/images/Christmas2022/xcat_bopisgeneric_c1_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw23a26d56/crop/026587305_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Nutcracker",
    type: "Wallflowers Fragrance Refill",
    price: 12.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3409cebe/crop/026573054_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Winter",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw44862bd6/crop/026593856_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Santa Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 34.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw44862bd6/crop/026593856_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Santa Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 34.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw603b2bad/crop/026579694_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Balsam & Firewood",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw71650531/crop/026593847_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Frosted Cranberry",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5026342d/crop/026589246_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "The Perfect Christmas",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95a9bf1b/crop/026573056_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Evergreen",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9f54b4b5/crop/026589243_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Cinnamon Caramel Swirl",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5f077bcd/images/Fall2022/diff_autorefresh_fa2_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.7,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw43dba6a8/crop/026573070_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tis the Season",
    type: "Wallflowers Fragrance Refills, 2-Pack",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa1bea0c5/crop/026579674_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Winter Candy Apple",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc5da652/crop/026583810_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Dream Bright",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc4af22dd/crop/026579683_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Strawberry Snowflades",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa2e4d396/crop/026589240_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Snowy Peach Berry",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw49ad3e28/images/Fall2022/xcat_moxy-launch_fa3_gpt.gif?yocs=s_",
    FRAGRANCE: "",
    type: "",
    price: 0.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b15e0bd/crop/026583804_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Warm Vanill Sugar",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc1b226e/crop/026247728_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Geometric Planter",
    type: "Wallflowers Fragrance Plug",
    price: 16.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d517a9d/crop/026567798_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Gingham Love",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82fb22a1/crop/026416235_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Pink Hearts Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw600b4fb6/crop/026589241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Hol_iday",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc747c639/crop/026603146_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Crown Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe228158e/crop/026584189_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Under the Christmas Tree",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8d3bbd8a/crop/026631425_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Sun-Drenched Linen",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1c5efba8/crop/026632373_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Gems Burst Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 14.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf47fd0bb/crop/026603142_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Townhome Luminary Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 19.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwab01f2f0/crop/026587286_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Dream Bright",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw12a02500/crop/026631424_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Mango Mai Tai",
    type: "Car Fragrance Refill",
    price: 4.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw68829434/crop/026587279_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Black Tie",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbf4bbad5/crop/026589263_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Twas the Night Before Christmas",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw411c7a45/crop/026573449_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tis the Season",
    type: "Concentrated Room Spray",
    price: 8.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c1b0953/crop/026603150_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Vintage Snow Globe Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 24.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6dce3c05/crop/026587309_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Tree & Stars Nightlight",
    type: "Wallflowers Fragrance Plug",
    price: 12.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw85df76fa/crop/026589244_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Vanilla Bean Noel",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe1b6a172/crop/026587278_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "After Dark",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw531862b9/crop/026589259_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Hot Cocoa & Cream",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw199a96b0/crop/026589277_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "M_idnight Snow",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
  {
    _id: 1,
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw749e1cda/crop/026587283_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    FRAGRANCE: "Applewood & Clove",
    type: "Wallflowers Fragrance Refill",
    price: 7.5,
  },
];

export { headData ,ProductData};


