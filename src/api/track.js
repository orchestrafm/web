import axios from 'axios';

const baseurl = "https://orchestra.fm/api/v0"

export default {
    async getByRecents(amount) {
        const resp = await axios.get(baseurl + "/track/recent/" + amount);
		
		return await resp.data;
    },
    async get(id) {
        const resp = await axios.get(baseurl + "/track/" + id);
		
		return await resp.data;
    }
}
