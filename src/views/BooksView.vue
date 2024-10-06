<template>
  <section class="game">
    <div class="game__head">
      <h2 class="game__title">Books</h2>
    </div>
    <div class="container">
      <ul class="game__books">
        <li class="game__book">
          <router-link
            :to="{
              name: 'Units',
              params: { type: route.params.type, book: 'beginner' },
            }"
            class="game__link"
          >
            <img src="@/assets/img/beginner.jpg" alt="book" />
            <p>Beginner</p>
          </router-link>
        </li>
        <li class="game__book">
          <router-link
            :to="{
              name: 'Units',
              params: { type: route.params.type, book: 'elemntary' },
            }"
            class="game__link"
          >
            <img src="@/assets/img/elemntary.jpg" alt="book" />
            <p>Elemntary</p>
          </router-link>
        </li>
        <li class="game__book">
          <router-link
            :to="{
              name: 'Units',
              params: { type: route.params.type, book: 'preIntermediate' },
            }"
            class="game__link"
          >
            <img src="@/assets/img/preIntermediate.jpg" alt="book" />
            <p>Pre-Intermediate</p>
          </router-link>
        </li>
        <li class="game__book">
          <router-link
            :to="{
              name: 'Units',
              params: { type: route.params.type, book: 'intermediate' },
            }"
            class="game__link"
          >
            <img src="@/assets/img/intermediate.jpg" alt="book" />
            <p>Intermediate</p>
          </router-link>
        </li>
        <li class="game__book">
          <router-link
            :to="{
              name: 'Units',
              params: { type: route.params.type, book: 'upperIntermediate' },
            }"
            class="game__link"
          >
            <img src="@/assets/img/upperIntermediate.jpg" alt="book" />
            <p>Upper-Intermediate</p>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.game {
  margin-bottom: 20px;

  &__head {
    position: fixed;
    width: 100%;
    background-color: rgb(108, 137, 255);
    padding: 20px;
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__books {
    padding-top: 90px;
    display: grid;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 120px;
  }
  &__book {
    width: 100%;
    border-bottom: 1px solid rgb(237, 239, 248);
    padding-bottom: 5px;
  }
  &__link {
    text-align: center;
    color: rgb(31, 47, 112);
    font-weight: 700;
    font-size: 20px;

    img {
      border-radius: 5px;
    }
  }
}

@media screen and (min-width: 375px) {
  .game {
    &__books {
      grid-template-columns: repeat(2, 1fr);
    }
    &__link {
      font-weight: 700;
      font-size: 16px;
    }
  }
}
</style>
