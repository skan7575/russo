import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import axios from "axios";


const WooCommerce = new WooCommerceRestApi({
    url: 'https://xn--80aakewj7bk8h.xn--p1ai', // Замените на URL вашего сайта
    consumerKey: 'ck_45cd2f686e2dc8a452725cae754d4befa6c241e1',
    consumerSecret: 'cs_795435113370cda04084836900649979714b59e4',
    wpAPI: true,
    version: 'wc/v3',
});
export default WooCommerce;

export async function getUserInfo() {
    try {
        const response = await axios.get('')
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}
export async function fetchProducts() {
    try {
        console.log(123)
        const response = await WooCommerce.get('products');
        const products = response.data;
        return console.log(products);

    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// обновить даннные о пользователе, передаем его ID и данные
export async function UpdateUserInfo(userId, data) {
    try {
        const response = await WooCommerce.put(`customers/${userId}`, data);
        return console.log(response);

    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getCurrentUser(userId) {
    if(userId !== 1) {
        console.log('иди нахуй взломщик')
    } else {
        try {
            const response = await WooCommerce.get(`customers/${userId}`)
            return response.data
        } catch (error) {
            console.error('не возможно получить данные клиента:', error)
            return [];
        }
    }

}
