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
                        <a class="button is-large is-discord" href="https://discord.gg/EsZaJVN">
                            <span class="icon is-medium">
                                <i class="fab fa-discord" />
                            </span>
                            <span>Join Us on Discord</span>
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
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <div class="field has-addons">
                            <div class="control">
                                <input
                                    class="input is-large"
                                    type="email"
                                    placeholder="example@example.com"
                                    value
                                />
                            </div>
                            <div class="control">
                                <button
                                    class="button is-success is-large button"
                                    tabindex="0"
                                    type="submit"
                                >Request Early Access</button>
                            </div>
                        </div>
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
                title: "For The Players",
                desc: "All playstyles have a home here, we don't want to leave any one game style or type behind. At the beginning, we will have a heavy focus on the \"Effective\" game mode type popularized by Sound Voltex. You'll be able to play this rhythm game type by using Unnamed SDVX Clone, and hopefully in the future NeuroSonic. Along the way, we will include other game types, and other various ways to play."
            }, {
                title: "For The Designers",
                desc: "If your the creative type, then you'll probably be interested in working on the platform, or in the community. Whether you are a musician, writing music for the masses, a charter, designing charts for players to enjoy, or a programmer, wanting to help improve the platform by providing new features or bugfixes, there is something for everyone to create."
            }, {
                title: "Stay Tuned!",
                desc: "We are currently in pre-alpha stages and are looking to partner with charters, musicians, and programmers of all-kinds. If you think you have something valuable to provide to the team, or just looking to contribute in general, get in contact with the current development team on Discord, and we'll see if we can fit you in!"
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
