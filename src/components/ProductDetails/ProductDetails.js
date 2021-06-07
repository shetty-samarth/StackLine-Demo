import React from 'react';
import { useSelector } from 'react-redux';
import './ProductDetails.css'
const ProductDetails = () => {
    const product = useSelector((state)=>state.data);
    const {image,subtitle,title,tags} = product
    console.log(image,subtitle,title);
    console.log(tags)
    console.log('products',product)
    return(
        <div id="product">
        <figure>
          <img src={image} alt={title} />
          <figcaption id="title">{title}</figcaption>
          <figcaption id="subtitle">{subtitle}</figcaption>
        </figure>
        <hr />
        <div id="spans">{tags.map(item =>{
            return <span key={item.key} className="tags">{item}</span>
        })}</div>
        <hr />
        
      </div>
    )
}

export default ProductDetails;
