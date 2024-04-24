import { $authHost, $host } from ".";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type', {})
    return data;
}
export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand);
    return data;
}
export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand', {})
    return data;
}
export const createItem = async (items) => {


    const { data } = await $authHost.post('api/item', items);


    return data;
}

export const fetchItems = async (typeId, brandId, page, limit = 6) => {
    const { data } = await $host.get('api/item', { params: { typeId, brandId, page, limit } })
    return data;
}
export const fetchItem = async (id) => {
    const { data } = await $host.get('api/item/' + id, { id })
    return data;
}