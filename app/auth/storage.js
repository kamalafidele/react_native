import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (e) {}
}

const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    } catch (e) {
        return null;
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (e) {}
}

export default { storeToken, getToken, removeToken };
