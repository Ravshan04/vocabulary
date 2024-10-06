<template>
  <div>
    <div class="result__box">
      <p class="result__item-text">{{ props.text }}</p>
      <button class="result__button" @click="addFavorite">
        <svg
          v-if="favorite"
          fill="#1f2f70"
          height="25px"
          width="25px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <path
            d="M511.192,197.129c-1.964-6.044-7.222-10.426-13.524-11.266L339.723,164.81L270.894,21.103 c-2.746-5.734-8.538-9.381-14.893-9.381s-12.148,3.648-14.893,9.381L172.277,164.81L14.333,185.863 c-6.301,0.84-11.56,5.221-13.524,11.266c-1.964,6.045-0.285,12.682,4.319,17.064l115.404,109.869L91.747,480.781 c-1.147,6.251,1.394,12.607,6.536,16.343c5.14,3.737,11.97,4.19,17.562,1.166L256,422.485l140.154,75.805 c2.462,1.331,5.163,1.988,7.854,1.988c3.423,0,6.83-1.063,9.708-3.154c5.143-3.735,7.685-10.091,6.536-16.343l-28.785-156.718 l115.406-109.869C511.477,209.811,513.156,203.173,511.192,197.129z M362.225,306.299c-4.036,3.843-5.862,9.463-4.855,14.944 l24.17,131.591l-117.683-63.651c-2.451-1.326-5.153-1.988-7.856-1.988s-5.407,0.663-7.856,1.988l-117.683,63.651l24.171-131.591 c1.007-5.482-0.819-11.101-4.855-14.944l-96.903-92.253l132.621-17.677c5.526-0.737,10.305-4.21,12.713-9.236L256,66.467 l57.795,120.667c2.408,5.026,7.187,8.499,12.713,9.236l132.621,17.677L362.225,306.299z"
          />
        </svg>

        <svg
          v-else
          fill="#ff0000"
          height="25px"
          width="25px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <path
            d="M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445 c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528 l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685 C518.482,206.601,511.173,184.105,492.867,181.444z"
          />
        </svg>
      </button>
    </div>
    <p class="correct">{{ props.answer }}</p>
    <p class="wrong">{{ props.worng }}</p>
    <p>
      {{ props.description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  text: String,
  answer: String,
  worng: String,
  description: String,
});

let favorite = ref(true);

onMounted(() => {
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteData) {
    favoriteData.forEach((item) => {
      if (item.text_uz === props.answer || item.text_uz === props.text) {
        favorite.value = false;
      }
    });
  }
});

function addFavorite() {
  favorite.value = !favorite.value;
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  if (!favorite.value) {
    favoriteData.push({
      text_uz: props.answer,
      answer: props.text,
      description: props.description,
    });
    localStorage.setItem("favorites", JSON.stringify(favoriteData));
  } else {
    let index = favoriteData.findIndex((item) => item.answer === props.text);
    favoriteData.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favoriteData));
  }
}
</script>

<style lang="scss" scoped>
.result {
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item-text {
    font-size: 14px;
    font-weight: 700;
  }
  &__button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
}
.correct {
  color: greenyellow;
}
.wrong {
  color: red;
}
</style>
