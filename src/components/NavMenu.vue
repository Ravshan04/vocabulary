<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <router-link
          class="menu__link"
          :class="route.name === 'home' ? 'active' : null"
          to="/"
        >
          <i class="bx bx-home-alt-2"></i>
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
          class="menu__link"
          :to="{ name: 'Game' }"
          :class="route.name === 'Game' ? 'active' : null"
        >
          <i class="bx bx-joystick"></i>
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
          class="menu__link"
          :class="route.params.type === 'vocabulary' ? 'active' : null"
          :to="{ name: 'Books', params: { type: 'vocabulary' } }"
        >
          <i class="bx bxs-book-alt"></i>
        </router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" :to="{ name: 'Favorite' }">
          <i class="bx bxs-bookmark-alt"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 2rem;
  box-shadow: 0 8px 24px #2745be26;
  background-color: #fff;
  width: 80%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 1.3rem 3rem;
  border-radius: 1.25rem;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  &__item {
    text-align: center;
  }
  &__link {
    display: block;
    padding: 3px 8px;
    border-radius: 50%;
    color: #808080;
    font-size: 20px;
  }
}

.active {
  background-color: #6c89ff;
  color: #fff;
}
</style>
