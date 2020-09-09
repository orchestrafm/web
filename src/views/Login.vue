<template>
    <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 is-offset-2">
                    <h3 class="title has-text-white">Login</h3>
                    <hr class="login-hr" />
                    <form>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    type="text"
                                    placeholder="Username"
                                    autofocus
                                    v-model="username"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    type="password"
                                    placeholder="Password"
                                    v-model="password"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-key"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input type="checkbox" v-model="remember" />
                                Remember me
                            </div>
                        </div>
                        <button class="button is-block is-danger is-large is-fullwidth" @click.prevent="signIn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import api from "@/api";

export default {
    name: "Home",
    setup() {
        const username = ref("");
        const password = ref("");
        const remember = ref(false);

        const signIn = () => {
            console.log(api.auth.login(username.value, password.value));
        };

        return {username, password, remember, signIn};
    }
};
</script>
