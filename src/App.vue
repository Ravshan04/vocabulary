<template>
  <NavMenu v-if="hiddenNav && confirm" />
  <router-view v-if="confirm" />
  <StartApp v-else @start="startApp" />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import StartApp from "../src/views/StartApp.vue";
import NavMenu from "../src/components/NavMenu.vue";

const route = useRoute();

let confirm = ref(false);
let hiddenNav = ref(true);

onMounted(() => {
  let login = JSON.parse(localStorage.getItem("login"));
  if (login) {
    confirm.value = true;
    hiddenNav.value = true;
  }
});

watch(route, () => {
  if (
    route.name === "test" ||
    route.name === "writing" ||
    route.name === "vocabulary" ||
    route.name === "Brain"
  ) {
    hiddenNav.value = false;
  } else {
    hiddenNav.value = true;
  }
});

function startApp() {
  confirm.value = true;
  localStorage.setItem("login", JSON.stringify(true));
}
</script>

<style>
@import url("assets/css/styles.scss");
</style>
