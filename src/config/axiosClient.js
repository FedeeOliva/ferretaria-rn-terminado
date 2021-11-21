import axios from 'axios';

const Axios = axios.create({
	baseURL : 'http://192.168.0.16:4000',
})

export default Axios;