<template>
  <div class="logo-container">
    <div class="logo">
      <img src="/logo.jpg" class="logo__image"/>
    </div>
  </div>
</template>

<style scoped>
  .logo-container{
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 260px;
    height: 260px;
    border-radius: 30px;
    border: 10px solid #DDD;
    padding: 10px;
  }

  .logo__image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
  }
</style>
