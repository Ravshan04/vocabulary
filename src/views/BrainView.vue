<template>
  <section class="writing">
    <div class="writing__head">
      <h2 class="writing__title">Memory</h2>
    </div>
    <div class="writing__data">
      <h3>
        Your Score: <span>{{ score }}</span>
      </h3>
    </div>
    <div ref="container" class="writing__container">
      <div
        v-for="(question, index) in favorite"
        :key="index"
        class="writing__question"
        ref="firstQuestion"
      >
        <WritingOption
          :question="question"
          :index="index"
          :questionIndex="favorite.length"
          @nextQuestion="nextQuestion"
        />
      </div>
    </div>
  </section>

  <QuizResult
    v-if="score === favorite.length"
    :total="favorite.length"
    :correct="correct"
    :wrong="wrong"
    :wrongs="wrongs"
  />
</template>

<script setup>
import WritingOption from "@/components/WritingOption.vue";
import QuizResult from "@/components/QuizResult.vue";
import { ref, onMounted } from "vue";

let favorite = ref([]);

onMounted(() => {
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  if (favoriteData) favorite.value = favoriteData;

  favorite.value.sort(() => 0.5 - Math.random());
});
let container = ref(null);
let firstQuestion = ref(null);
let correct = ref(0);
let score = ref(0);
let wrong = ref(0);
let wrongs = ref([]);

function nextQuestion(value, answer) {
  if (value === true) {
    setTimeout(() => {
      let firstQuestionWidth = firstQuestion.value[0].clientWidth;
      container.value.scrollLeft += firstQuestionWidth;
      correct.value++;
      score.value++;
    }, 500);
    let favoriteData = JSON.parse(localStorage.getItem("favorites"));
    let index = favoriteData.findIndex((item) => item.answer === answer);
    favoriteData.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favoriteData));
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
