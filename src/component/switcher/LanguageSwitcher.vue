<template>
  <div class="switcher" :class="$t('switcherClass')">
      <button class="switcher__btn" @click="$i18n.locale = $t('langSwitcher')">{{ $t('langSwitcher') }}</button>
  </div>
</template>