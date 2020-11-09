<template>

	<div class="container is-max-desktop">
	
		<section class="hero is-medium is-light has-bg-img">
			<img class="is-bg-img" style="visibility: hidden; display: none;"/>
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title" style="color: white; -webkit-text-stroke-width: 1.5px; -webkit-text-stroke-color: black;">{{songTitle}}</h1>
					<h2 class="subtitle" style="color: white; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;">{{songArtists}}</h2>
				</div>
			</div>
		</section>
	
		<div class="tabs is-centered">
			<ul>
				<li v-for="board in boards" style="color: white; background-color: white;"><router-link :to="board.url">{{board.diff}} ({{board.rating}})</router-link></li>
			</ul>
		</div>
		
		<table class="table">
		
			<thead>
				<tr>
					<th>Rank</th>
					<th>Grade</th>
					<th>Player</th>
					<th><abbr title="Score">Scr</abbr></th>
					<th>Rate</th>
					<th><abbr title="Combo">Com</abbr></th>
					<th><abbr title="Accuracy">Acc</abbr></th>
					<th><abbr title="Criticals">Crits</abbr></th>
					<th>Nears</th>
					<th><abbr title="Errors">Errs</abbr></th>
				</tr>
			</thead>
			
			<tfoot>
				<tr>
					<th>Rank</th>
					<th>Grade</th>
					<th>Player</th>
					<th><abbr title="Score">Scr</abbr></th>
					<th>Rate</th>
					<th><abbr title="Combo">Com</abbr></th>
					<th><abbr title="Accuracy">Acc</abbr></th>
					<th><abbr title="Criticals">Crits</abbr></th>
					<th>Nears</th>
					<th><abbr title="Errors">Errs</abbr></th>
				</tr>
			</tfoot>
			
			<tbody v-for="(score, i) in scores">
				<th>{{i + 1}}</th>
				<th>{{score.grade}}</th>
				<th>{{this.playerNames[i]}}</th>
				<th>{{score.score}}</th>
				<th>{{score.rate * 100}}%</th>
				<th>{{score.combo}}</th>
				<th>{{score.accuracy}}%</th>
				<th>{{score.criticals}}</th>
				<th>{{score.nears}}</th>
				<th>{{score.errors}}</th>
			</tbody>
		</table>
	
	</div>
	
</template>

<script>
import axios from 'axios';
import api from "@/api";
import $ from "jquery";

export default {
    name: "Board",
	data() {
		return {
			scores: [],
			playerNames: [],
			songTitle: "Uninitalized",
			songArtists: "Uninitalized",
			boardList: [],
			boards: []
		};
	},
	async created() {
		this.scores = await api.score.getOrdinally(this.$route.params.trackId, this.$route.params.boardId, 50, 0);
		
		// Array edits and more
		for (let i = 0; i < this.scores.length; i++) {
			// Get player names
			let profile = await api.profile.get(this.scores[i].profile);
			this.playerNames[i] = profile.name;
			
			// Some values might return empty because their value is 0, so default them
			if (this.scores[i].score == null) {
				this.scores[i].score = 0;
			} else {
				let score_parts = this.scores[i].score.toString().split(".");
				score_parts[0] = score_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				this.scores[i].score = score_parts.join(".");
			}
			
			if (this.scores[i].rate == null) {
				this.scores[i].rate = 0;
			}
			
			if (this.scores[i].combo == null) {
				this.scores[i].combo = 0;
			}
			
			if (this.scores[i].accuracy == null) {
				this.scores[i].accuracy = 0;
			}
			
			if (this.scores[i].criticals == null) {
				this.scores[i].criticals = 0;
			}
			
			if (this.scores[i].nears == null) {
				this.scores[i].nears = 0;
			}
			
			if (this.scores[i].errors == null) {
				this.scores[i].errors = 0;
			}
		}
		
		// Retrieve song title and artists
		let track = await api.track.get(this.$route.params.trackId);
		this.songTitle = track.title;
		this.songArtists = track.artists;
		
		// Set hero background image
		let boards = await api.board.getFromTrack(this.$route.params.trackId);
		this.boardList = boards.sort(function (propName) {
			return function(a, b) {
				if (a[propName] > b[propName]) {
					return 1;
				} else if (a[propName] < b[propName]) {
					return -1;
				}
				return 0;
			}
		}("difficulty_rating"));
		
		let bgImg = ""
		for (let i = 0; i < this.boardList.length; i++) {
			if (this.boardList[i].id == this.$route.params.boardId) {
				bgImg = this.boardList[i].jacket;
				break;
			}
		}
		
		$('.has-bg-img').each(function() {
			var $img = $(this).find('img.is-bg-img').first();
			if ($img) {
				$(this).css('background-image', 'url(' + bgImg + ')');
				$(this).css('background-size', 'cover');
				$(this).css('background-position', 'center');
				$(this).css('background-repeat', 'no-repeat');
				$(this).css('height', '50%');
				$(this).css('position', 'relative');
				$img.remove();
			}
		});
		
		// Assemble tab information (rating, difficulty name, url)
		for (let i = 0; i < this.boardList.length; i++) {
			let url = "/track/"+this.boardList[i].track_id+"/board/"+this.boardList[i].id;
			
			switch (this.boardList[i].difficulty_name) {
				case 0:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Novice",
						url: url
					});
					continue;
				break;
				
				case 1:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Advanced",
						url: url
					});
					continue;
				break;
				
				case 2:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Exhaust",
						url: url
					});
					continue;
				break;
				
				case 3:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Maximum",
						url: url
					});
					continue;
				break;
				
				case 4:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Infinite",
						url: url
					});
					continue;
				break;
				
				case 5:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Gravity",
						url: url
					});
					continue;
				break;
				
				case 6:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Heavenly",
						url: url
					});
					continue;
				break;
				
				case 7:
					this.boards.push({
						rating: this.boardList[i].difficulty_rating,
						diff: "Vivid",
						url: url
					});
					continue;
				break;
				
				default:
					continue;
			}
		}
	}
}
</script>