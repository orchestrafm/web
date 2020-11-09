import axios from 'axios';

const baseurl = "https://orchestra.fm/api/v0"

export default {
    async getOrdinally(track, board, limit, offset) {
        const resp = await axios.get(baseurl + "/score?track=" + track + "&board=" + board + "&limit=" + limit + "&offset=" + offset);
		
		return await resp.data;
    }
}
