<template>
  <div>
    <div class="vocabulary__box">
      <p class="vocabulary__text">
        <img src="@/assets/img/united-kingdom.png" alt="flag" />
        {{ props.textEn }} <span>({{ props.keyValue }})</span>
      </p>
      <button
        class="vocabulary__volume"
        @click="speechText(props.textEn, props.description)"
      >
        <i class="bx bx-volume-full"></i>
      </button>
    </div>
    <p class="vocabulary__text">
      <img src="@/assets/img/uzbekistan.png" alt="flag" />
      {{ props.textUz }}
    </p>
  </div>
  <p class="vocabulary__description">
    {{ props.description }}
  </p>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  keyValue: String,
  textEn: String,
  textUz: String,
  description: String,
});
let voice = window.responsiveVoice;

function speechText(eng, desc) {
  voice.speak(eng, "UK English Male");

  setTimeout(() => {
    voice.speak(desc, "UK English Male");
    console.clear();
  }, 2000);
}
</script>

<style lang="scss" scoped>
.vocabulary {
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
