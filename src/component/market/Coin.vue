<template>
  <div class="coin__row">
    <div class="coin__row__price">
      <img :src="image" alt="crypto" class="coin__row__price__img" />
      <span class="coin__row__price__name" v-on:click="showMore = true">{{
        name
      }}</span>
      <span class="coin__row__price__symbol">{{ symbol }}</span>
      <span class="coin__row__price__amount"
        >${{ price.toLocaleString() }}</span
      >
      <span class="coin__row__price__volume"
        >${{ volume.toLocaleString() }}</span
      >
      <span
        v-if="priceChange < 0"
        class="coin__row__price__percent--red coin__row__price__percent"
        >{{ priceChange.toFixed(2) }}%</span
      >
      <span
        class="coin__row__price__percent--green coin__row__price__percent"
        v-else
        >{{ Number(priceChange).toFixed(2) }}%</span
      >

      <span class="coin__row__price__marketcap">
        Mkt Cap: ${{ marketCap.toLocaleString() }}
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