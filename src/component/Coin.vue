<template>
  <div className="coin__row">
    <div className="coin__row__price">
      <img :src="image" alt="crypto" className="coin__row__price__img" />
      <span
        className="coin__row__price__name"
        >{{ name }}</span
      >
      <span className="coin__row__price__symbol">{{ symbol }}</span>
      <span className="coin__row__price__amount"
        >${{ price.toLocaleString() }}</span
      >
      <span className="coin__row__price__volume"
        >${{ volume.toLocaleString() }}</span
      >
      <span
        v-if="priceChange < 0"
        className="coin__row__price__percent--red coin__row__price__percent"
        >{{ priceChange.toFixed(2) }}%</span
      >
      <span
        className="coin__row__price__percent--green coin__row__price__percent"
        v-else
        >{{ Number(priceChange).toFixed(2) }}%</span
      >

      <span className="coin__row__price__marketcap">
        Mkt Cap: ${{ marketCap.toLocaleString() }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Coin",
  props: {
    price: Number,
    volume: Number,
    image: String,
    name: String,
    symbol: String,
    marketCap: Number,
    priceChange: Number,
  },
};
</script>