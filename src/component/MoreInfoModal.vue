<template>
  <div class="moreinfo" @click="$emit(`setShowMoreToFalse`)">
    <div class="moreinfo__container" @click="(e)=>{e.stopPropagation()}">
      <span class="moreinfo__container__name">{{ name }}</span>
      <span class="moreinfo__container__symbol">{{
        symbol.toUpperCase()
      }}</span>
      <span class="moreinfo__container__price"
        ><span class="moreinfo__container__price__text">Price : </span>${{
          price
        }}</span
      >
      <span class="moreinfo__container__volume"
        ><span class="moreinfo__container__volume__text">Volume : </span>${{
          volume
        }}</span
      >
      <span
        v-if="priceChange < 0"
        class="
          moreinfo__container__pricechange--red moreinfo__container__pricechange
        "
        ><span class="moreinfo__container__pricechange__text"
          >Price Change : </span
        >{{ priceChange.toFixed(2) }}%</span
      >
      <span
        v-else
        class="
          moreinfo__container__pricechange--green
          moreinfo__container__pricechange
        "
        ><span class="moreinfo__container__pricechange__text"
          >Price Change : </span
        >{{ Number(priceChange).toFixed(2) }}%</span
      >

      <span class="moreinfo__container__marketcap"
        ><span class="moreinfo__container__marketcap__text">Mkt Cap: </span>${{
          marketCap
        }}</span
      >
      <button class="moreinfo__container__btn" @click="$emit(`setShowMoreToFalse`)">
        Close
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    price: Number,
    symbol: String,
    marketCap: Number,
    volume: Number,
    priceChange: Number,
  }
};
</script>
