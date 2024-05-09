import { $authHost } from ".";

export const createBasket = async (userId) => {
    const { data } = await $authHost.post('api/basket', { userId });
    console.log(data)
    return data.basketId;
}
export const addItemToBasket = async (basketId, itemId) => {
    const { data } = await $authHost.post('api/basket/item', { basketId, itemId });
    return data;
}

export const removeItemFromBasket = async (basketItemId) => {
    const { data } = await $authHost.delete(`api/basket/item/${basketItemId}`);
    return data;
}
export const fetchBasket = async () => {
    const { data } = await $authHost.get('basket/getone')
    return data
}

export const fetchBasketItems = async (basketId) => {
    const { data } = await $authHost.get(`api/basket/${basketId}`);
    return data;
}
