import axios from 'axios';

const baseurl = "https://orchestra.fm/api/v0"

export default {
    async getFromTrack(id) {
        const resp = await axios.get(baseurl + "/board/track/" + id);
		
		return await resp.data;
    }
}
