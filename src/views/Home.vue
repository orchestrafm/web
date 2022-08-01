<template>
    <div class="hero is-danger">
        <div class="hero-body">
            <div class="container has-text-centered">
                <img src="@/assets/logo_verylarge_cropped.webp" />
                <h2
                    class="subtitle slogan"
                >A free, open source platform for all your favorite rhythm game types.</h2>
                <div class="columns">
                    <div class="column">
                        <a class="button is-large is-github" href="https://github.com/OrchestraFM">
                            <span class="icon is-medium">
                                <i class="fab fa-github" />
                            </span>
                            <span>View on GitHub</span>
                        </a>
                    </div>
                    <div class="column">
                        <a
                            class="button is-large is-twitter"
                            href="https://twitter.com/OrchestraFM"
                        >
                            <span class="icon is-medium">
                                <i class="fab fa-twitter" />
                            </span>
                            <span>Follow Us on Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>&nbsp;</div>
    <div class="columns" v-for="part in texts" :key="part.title">
        <div class="column is-half is-offset-one-quarter">
            <h3 class="title has-text-centered has-text-danger">{{ part.title }}</h3>
            <p class="content has-text-centered is-medium">{{ part.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        texts: [
            {
                title: "Welcome to Orchestra FM",
                desc: "The only rhythm game platform built from the ground up with creators in mind. A place where everyone is welcomed, newcomers or experienced players alike. Anyone and everyone should feel at home."
            }, {
                title: "Currently in Early Access!",
                desc: "We are in the Pre-Alpha phase of the service, a lot of things still aren't finalized, but we are open for basic usage!"
            }, {
                title: "Looking for Help!",
                desc: "If you are experienced in C++, Go, JavaScript, Vue 2/3, or similar technologies, we could use some volunteer help!"
            }
        ]
    })
};
</script>

<style scoped>
.is-github {
    background-color: #111;
    color: #fff;
    border-color: transparent;
}

.is-discord {
    background-color: rgb(114, 137, 218);
    color: #fff;
    border-color: transparent;
}

.is-twitter {
    background-color: #209cee;
    color: #fff;
    border-color: transparent;
}
</style>
