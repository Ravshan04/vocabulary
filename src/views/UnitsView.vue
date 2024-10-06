<template>
  <section class="book">
    <div class="book__head">
      <h2 class="book__title">Units</h2>
    </div>

    <div class="container">
      <ul class="book__units">
        <li v-for="(unit, index) in Object.keys(units)" :key="index" class="book__unit">
          <router-link
            :to="{
              name: route.params.type,
              params: { book: route.params.book, unit },
            }"
            class="book__link"
          >
            <div class="book__data">
              <img
                class="book__icon"
                src="@/assets/img/list-svgrepo-com.svg"
                alt="list"
              />
              <p>Unit {{ index + 1 }}</p>
            </div>

            <img
              class="book__arrow"
              src="@/assets/img/right-arrow-svgrepo-com.svg"
              alt="arrow right"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

let units = store.state[route.params.book];
</script>

<style lang="scss" scoped>
.book {
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
  &__units {
    padding-top: 90px;
    margin-bottom: 120px;
  }
  &__unit {
    background-color: rgb(237, 239, 248);
    border-radius: 10px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  &__data {
    display: flex;
    align-items: center;
  }
  &__icon {
    max-width: 30px;
    width: 100%;
    margin-right: 20px;
  }
  &__arrow {
    max-width: 25px;
  }
  p {
    color: rgb(31, 47, 112);
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
