<template>
  <section class="home">
    <div class="home__data">
      <router-link :to="{ name: 'Game' }" class="home__link">
        <img
          src="@/assets/img/game-plugins-svgrepo-com.svg"
          width="25"
          height="25"
          alt="game"
        />

        <p>Game</p>
      </router-link>

      <router-link
        :to="{ name: 'Books', params: { type: 'vocabulary' } }"
        class="home__link"
      >
        <img
          src="@/assets/img/homework-svgrepo-com.svg"
          width="25"
          height="25"
          alt="vocabulary"
        />
        <p>Vocabulary</p>
      </router-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;
  }
  &__link {
    max-width: 300px;
    width: 100%;
    padding: 20px;
    text-align: center;
    border: 2px solid rgb(237, 239, 248);
    border-radius: 5px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 80px;
      padding: 10px;
      background-color: rgb(108, 137, 255);
      border-radius: 50%;
    }
    p {
      color: rgb(31, 47, 112);
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>
