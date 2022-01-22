import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333' /*caso usando smartphone via wifi ou usb usar ip da máquina*/
});

export default api;