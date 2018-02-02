<template>
    <section class="container">
        <div>
            <app-logo/>
            <h1 class="title">
                The First Bit IT Show
            </h1>
            <h2 class="subtitle">
                Podcast <i class="fa fa-podcast"></i>
            </h2>
            <div class="links"></div>
            <div class="team">
                <h2>Team:</h2>
                <div class="team-list">
                    <div class="team-list__item"><a href="https://medium.com/@frontman/">Alexander Mayorov</a></div>
                    <div class="team-list__item"><a href="http://jeka.ru">Evgeny Fomin</a></div>
                </div>


            </div>
        </div>
    </section>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'

    export default {
        components: {
            AppLogo
        }
    }
</script>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }

    .team-list {
        display: flex;
        justify-content: center;
    }

    .team-list__item {
        padding: 5px 10px;
    }
</style>
