<template>
	<p v-if="initialized" class="control">
		<router-link :to="toURL">
			<button class="button is-rounded" :key="this.newStyle" v-bind:style="this.newStyle">
				{{name}} ({{newRating}})
			</button>
		</router-link>
	</p>
</template>

<script>
import axios from 'axios';

export default {
    name: "boardbutton",
	props: ["rating", "diff", "track_id", "board_id"],
	data() {
		return {
			initialized: false,
			
			newClass: "",
			newStyle: {},
			newRating: "",
			name: "",
			toURL: ""
		};
	},
	async created() {
		this.toURL = "/track/"+this.track_id+"/board/"+this.board_id;
		if (this.rating >= 21) {
			this.newRating = "20+";
		} else {
			this.newRating = this.rating;
		}
		
		switch (this.diff) {
			case 0:
				this.name = "Novice";
				this.newStyle = {
					backgroundColor: "#6515ea;",
					color: "#fffff;"
				};
			break;
			
			case 1:
				this.name = "Advanced";
			break;
			
			case 2:
				this.name = "Exhaust";
			break;
			
			case 3:
				this.name = "Maximum";
			break;
			
			case 4:
				this.name = "Infinite";
			break;
			
			case 5:
				this.name = "Gravity";
			break;
			
			case 6:
				this.name = "Heavenly";
			break;
			
			case 7:
				this.name = "Vivid";
			break;
			
			default:
				return;
		}
		
		this.initialized = true;
	}
}
</script>