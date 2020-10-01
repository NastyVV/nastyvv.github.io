<template>
  <div class="main-menu">
      <router-link to="/"> <div class="logo"></div> </router-link>
    <div class="menu">
      <ul>
        <li><router-link to="/theory">Теория</router-link></li>
        <li><router-link to="/practice">Практика</router-link></li>
        <li><router-link to="/testik">Тесты</router-link></li>
        <li><router-link to="/library">Медиатека</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Menu',

}
</script>
