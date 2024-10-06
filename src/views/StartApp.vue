<template>
  <div class="start">
    <div class="start__container">
      <h1 class="start__title">Welcome to Navigate Book Vocabulary</h1>
      <p class="start__text">Confirm password to access the vocabulary</p>
      <label class="start__label" for="password">
        <input
          id="password"
          class="start__input"
          :class="{ currect: currect, incurrect: incurrect }"
          :type="passwordType ? 'password' : 'text'"
          placeholder="Password"
          v-model="password"
        />
        <svg
          v-if="passwordType"
          width="25px"
          height="25px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="start__icon"
          @click="viewPassword"
        >
          <path
            clip-rule="evenodd"
            d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z"
            fill="#808080"
            fill-rule="evenodd"
          />
          <path
            d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z"
            fill="#808080"
          />
        </svg>

        <svg
          v-else
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="start__icon"
          @click="viewPassword"
        >
          <path
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
            stroke="#808080"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
            stroke="#808080"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="#808080"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <button class="start__button" @click="startApp">Start App</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits(["start"]);
let passwordType = ref(true);
let password = ref("");
let currect = ref(false);
let incurrect = ref(false);

function viewPassword() {
  passwordType.value = !passwordType.value;
}
function startApp() {
  if (password.value.toLocaleLowerCase().trim() === "navigatevocabulary") {
    incurrect.value = false;
    currect.value = true;
    setTimeout(() => {
      emits("start");
    }, 2000);
  } else {
    incurrect.value = true;
  }
}
</script>

<style lang="scss" scoped>
.start {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 40px;

  &__container {
    max-width: 500px;
    width: 100%;
    border: 1px solid #808080;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
  }
  &__title {
    text-align: center;
    font-size: 25px;
    margin-bottom: 10px;
    color: #1f2f70;
  }
  &__text {
    text-align: center;
    font-size: 15px;
    font-size: 400;
    color: #808080;
    margin-bottom: 20px;
  }
  &__label {
    display: block;
    position: relative;
    width: 100%;
  }
  &__input {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #80808080;
    margin-bottom: 20px;
    outline: none;

    &:focus {
      border-color: #1f2f70;
      color: #222;
    }
  }
  &__icon {
    display: block;
    position: absolute;
    top: 8px;
    right: 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &__button {
    display: block;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    height: 40px;
    border: 2px solid #1f2f70;
    background-color: transparent;
    color: #1f2f70;
    font-size: 15px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
  }
}

.currect {
  color: #155724;
  border-color: #155724;
}
.incurrect {
  color: red;
  border-color: red;
  animation: shake 0.13s 3;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
}
</style>
