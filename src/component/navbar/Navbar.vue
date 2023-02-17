<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__container__company">
        <router-link class="navbar__container__company__name" to="/"
          >Crypto Market</router-link
        >
      </div>
      <div class="navbar__container__links">
        <router-link class="navbar__container__links__link" to="/">{{
          $t("marketLink")
        }}</router-link>
        <router-link class="navbar__container__links__link" to="/About">{{
          $t("aboutLink")
        }}</router-link>
      </div>
      <LanguageSwitcher />
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup>
import LanguageSwitcher from '../switcher/LanguageSwitcher.vue';
</script>

