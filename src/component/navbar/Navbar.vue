<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__container__menu"></div>
      <div class="navbar__container__company">
        <router-link class="navbar__container__company__name" to="/about"
          >Crypto Market</router-link
        >
      </div>
      <div class="navbar__container__links">
        <router-link class="navbar__container__links__link" to="/Market"
          >Market</router-link
        >
        <router-link class="navbar__container__links__link" to="/About"
          >About</router-link
        >
      </div>
    </div>
  </div>
</template>