<template>
	<div v-if="initialized" class="card is-horizontal">
		<div class="card-image is-horizontal">
			<figure class="image is-160x160 is-horizontal">
				<img :key="this.boardJacket" v-bind:src="this.boardJacket" alt="Placeholder image" style="width:160px;height:160px;"/>
			</figure>
		</div>
		
		<div class="card-content is-horizontal">
	
			<div class="media-content">
				<p class="title is-4">{{title}}</p>
				<p class="subtitle is-6">{{artists}}</p>
			</div>
	
			<div class="content is-horizontal">
	
				<div> &nbsp; </div>
				<div> &nbsp; </div>
				<div> &nbsp; </div>
				<div> &nbsp; </div>
				
				<div class="container columns">
					<div v-for="board in boardList" class="column field has-addons">
						<boardbutton v-bind:rating="board.difficulty_rating" v-bind:diff="board.difficulty_name" v-bind:track_id="board.track_id" v-bind:board_id="board.id"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import boardbutton from "@/components/boardbutton.vue";
import api from "@/api";
import axios from 'axios';

export default {
    name: "trackcard",
	props: ["id", "title", "artists"],
	components: {
		boardbutton
    },
	data() {
		return {
			initialized: false,
			boardList: [],
			boardJacket: "https://via.placeholder.com/160x160.webp"
		};
	},
	async created() {
		let boards = await api.board.getFromTrack(this.id);
		this.boardList = await boards.sort(function (propName) {
			return function(a, b) {
				if (a[propName] > b[propName]) {
					return 1;
				} else if (a[propName] < b[propName]) {
					return -1;
				}
				return 0;
			}
		}("difficulty_rating"));
		this.boardJacket = this.boardList[0].jacket;
		
		this.initialized = true;
	}
}
</script>