import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";

import Community from "./views/Community.vue";
import Tracks from "./views/Tracks.vue";
import Help from "./views/Help.vue";
import Rankings from "./views/Rankings.vue";
import Play from "./views/Play.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Board from "./views/Board.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/play",
        component: Play
    },
    {
        path: "/tracks",
        component: Tracks
    },
    {
        path: "/rankings",
        component: Rankings
    },
    {
        path: "/community",
        component: Community
    },
    {
        path: "/help",
        component: Help
    }
	{
		path: "/track/:trackId/board/:boardId",
		component: Board
	}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
