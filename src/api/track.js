import axios from 'axios';

const baseurl = "https://orchestra.fm/api/v0"

export default {
	async get(id) {
        const resp = await axios.get(baseurl + "/track/" + id);
		
		return await resp.data;
    },
	async getCount() {
		const resp = await axios.get(baseurl + "/track");
		
		return await resp.data.count;
	},
    async getByRecents(amount, offset) {
		if (offset == null) {
			offset = 0;
		}
        const resp = await axios.get(baseurl + "/track/recent/" + amount + "?offset="+offset);
		
		return await resp.data;
    },
}
