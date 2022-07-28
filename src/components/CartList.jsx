import React from 'react';

const CartList = ({ cartListItem }) => {
    return cartListItem.map(({ id, imgSrc, name, price, count }, idx) => {
        return (
            <li className="flex py-6" key={idx}>
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
                            <button className="increase-btn">+</button>
                        </div>
                        <button
                            type="button"
                            className="font-medium text-sky-400 hover:text-sky-500"
                        >
                            <p className="remove-btn">삭제하기</p>
                        </button>
                    </div>
                </div>
            </li>
        );
    });
};

export default CartList;