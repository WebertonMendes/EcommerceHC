import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import WhatsApp from "../../components/Whatsapp/";
import Footer from "../../components/Footer/";

import BasketIcon from "../../assets/icons/basket.svg";

import { Container, Main } from "./styles";
import { ProductsContainer } from "../../components/Products/styles";

export default function Cart() {
    const history = useHistory();
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState([]);

    useEffect(() => {
        let itemsInCart = localStorage.getItem("@Caped:CartProduct");
        
        if (!itemsInCart || itemsInCart.length === 2) {
            history.push("/store");
            return alert("\nCarrinho vazio. 🙄")
        }

        if (itemsInCart.length >= 3) {
            itemsInCart = JSON.parse(itemsInCart);
            setCartItems(itemsInCart);
        }

        totalPriceOfProducts(itemsInCart);
        
    }, [history]);

    function totalPriceOfProducts(itemsInCart) {
        const priceProducts = itemsInCart.map((product) => {
            return Number(product.price.substr(3));
        })

        const getPrices = priceProducts.reduce((total, price) => total + price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        setTotalPrice(getPrices);
    }

    function handleRemoveCart(index) {
        let productsInCart = [];
        productsInCart = JSON.parse(localStorage.getItem("@Caped:CartProduct"));

        productsInCart.splice(index, 1);
        
        localStorage.setItem(`@Caped:CartProduct`, JSON.stringify(productsInCart));
        
        if (productsInCart.length === 0) {
            history.push("/store");
            return alert("\nCarrinho vazio. 🙄")
        }

        setCartItems(productsInCart);

        totalPriceOfProducts(productsInCart);

        return (alert(`\nProduto removido do carrinho com sucesso. ⛔`));
    }

    function handleEmptyCart() {
        localStorage.clear('@Caped:CartProduct');
        history.push("/store");

        return (alert(`\nCompra finalizada com sucesso. 😉`));
    }

    function handlePurchase () {
        const userIsRegister = JSON.parse(localStorage.getItem("@Caped:UserRegistration"));
        
        if (!userIsRegister) {
            history.push("/sign-up");
            return (alert(`\nCadastre-se para finalizar a sua compra. 😉`));
        }

        handleEmptyCart()
    }
    
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Main>
                    <div className="cart-details">
                        <h1>Produtos do Carrinho:</h1>
                        <p>
                            <strong>Valor total: </strong>
                            {totalPrice}
                        </p>
                        <button onClick={() => handlePurchase()}>
                            Finalizar compra
                        </button>
                    </div>
                    <ProductsContainer>
                        { cartItems.map((product, index) => (
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
                                <button onClick={() => handleRemoveCart(index)}>
                                    <img src={BasketIcon} alt="Basket Icon" />
                                    Remover do carrinho
                                </button>
                            </div>
                        )) }
                    </ProductsContainer>
                </Main>
            </Container>
            <Footer />
            <WhatsApp />
        </>
    )
}