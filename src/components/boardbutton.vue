<template>
	<p class="control">
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
				return;
			break;
			
			case 1:
				this.name = "Advanced";
				return;
			break;
			
			case 2:
				this.name = "Exhaust";
				return;
			break;
			
			case 3:
				this.name = "Maximum";
				return;
			break;
			
			case 4:
				this.name = "Infinite";
				return;
			break;
			
			case 5:
				this.name = "Gravity";
				return;
			break;
			
			case 6:
				this.name = "Heavenly";
				return;
			break;
			
			case 7:
				this.name = "Vivid";
				return;
			break;
			
			default:
				return;
		}
	}
}
</script>