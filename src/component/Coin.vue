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
    :key="this.name"
    :name="this.name"
    :symbol="this.symbol"
    :price="this.price"
    :volume="this.volume"
    :marketCap="this.marketCap"
    :priceChange="this.priceChange"
    @setShowMoreToFalse="setShowMore"
  />
</template>
<script>
import MoreInfoModal from "./MoreInfoModal.vue";
export default {
  name: "Coin",
  components: { MoreInfoModal },
  props: {
    price: Number,
    volume: Number,
    image: String,
    name: String,
    symbol: String,
    marketCap: Number,
    priceChange: Number,
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods : {
    setShowMore(){
      this.showMore = false
    }
  }
};
</script>