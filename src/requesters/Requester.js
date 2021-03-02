import Axios from 'axios';

export default class Requester {

    async checkSever() {
        try {
            const res = await Axios.get('/init');
            return res.data;
        } catch (error) {
            return 'Make Sure sever is running'
        }
    }

    async getRequest() {
        try {
            const res = await Axios.get('/test');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async postRequest(myText) {
        try {
            const res = await Axios.post(`/post/${myText}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

}