<template>

    <div class="page c-text">
        <!--<Menu/>-->

        <Jumbotron>
            <div slot="player">
                <LastEpisode></LastEpisode>
            </div>
            <div slot="info">
                <h1 class="title info__title">
                    The First Bit IT Show <i class="fa fa-podcast"></i> Podcast
                </h1>
                <p class="subtitle info__subtitle">
                    Позновательно развлекательное шоу про программирование, IT&nbsp;в&nbsp;жизни и&nbsp;жизни в&nbsp;IT
                </p>
            </div>
        </Jumbotron>


        <div class="o-grid">
            <div class="o-grid__cell">
                <div class="team">
                    <h2>Team:</h2>
                    <div class="team-list">
                        <div class="team-list__item">
                            <div class="c-avatar u-super team-list__item-avatar">
                                <img src="/frontman.jpeg" class="c-avatar__img" alt="">
                            </div>
                            <a href="https://medium.com/@frontman/" class="c-link">
                                Alexander Mayorov
                            </a>
                        </div>
                        <div class="team-list__item">
                            <div class="c-avatar u-super team-list__item-avatar">
                                <img src="/jeka.jpg" class="c-avatar__img" alt="">
                            </div>
                            <a href="http://jeka.ru" class="c-link">Evgeny Fomin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div class="links"></div>
    </div>


</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import Menu from '~/components/Menu.vue'
  import Jumbotron from '~/components/Jumbotron.vue'
  import LastEpisode from '~/components/LastEpisode.vue'

  export default {
    components: {
      AppLogo,
      Menu,
      Jumbotron,
      LastEpisode
    }
  }
</script>

<style scoped>

    .info {

    }

    .info__title {
        font-size: 40px;
        line-height: 44px;
        font-weight: normal;
        color: #5DE68A;
        font-family: Georgia, Cambria, Times New Roman, Times, serif;
        margin: 0;
        padding: 0;
    }

    .info__subtitle {
        font-weight: 300;
        font-size: 18px;
        color: #888;
    }

    .links {
        padding-top: 15px;
    }

    .team{
        text-align: center;
    }
    .team-list {
        display: flex;
        justify-content: center;
    }

    .team-list__item {
        padding: 5px 10px;
        display:flex;
        align-items: center;
    }

    .team-list__item-avatar{
        margin-right: 10px;
    }



</style>
