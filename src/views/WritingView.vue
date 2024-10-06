<template>
  <section class="writing">
    <div class="writing__head">
      <h2 class="writing__title">Unit {{ unit }}</h2>
    </div>
    <div class="writing__data">
      <h3>
        Your Score: <span>{{ score }}</span>
      </h3>
    </div>
    <div ref="container" class="writing__container">
      <div
        v-for="(question, index) in questionList"
        :key="index"
        class="writing__question"
        ref="firstQuestion"
      >
        <WritingOption
          :question="question"
          :index="index"
          :questionIndex="questions.length"
          @nextQuestion="nextQuestion"
        />
      </div>
    </div>
  </section>

  <QuizResult
    v-if="score === questions.length"
    :total="questions.length"
    :correct="correct"
    :wrong="wrong"
    :wrongs="wrongs"
  />
</template>

<script setup>
import WritingOption from "@/components/WritingOption.vue";
import QuizResult from "@/components/QuizResult.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

let questions = store.state[route.params.book][route.params.unit];
let list = questions.sort(() => 0.5 - Math.random());
let container = ref(null);
let firstQuestion = ref(null);
let correct = ref(0);
let score = ref(0);
let wrong = ref(0);
let wrongs = ref([]);

const questionList = computed(() => {
  list.forEach((question) => {
    question.answer = question.text_en;
  });
  return list;
});

function nextQuestion(value) {
  if (value === true) {
    setTimeout(() => {
      let firstQuestionWidth = firstQuestion.value[0].clientWidth;
      container.value.scrollLeft += firstQuestionWidth;
      correct.value++;
      score.value++;
    }, 500);
  } else {
    wrongs.value.push(value);
    setTimeout(() => {
      let firstQuestionWidth = firstQuestion.value[0].clientWidth;
      container.value.scrollLeft += firstQuestionWidth;
      wrong.value++;
      score.value++;
    }, 500);
  }
}

const unit = computed(() => {
  let unitIndex = Object.keys(store.state[route.params.book]).findIndex(
    (index) => index === route.params.unit
  );
  return unitIndex + 1;
});
</script>

<style lang="scss" scoped>
.writing {
  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    border-bottom: 1px solid #fff;
  }
  &__title {
    text-align: center;
    color: #fff;
  }
  &__data {
    display: flex;
    justify-content: center;
    background-color: rgb(108, 137, 255);
    padding: 20px 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    h3 {
      color: #fff;
      margin-right: 50px;

      &:last-child {
        margin-right: 0;
      }
    }
    span {
      color: orange;
    }
  }
  &__container {
    max-width: 350px;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
  &__question {
    display: inline-block;
    width: 100%;
  }
}
</style>
