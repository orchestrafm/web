<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                Copyright &#169; {{ new Date().getFullYear() }}, Orchestra FM. Source Code is licensed under GNU Affero General Public License 3.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer",
};
</script>

<style scoped>
.footer {
    background-color: #363636;
}
</style>
