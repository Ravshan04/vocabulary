<template>
  <p
    class="item"
    :class="{ currect: currect, incurrect: incurrect }"
    @click="nextQuestion(option, props.answer)"
  >
    <span>{{ abc[index] }})</span> {{ props.option }}
  </p>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  option: String,
  text: String,
  answer: String,
  description: String,
  index: Number,
});

let abc = ["A", "B", "C", "D"];
let currect = ref(false);
let incurrect = ref(false);

const emits = defineEmits(["check"]);

function nextQuestion(option, answer) {
  if (option === answer) {
    currect.value = true;
    emits("check", true);
  } else {
    incurrect.value = true;
    emits("check", {
      text: props.text,
      answer: props.answer,
      worng: option,
      description: props.description,
    });
  }
}
</script>

<style lang="scss" scoped>
.item {
  border: 2px solid rgb(237, 239, 248);
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  white-space: wrap;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    color: orange;
    margin-right: 10px;
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
