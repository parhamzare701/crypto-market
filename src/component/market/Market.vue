<template>
  <div class="market">
    <div class="market__container">
      <h1 class="market__container__title">Crypto Market</h1>
      <Coin 
      v-for="data in coinData"
      :key="data.id"
      :name="data.name"
      :price="data.current_price"
      :image="data.image"
      :symbol="data.symbol"
      :volume="data.total_volume"
      :marketCap="data.market_cap"
      :priceChange="data.price_change_percentage_24h"/>
    </div>
  </div>
</template>
<script setup>

import { ref, onMounted } from "vue";
import Coin from "./Coin";
const coinData = ref([]);
onMounted(async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
  );
  const json = await response.json();
  coinData.value = json;
});
</script>