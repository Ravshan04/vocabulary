<template>
  <section class="favorite">
    <div class="favorite__head">
      <h2 class="favorite__title">Favorites</h2>
    </div>

    <ul class="favorite__list">
      <li v-for="(favorite, index) in favorites" :key="index" class="favorite__item">
        <div>
          <div class="favorite__box">
            <p class="favorite__text">
              <img src="@/assets/img/united-kingdom.png" alt="flag" />
              {{ favorite.answer }}
            </p>

            <button
              class="favorite__volume"
              @click="speechText(favorite.answer, favorite.description)"
            >
              <i class="bx bx-volume-full"></i>
            </button>
          </div>
          <p class="favorite__text">
            <img src="@/assets/img/uzbekistan.png" alt="flag" />
            {{ favorite.text_uz }}
          </p>
        </div>
        <p class="favorite__description">
          {{ favorite.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

let favorites = ref([]);
onMounted(() => {
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteData) favorites.value = favoriteData;
});

function speechText(eng, desc) {
  window.responsiveVoice.speak(eng, "UK English Male");
  setTimeout(() => {
    window.responsiveVoice.speak(desc, "UK English Male");
  }, 2000);
}
</script>

<style lang="scss" scoped>
.favorite {
  margin-bottom: 120px;

  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__list {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
  &__item {
    display: block;
    width: 100%;
    background-color: #80808033;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__volume {
    border: none;
    background: transparent;
    outline: none;
    font-size: 20px;
    color: #1f2f70;
    cursor: pointer;
  }
  &__text {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1f2f70;

    img {
      width: 25px;
      margin-right: 10px;
    }
    span {
      color: orange;
      font-style: italic;
      margin-left: 5px;
    }
  }
  &__description {
    font-size: 16px;
    font-style: italic;
    color: #363636;
  }
}
</style>
