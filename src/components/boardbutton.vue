<template v-if="initialized">
	<router-link :to="toURL">
		<button class="button is-rounded" v-bind:style="newStyle" v-bind:class="newClass">
			{{name}} (LV. {{newRating}})
		</button> &nbsp;
	</router-link>
</template>

<script>
import axios from 'axios';

export default {
    name: "boardbutton",
	props: ["rating", "diff", "track_id", "board_id"],
	data() {
		return {
			initialized: false,
			
			newStyle: {},
			newClass: {},
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
					backgroundColor: "#6515ea",
					background: "#6515ea",
					color: "#ffff",
				};
			break;
			
			case 1:
				this.name = "Advanced";
				this.newClass = {'is-warning': true}
			break;
			
			case 2:
				this.name = "Exhaust";
				this.newClass = {'is-danger': true}
			break;
			
			case 3:
				this.name = "Maximum";
				this.newStyle = {
					backgroundColor: "linear-gradient(to right, #ECE9E6 0%, #FFFFFF  51%, #ECE9E6  100%)",
					background: "linear-gradient(to right, #ECE9E6 0%, #FFFFFF  51%, #ECE9E6  100%)",
					color: "#000000"
				};
			break;
			
			case 4:
				this.name = "Infinite";
				this.newStyle = {
					backgroundColor: "linear-gradient(to right, #FCF4C9, #FEE3E2, #FBCDF2, #E8BEFA, #abbfff, #bbf3c0)",
					background: "linear-gradient(to right, #FCF4C9, #FEE3E2, #FBCDF2, #E8BEFA, #abbfff, #bbf3c0)"
				}
			break;
			
			case 5:
				this.name = "Gravity";
				this.newStyle = {
					backgroundColor: "linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)",
					background: "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
					color: "black"
				}
			break;
			
			case 6:
				this.name = "Heavenly";
				this.newStyle = {
					backgroundColor: "linear-gradient(90deg, rgba(141,255,255,1) 0%, rgba(206,255,255,1) 100%)",
					background: "linear-gradient(90deg, rgba(141,255,255,1) 0%, rgba(206,255,255,1) 100%)",
					color: "#000000"
				}
			break;
			
			case 7:
				this.name = "Vivid";
				this.newStyle = {
					backgroundColor: "linear-gradient(90deg, #ee9ca7 0%, #ffdde1  51%, #ee9ca7  100%)",
					background: "linear-gradient(90deg, #ee9ca7 0%, #ffdde1  51%, #ee9ca7  100%)",
					color: "black"
				}
			break;
			
			default:
				return;
		}
		
		this.initialized = true;
	}
}
</script>