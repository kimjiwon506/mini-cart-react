import React from 'react';

const ProductList = ({
    productItem,
    toggleCart,
    cartListItem,
    setCartListItems,
}) => {
    const handleAddProduct = (idx) => {
        const currentProduct = productItem[idx];
        const checkedIndex = cartListItem.findIndex(
            (item) => item.id === currentProduct.id
        );
        if (checkedIndex === -1) {
            const newCartItems = [
                ...cartListItem,
                { ...currentProduct, count: 1 },
            ];
            setCartListItems(newCartItems);
        } else {
            const newCartItems = [...cartListItem];
            newCartItems[checkedIndex].count += 1;
            setCartListItems(newCartItems);
        }

        toggleCart();
    };
    return productItem.map(({ id, imgSrc, name, price }, idx) => {
        return (
            <>
                {/* 아래 하드코딩 되어있는 상품 목록들을 src/api/productData.json을 바탕으로 불러오도록 변경해주세요.  */}
                <article id={id} onClick={() => handleAddProduct(idx)} key={id}>
                    <div className="rounded-lg overflow-hidden border-2 relative">
                        <img
                            src={imgSrc}
                            className="object-center object-cover"
                            alt={name}
                        />
                        <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
                            <div
                                data-productid="1"
                                className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
                            >
                                장바구니에 담기
                            </div>
                        </div>
                    </div>
                    <h3 className="mt-4 text-gray-700">{name}</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900">
                        {price.toLocaleString()}원
                    </p>
                </article>
            </>
        );
    });
};

export default ProductList;
