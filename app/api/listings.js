import apiClient from "./client";

const endpoint = '/listings';

const getListings = () => apiClient.get(endpoint);

const addListing = listing => {
    const data = new FormData();

    data.append('title', listing.title);
    data.append('id', listing.id);
    data.append('price', listing.price);
    data.append('image', { name: listing.image.name, type: listing.image.type, uri: listing.image.uri });

    return apiClient.post(endpoint, data);
}

export default {
    getListings,
    addListing,
};
