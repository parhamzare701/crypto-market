<template>
  <div class="coin__row">
    <div class="coin__row__price">
      <img :src="image" alt="crypto" class="coin__row__price__img" />
      <span class="coin__row__price__name" v-on:click="showMore = true">{{
        name
      }}</span>
      <span class="coin__row__price__symbol">{{ symbol }}</span>
      <span class="coin__row__price__amount"
        >${{ Intl.NumberFormat($t('coinDataValues')).format(price) }}</span
      >
      <span class="coin__row__price__volume"
        >${{ Intl.NumberFormat($t('coinDataValues')).format(volume) }}</span
      >
      <span
        v-if="priceChange < 0"
        class="coin__row__price__percent--red coin__row__price__percent"
        >{{Intl.NumberFormat($t('coinDataValues'), {style : 'percent', maximumFractionDigits: 2, minimumFractionDigits: 2}).format(priceChange / 100) }}</span
      >
      <span
        class="coin__row__price__percent--green coin__row__price__percent"
        v-else
        >{{ Intl.NumberFormat($t('coinDataValues'), {style : 'percent', maximumFractionDigits: 2, minimumFractionDigits: 2}).format(priceChange / 100)}}</span
      >

      <span class="coin__row__price__marketcap">
        Mkt Cap: ${{ Intl.NumberFormat($t('coinDataValues')).format(marketCap) }}
      </span>
    </div>
  </div>
  <MoreInfoModal
    v-if="showMore == true"
    :key="name"
    :name="name"
    :symbol="symbol"
    :price="price"
    :volume="volume"
    :marketCap="marketCap"
    :priceChange="priceChange"
    @setShowMoreToFalse="setShowMoreToFalse"
  />
</template>
<script setup>
import MoreInfoModal from "./MoreInfoModal";
import { defineProps, ref } from "vue";
defineProps({
  name: String,
  price: Number,
  symbol: String,
  marketCap: Number,
  priceChange: Number,
  image: String,
  volume: Number,
});
const showMore = ref(false);
const setShowMoreToFalse = () => {
  showMore.value = false
};
</script>