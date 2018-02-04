<template>
    <div class="jumbotron o-grid o-grid--center">
        <div class="o-grid__cell jumbotron__left">
            <slot name="player" class="o-grid__cell"></slot>
        </div>
        <div class="o-grid__cell jumbotron__right">
            <slot name="info"></slot>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Jumbotron'
  }
</script>
<style scoped>
    .jumbotron {
        height: 400px;
        background-color: #000;
        background-image: url("/jumbbg.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .jumbotron {
    }

    .jumbotron__left {
        padding-left: 5rem;
    }

    .jumbotron__right {
        padding-right: 5rem;
    }
</style>
