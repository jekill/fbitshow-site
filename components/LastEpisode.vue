<template>
    <div class="last-episode">
        <div class="last-episode__head">Последний выпуск:</div>
        <div class="last-episode__title">
            {{episodeName}}
        </div>
        <div class="last-episode__player">
            <audio class="episode__player" src="/audio/000-the-first-bit-it-show.mp3" controls style="width: 100%;"></audio>
        </div>
        <div class="last-episode__links">
            <a href="#" class="c-button u-small last-episode__btn-itunes"><i class="fa fa-apple"></i> iTunes</a>
            <a :href="episodeFile" class="c-button c-button--ghost u-small last-episode__btn-download"><i class="fa fa-download"></i> Скачать</a>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'last-episode',
    components: {
    },

    methods: {
      episodeMusicParams: () => {
        return {
          title: 'qwe',
          url: 'qwe2'
        }
      }
    },

    data() {
      return {
        episodeFile: '/audio/000-the-first-bit-it-show.mp3',
        episodeName: 'Выпуск #0: Знакомство, легкое общение, истории из жизни, безопасность.'
      }
    }
  }
</script>

<style scoped>
    .last-episode {
        color: #FFF;
    }

    .last-episode__head {
        text-transform: uppercase;
        color: #888;
        font-size: 15px;
        margin: 20px 0 0;
    }

    .last-episode__title {
        font-size: 20px;
        color: #DDD;
        margin: 0 0 10px 0;
    }

    .last-episode__player {

    }

    .last-episode__links {
        margin: 30px 0 0 0;

    }

    .last-episode__btn-itunes, .last-episode__btn-download {
        color: #FFF;
    }

    .last-episode__btn-itunes {
        margin-right: 20px;
    }

</style>