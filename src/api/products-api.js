import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6657397f9f970b3b36c8732b.mockapi.io/api/v1',
});

export const productsRequest = async (page = 1) => {
    const response = await instance.get('/advert', {
        params: {
            page,
            limit: 4,
        },
    });
    console.log(response.data);
    return response.data;
};

export const filterProductsRequest = async ({ type, equipments }) => {
    const { data } = await instance.get('/advert', {
        params: {
            form: type,
        },
    });

    const filteredData = data.filter((product) => {
        return equipments.every((equipment) => {
            if (equipment === 'automatic') {
                return product.transmission === 'automatic';
            }
            return product.details[equipment] > 0;
        });
    });
    console.log(filteredData);
    return filteredData;
};
