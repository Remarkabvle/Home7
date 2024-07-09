import React from "react";
import Image from "next/image";
function Product() {
  return (
    <div>
      <h2>Product</h2>
      <Image
        width={200}
        height={200}
        alt="rasim"
        src={
          "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
        }
      />
    </div>
  );
}

export default Product;
