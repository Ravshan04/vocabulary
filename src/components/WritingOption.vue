<template>
  <div class="writing__card">
    <p class="writing__questions-total">
      Question:
      <span>{{ props.index + 1 }}/{{ props.questionIndex }}</span>
    </p>
    <p class="writing__question-text">
      {{ props.question.text_uz }}
      <span>({{ props.question.key }})</span>
    </p>
  </div>

  <div class="writing__typing">
    <div class="writing__label">
      <p>Type your answer</p>
      <input
        v-model="answer"
        id="typing"
        class="writing__input"
        :class="{ currect: currect, incurrect: incurrect }"
        type="text"
        placeholder="Typing"
        autocomplete="off"
        @keyup.enter="nextQuestion"
      />
    </div>
    <button
      class="writing__button"
      @click="nextQuestion"
      :disabled="!answer.length"
      @keyup.tab="false"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  question: Object,
  index: Number,
  questionIndex: Number,
});
const emits = defineEmits(["nextQuestion"]);

let answer = ref("");
let currect = ref(false);
let incurrect = ref(false);

function nextQuestion() {
  let text = props.question.answer;
  if (text.trim().toLowerCase() === answer.value.trim().toLowerCase()) {
    currect.value = true;
    emits("nextQuestion", true, props.question.answer);
  } else {
    incurrect.value = true;
    emits("nextQuestion", {
      text: props.question.answer,
      answer: props.question.text_uz,
      worng: answer.value,
      description: props.question.description,
    });
  }
}
</script>

<style lang="scss" scoped>
.writing {
  &__card {
    max-width: 250px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
    text-align: center;
    margin: 30px auto;
  }
  &__questions-total {
    color: rgb(108, 137, 255);
    margin-bottom: 20px;

    span {
      color: orange;
      margin-left: 10px;
    }
  }
  &__question-text {
    font-weight: 700;
    font-size: 18px;
    word-wrap: break-word;
    white-space: pre-wrap;
    margin-bottom: 10px;

    span {
      font-style: italic;
      font-size: 16px;
      font-weight: 400;
      color: orange;
    }
  }
  &__typing {
    text-align: center;
    margin: 0 10px;
  }
  &__label {
    p {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 700;
      color: #1f2f70;
    }
  }
  &__input {
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;

    &:focus {
      border-color: #1f2f70;
    }
  }
  &__button {
    display: block;
    width: 100px;
    border: 1px solid #6c89ff;
    padding: 10px 0;
    border-radius: 10px;
    margin-left: auto;
    background: transparent;
    color: #6c89ff;
    font-weight: 700;
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
