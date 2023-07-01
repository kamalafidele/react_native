import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.1.66:9000/api",
    timeout: 5000
});

export default apiClient;