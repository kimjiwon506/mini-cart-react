import React from 'react';

const MAX_COUNT = 10;
const MIN_COUNT = 1;

const CartList = ({ cartListItem, setCartListItems }) => {
    const increaseCartItem = (idx) => {
        // const newCartItems = [...cartListItem];
        // newCartItems[idx].count += 1;
        // setCartListItems(newCartItems);
        if (cartListItem[idx].count < MAX_COUNT) {
            const newCartItems = [...cartListItem];
            newCartItems[idx].count += 1;
            setCartListItems(newCartItems);
        } else {
            alert('장바구니 최대수량은 10개 입니다.');
        }
    };
    const decreaseCartItem = (idx) => {
        // const newCartItems = [...cartListItem];
        // newCartItems[idx].count -= 1;
        // setCartListItems(newCartItems);
        if (cartListItem[idx].count > MIN_COUNT) {
            const newCartItems = [...cartListItem];
            newCartItems[idx].count -= 1;
            setCartListItems(newCartItems);
        } else {
            alert('최소수량은 1개입니다.');
        }
    };
    const removeCartItem = (idx) => {
        const newCartItems = [...cartListItem];
        newCartItems.splice(idx, 1);
        setCartListItems(newCartItems);
    };
    return cartListItem.map(({ id, imgSrc, name, price, count }, idx) => {
        return (
            <li className="flex py-6" id={id} key={idx}>
                <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={imgSrc}
                        className="h-full w-full object-cover object-center"
                        alt={name}
                    />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{name}</h3>
                            <p className="ml-4">{price}원</p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between">
                        <div className="flex text-gray-500">
                            <button className="decrease-btn">-</button>
                            <div className="mx-2 font-bold">{count}</div>
                            <button
                                className="increase-btn"
                                onClick={() => {
                                    increaseCartItem(idx);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="button"
                            className="font-medium text-sky-400 hover:text-sky-500"
                        >
                            <p
                                className="remove-btn"
                                onClick={() => {
                                    removeCartItem(idx);
                                }}
                            >
                                삭제하기
                            </p>
                        </button>
                    </div>
                </div>
            </li>
        );
    });
};

export default CartList;
