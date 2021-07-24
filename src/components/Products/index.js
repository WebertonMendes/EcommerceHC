import { useState, useEffect } from 'react';

import api from "../../../api/";

import bannerProduct from "../../assets/images/banner-product.jpg";
import BasketIcon from "../../assets/icons/basket.svg";

import { ProductsContainer, Content } from "./styles";

export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('/products').then(response => {
            setData(response.data)
        })
    }, [])

    function handleCart(id) {
        const addProductInCart = data.find(product => product.id === id);

        const productStorage = JSON.parse(localStorage.getItem("@Caped:CartProduct"));
        
        if (productStorage === null) {
            localStorage.setItem(`@Caped:CartProduct`, JSON.stringify([addProductInCart]));
        } else {
            localStorage.setItem(`@Caped:CartProduct`, JSON.stringify([
                ...productStorage,
                addProductInCart
            ]));
        }

        return (alert(`\nProduto: ${addProductInCart.name} \n foi adicionado ao carrinho. 🤗`));
    }

    return (
        <Content>
            <div
                className="banner-products"
                style={{  
                    backgroundImage: `url(${bannerProduct})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            <h3>Conheça os nossos produtos:</h3>
        
            <ProductsContainer>
                { data.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div
                            className="product-image"
                            style={{  
                                backgroundImage: `url(${product.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        ></div>
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p>{product.description}</p>
                            <h3>{product.price}</h3>
                        </div>
                        
                        <button onClick={() => handleCart(product.id)}>
                            <img src={BasketIcon} alt="Basket Icon" />
                            Adicionar ao carrinho
                        </button>
                    </div>
                )) }
            </ProductsContainer>
        </Content>
    )
}