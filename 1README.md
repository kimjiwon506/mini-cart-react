미니 장바구니 리액트 
-------------
패스트캠퍼스 장바구니 리액트 클론코딩

더미 api를 fetch API 를 통해 비동기로 데이터를 받고
요구사항에 맞는 기능구현 후 LocalStorage에 장바구니 데이터 브라우저에 저장

- async await를 사용하여 비동기 API 요청 모킹
<pre><code>
const request = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        const errorData = await response.json();
        throw errorData;
    } catch (e) {
        console.log(e);
    }
};
const getProductData = async () => {
    const result = await request('/productData.json');
    return result;
};
export default getProductData;
</code></pre>

- 더미 데이터를 바탕으로 상품 목록 렌더링
<pre><code>
return productItem.map(({ id, imgSrc, name, price }, idx) => {
        return (
            <>
             ...code
            </>
        );
    });
</code></pre>

- Web Storage API를 사용한 장바구니 데이터 저장
<pre><code>
const localCartState = localStorage.getItem('cartState');
    const initialCartItem = localCartState
        ? JSON.parse(localStorage.getItem('cartState'))
        : [];
        
    const saveToLocalStorage = () => {
        localStorage.setItem('cartState', JSON.stringify(cartListItem));
    };
</code></pre>
