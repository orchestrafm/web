<template>
    <section class="hero is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container">
                <div class="column is-8 is-offset-2">
                    <h3 class="title has-text-white">Registration</h3>
                    <hr class="login-hr" />
                    <form>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    :class="{ 'is-danger': username.error }"
                                    type="text"
                                    placeholder="Username"
                                    autofocus
                                    v-model="username.value"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="username.error">
                                {{ username.error }}
                            </p>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    :class="{ 'is-danger': password.error }"
                                    type="password"
                                    placeholder="Password"
                                    v-model="password.value1"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-key"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    :class="{ 'is-danger': password.error }"
                                    type="password"
                                    placeholder="Confirm Password"
                                    v-model="password.value2"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-key"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="password.error">
                                {{ password.error }}
                            </p>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    :class="{ 'is-danger': email.error }"
                                    type="email"
                                    placeholder="Email"
                                    v-model="email.value"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="email.error">
                                {{ email.error }}
                            </p>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input
                                    class="input is-large"
                                    :class="{ 'is-danger': invite_code.error }"
                                    type="text"
                                    placeholder="Invite Code"
                                    v-model="invite_code.value"
                                />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                            <p class="help is-danger" v-if="invite_code.error">
                                {{ invite_code.error }}
                            </p>
                        </div>
                        <button class="button is-block is-danger is-large is-fullwidth" @click.prevent="register">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, reactive, useEffect } from "vue";
import api from "@/api";

export default {
    name: "Home",
    setup() {
        const username = reactive({
            value: "",
            error: ""
        });
        const password = reactive({
            value1: "",
            value2: "",
            error: ""
        });
        const email = reactive({
            value: "",
            error: ""
        });
        const invite_code = reactive({
            value: "",
            error: ""
        });

        const register = () => {
            // check all fields
            let isValid = false;

            if (!username.value) {
                username.error = "Username cannot be empty";
                isValid = false;
            } else {
                username.error = "";
            }

            // TODO: figure out how to properly clear error on password field
            if (password.value1 !== password.value2) {
                password.error = "Password must match";
                isValid = false;
            } else {
                password.error = "";
            }

            if (!password.value1) {
                password.error = "Password cannot be empty";
                isValid = false;
            } else {
                password.error = "";
            }

            const emailregex = /\S+@\S+\.\S+/;
            if (!emailregex.test(email.value)) {
                email.error = "Email address must be valid";
                isValid = false;
            } else {
                email.error = "";
            }

            if (!invite_code.value) {
                invite_code.error = "Invite Code cannot be empty";
                isValid = false;
            } else {
                isValid = true;
            }

            if (!isValid)
                return;

            try {
                api.auth.register(username.value, password.value1, email.value, invite_code.value);
            } catch (e) {
                // TODO: show error (e.g. wrong invite code)
            }
        };

        return {username, password, email, invite_code, register};
    }
};
</script>
