<template>
  <section class="vocabulary">
    <div class="vocabulary__head">
      <h2 class="vocabulary__title">Unit {{ unit }}</h2>
    </div>

    <ul class="vocabulary__list">
      <li
        v-for="dictionary in dictionaries"
        :key="dictionary.id"
        class="vocabulary__item"
      >
        <VocabularyItem
          :keyValue="dictionary.key"
          :textEn="dictionary.text_en"
          :textUz="dictionary.text_uz"
          :description="dictionary.description"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import VocabularyItem from "../components/VocabularyItem.vue";

const route = useRoute();
const store = useStore();

let dictionaries = store.state[route.params.book][route.params.unit];

const unit = computed(() => {
  let unitIndex = Object.keys(store.state[route.params.book]).findIndex(
    (index) => index === route.params.unit
  );
  return unitIndex + 1;
});
</script>

<style lang="scss" scoped>
.vocabulary {
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
}
</style>
