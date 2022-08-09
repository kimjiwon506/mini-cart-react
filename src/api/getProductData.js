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
