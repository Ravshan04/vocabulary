<template>
  <section class="game">
    <div class="game__data">
      <router-link :to="{ name: 'Books', params: { type: 'test' } }" class="game__link">
        <img
          src="@/assets/img/testing-svgrepo-com.svg"
          width="25"
          height="25"
          alt="testing"
        />

        <p>Test</p>
      </router-link>

      <router-link
        :to="{ name: 'Books', params: { type: 'writing' } }"
        class="game__link"
      >
        <img
          src="@/assets/img/writing-hand-skin-1-svgrepo-com.svg"
          width="25"
          height="25"
          alt="writing"
        />
        <p>Writing</p>
      </router-link>

      <button class="game__link" @click="stopClick">
        <img src="@/assets/img/brain.svg" width="25" height="25" alt="writing" />
        <p>My Favorites</p>
      </button>
    </div>
  </section>

  <div v-if="modal" class="alert">
    <div class="alert__container">
      <button class="alert__close" @click="close">x</button>
      <img
        class="alert__icon"
        src="@/assets/img/warning.svg"
        width="100"
        height="100"
        alt="writing"
      />
      <h2 class="alert__title">Oh empty!</h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
let brain = ref(false);
let modal = ref(false);

onMounted(() => {
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  favoriteData && favoriteData.length ? (brain.value = true) : (brain.value = false);
});

function stopClick() {
  if (brain.value) {
    router.push({ name: "Brain" });
  } else {
    modal.value = true;
  }
}
function close() {
  modal.value = false;
}
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-bottom: 60px;

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__link {
    max-width: 300px;
    width: 100%;
    padding: 20px;
    text-align: center;
    border: 2px solid rgb(237, 239, 248);
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: transparent;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 80px;
      padding: 10px;
      background-color: rgb(108, 137, 255);
      border-radius: 20px;
    }
    p {
      color: rgb(31, 47, 112);
      font-weight: 700;
      font-size: 20px;
    }
  }
}

.alert {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background-color: rgba(0, 0, 0, 0.5);

  &__container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
  }
  &__close {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: auto;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }
  &__icon {
    display: block;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    color: #6c89ff;
  }
}
</style>
