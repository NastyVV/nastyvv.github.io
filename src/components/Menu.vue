<template>
  <div class="main-menu">
    <div class="logo">

    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/theory">Теория</router-link></li>
        <li><router-link to="/practice">Практика</router-link></li>
        <li><router-link to="/tests">Тесты</router-link></li>
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
