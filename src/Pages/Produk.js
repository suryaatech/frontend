import React from 'react';
import ProdukCarousel from './../Components/ProdukCarousel.js';

class Produk extends React.Component {
  render() {
    const gambar = [
      "sbox1.jpg","sbox2.jpg","sbox3.jpg","sbox4.jpg",
      "bbalon1.jpg","bbalon2.jpg","bbalon3.jpg","bbalon4.jpg",
      "boneka1.jpg","boneka2.jpeg","boneka3.jpg","boneka4.jpg"
    ]
    return (
      <div className="pt-24">
        <ProdukCarousel />
        <div className="container">
          <h1 className="text-2xl text-primarty underline">Products</h1>
          {gambar.map(e => {
            return (
              <img src={process.env.PUBLIC_URL+"assets/produk/"+e} alt="" />
            )
          })}
        </div>
      </div>
    )
  }
};
export default Produk;
