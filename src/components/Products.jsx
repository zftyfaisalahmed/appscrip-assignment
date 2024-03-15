import React, { useEffect, useState } from 'react'
import '../media.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        //.then(json => console.log(("products", json))) // to check api is fetched or not
        .then(json => {
            const productsWithFilledState = json.map(product => ({
                ...product,
                isFilled: false
            }));
            setProducts(productsWithFilledState);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleHeart = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    isFilled: !product.isFilled
                };
            }
            return product;
        }));
    };

  return (
    <div className='products'>
        {
            products.map(product => (
                <div className='cardproducts' key={product.id}>
                    <img src={product.image} alt="" />
                    <div className='cardheart'>
                        <div>
                            <h2>{product.category}</h2>
                            <p>{product.title}</p>
                        </div>
                        <div>
                        {
                        product.isFilled ? (
                                <i className='bi bi-heart-fill' onClick={() => toggleHeart(product.id)} style={{color : "red"}}></i>
                            ) : (
                                <i className='bi bi-heart' onClick={() => toggleHeart(product.id)}></i>
                            )
                        }
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Products