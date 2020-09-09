<template>
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                Home
            </router-link>

            <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                @click="toggleNavbar"
                v-bind:class="{ 'is-active': open }"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/play" class="navbar-item">Play</router-link>
                <router-link to="/tracks" class="navbar-item">Tracks</router-link>
                <router-link to="/rankings" class="navbar-item">Rankings</router-link>
                <router-link to="/community" class="navbar-item">Community</router-link>
                <router-link to="/help" class="navbar-item">Help</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/register" class="button is-light">Sign up</router-link>
                        <router-link to="/login" class="button is-light">Log in</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref, reactive } from "vue";

export default {
    name: "Navbar",
    setup() {
        // open close navbar on mobile
        const open = ref(false);
        
        const toggleNavbar = () => {
            console.log("toggled");
            open.value = !open.value;
        }

        return { open, toggleNavbar };
    }
}
</script>