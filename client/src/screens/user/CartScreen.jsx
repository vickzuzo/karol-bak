// import React from "react";
// import { Header, PageHeader, Footer, CartQuantity } from "../../components";

// const CartScreen = () => {
//   const data = [
//     {
//       title: "Project Title",
//       date: "12-01-22",
//       image_url:
//         "https://karolbak.com/wp-content/uploads/2020/05/karol-bak-cognac-collection-939x800.jpg",
//     },
//     {
//       title: "Project Title",
//       date: "12-01-22",
//       image_url:
//         "https://karolbak.com/wp-content/uploads/2020/05/karol-bak-cognac-collection-939x800.jpg",
//     },
//   ];
//   return (
//     <div>
//       <Header />
//       <PageHeader title="cart" />
//       <div className="pageBody_80">
//         {data.map((gallery, index) => (
//           <div className="shop_details_container">
//             <div className="shop_details_left">
//               <img src={gallery.image_url} alt="product" />
//             </div>
//             <div className="shop_details_right">
//               <p className="shop_details_title">{gallery.title}</p>
//               <p className="shop_details_desc">product description</p>
//               <p className="shop_details_prize">Prize</p>
//               <CartQuantity />
//             </div>
//           </div>
//         ))}
//         <div className="btn_container">
//           <button className="about_more_btn width">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             PROCEED
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartScreen;
