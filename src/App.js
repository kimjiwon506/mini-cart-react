import React, { useState, useEffect } from 'react';
import './App.css';
import getProductData from './api/getProductData';
import CartList from './components/CartList';
import ProductList from './components/ProductList';

function App() {
    useEffect(() => {
        const fetchProductData = async () => {
            const result = await getProductData();
            // 데이터를 불러와서 넣어준 setState의 함수에 결과값을 넣어준다.
            setProductItems(result);
        };
        fetchProductData();
    }, []);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [productItem, setProductItems] = useState([]);
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };
    return (
        // 테스트
        <div className="relative min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="flex justify-between mb-4">
                    <h2 className="text-3xl font-bold">오늘의 상품</h2>
                    <button
                        id="open-cart-btn"
                        className="fill-gray-400 hover:fill-gray-500"
                        onClick={toggleCart}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z" />
                        </svg>
                    </button>
                </header>
                <section id="product-list">
                    <div
                        id={productItem.id}
                        className="grid gap-4 auto-cols-fr grid-cols-2 md:grid-cols-4"
                    >
                        <ProductList
                            productItem={productItem}
                            toggleCart={toggleCart}
                        />
                    </div>
                </section>
            </div>
            {/* backdrop의 가시성은 hidden 속성으로 제어합니다.  */}
            {isCartOpen && (
                <div
                    id="backdrop"
                    className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    onClick={toggleCart}
                ></div>
            )}
            {/* CartList */}
            <CartList />
            <footer className="text-center text-gray-500 text-xs pb-6">
                ©2022 Hanameee Corp. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
