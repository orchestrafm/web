<template>
	<div class="container is-fluid">
		<div class="columns is-multiline">
			<div v-for="track in trackList" class="column is-half">
				<trackcard v-if="initialized" :key="track.id" v-bind:id="track.id" v-bind:title="track.title" v-bind:artists="track.artists"/>
			</div>
		</div>
		
		<div> <span> &nbsp; </span> </div>
		
	</div>
	
	<nav class="pagination is-centered" role="navigation" aria-label="pagination">
		<router-link :to="'/tracks/' + (parseInt(this.$route.params.page) - 1)" class="pagination-previous" style="background-color: white; color: black;">
			Previous
		</router-link>
		<router-link :to="'/tracks/' + (parseInt(this.$route.params.page) + 1)" class="pagination-next" style="background-color: white; color: black;">
			Next Page
		</router-link>
		<ul class="pagination-list">
			<li v-for="n in pages">
				<router-link :to="'/tracks/' + n">
					<a v-bind:class="isCurrentForClass(n)" v-bind:style="isCurrentForStyle(n)">{{n}}</a>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import trackcard from "@/components/trackcard.vue";
import api from "@/api";

export default {
    name: "Tracks",
	data() {
		return {
			initialized: false,
			
			pages: 0,
			trackList: []
		};
	},
	async beforeCreate() {
		const cardsPerPage = 8;
		const currentPage = this.$route.params.page;
		const totalCards = await api.track.getCount();
		const numberOfPages = Math.ceil(totalCards / 8);
		const offset = cardsPerPage * (currentPage - 1);
		
		this.trackList = await api.track.getByRecents(cardsPerPage, offset);
		this.pages = numberOfPages;
		
		this.initialized = true;
	},
	components: {
        trackcard
    },
	methods: {
		isCurrentForClass(page) {
			return {
				'pagination-link': true,
				'is-current': (page == this.$route.params.page)
			};
		},
		isCurrentForStyle(page) {
			if (page == this.$route.params.page) {
				return null;
			}
			
			return {
				backgroundColor: "white",
				background: "white",
				color: "black"
			};
		}
	}
}
</script>