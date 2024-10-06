<template>
  <div class="modal">
    <div class="modal__container">
      <h2 class="modal__title">Select test of type:</h2>
      <div class="modal__buttons" :class="{ rowReverse: type }">
        <button class="modal__flag">
          <img src="@/assets/img/united-kingdom.png" alt="flag" />
          <span>Eng</span>
        </button>

        <button class="modal__flag">
          <img src="@/assets/img/uzbekistan.png" alt="flag" />
          <span>Uzb</span>
        </button>
      </div>

      <button class="modal__replacement" @click="replacement">
        <img src="@/assets/img/improvement-replacement.svg" alt="" />
      </button>
      <button class="modal__config" @click="startQuiz">Start</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const type = ref(false);
const language = ref("text_en");

const emits = defineEmits(["language", "start"]);

function replacement() {
  type.value = !type.value;
  language.value === "text_en"
    ? (language.value = "text_uz")
    : (language.value = "text_en");
  emits("language", language.value);
}
function startQuiz() {
  emits("start");
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  &__container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  &__title {
    text-align: center;
    margin-bottom: 20px;
    color: rgb(31, 47, 112);
  }
  &__buttons {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: space-around;
    gap: 30px;
    margin-bottom: 20px;
    transition: all 0.5s ease;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
  &__flag {
    width: 50px;
    color: rgb(31, 47, 112);
    font-weight: 700;
    font-size: 18px;
    transition: all 0.4s ease;
  }
  &__replacement {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  &__config {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: rgb(31, 47, 112);
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
  }
}

.rowReverse {
  transform: rotateY(180deg);
}

.rowReverse .modal__flag {
  transform: rotateY(180deg);
}
</style>
