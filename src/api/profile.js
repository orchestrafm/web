import axios from 'axios';

const baseurl = "https://orchestra.fm/api/v0"

export default {
    async get(id) {
        const resp = await axios.get(baseurl + "/profile/" + id);
		
		return await resp.data;
    }
}
