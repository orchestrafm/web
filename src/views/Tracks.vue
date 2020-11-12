<template>
	<div class="container is-fluid">
		<div class="columns is-multiline">
			<div v-for="track in trackList" class="column is-half">
				<trackcard v-if="initialized" :key="track.id" v-bind:id="track.id" v-bind:title="track.title" v-bind:artists="track.artists"/>
			</div>
		</div>
	</div>
</template>

<script>
import trackcard from "@/components/trackcard.vue";
import api from "@/api";

export default {
    name: "Tracks",
	data() {
		return {
			initialized: false,
			trackList: []
		};
	},
	async beforeCreate() {
		this.trackList = await api.track.getByRecents(8);
		
		this.initialized = true;
	},
	components: {
        trackcard
    }
}
</script>