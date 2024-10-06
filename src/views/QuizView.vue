<template>
  <section class="quiz">
    <div class="quiz__head">
      <h2 class="quiz__title">Unit {{ unit }}</h2>
    </div>
    <div class="quiz__data">
      <h3>
        Your Score: <span>{{ correct }}</span>
      </h3>
    </div>
    <div v-if="start" ref="container" class="quiz__container">
      <div
        v-for="(question, index) in questionList"
        :key="question.id"
        class="quiz__question"
        ref="firstQuestion"
      >
        <div class="quiz__card">
          <p class="quiz__questions-total">
            Question:
            <span>{{ index + 1 }}/{{ questions.length }}</span>
          </p>
          <p class="quiz__question-text">
            {{ question[typeLanguage] }}
            <span>({{ question.key }})</span>
          </p>
          <div v-if="typeLanguage === 'text_en'" class="quiz__info">
            <img
              class="quiz__info-icon"
              src="@/assets/img/icons8-info.svg"
              alt="info icon"
              @click="informationFnc"
            />

            <div v-if="information" class="quiz__info-modal">
              <button @click="informationFnc">X</button>
              <p>
                {{ question.description }}
              </p>
            </div>
          </div>
        </div>

        <ul class="quiz__list">
          <li v-for="(option, index) in question.options" :key="option">
            <QuizOption
              :option="option"
              :index="index"
              :text="question.text_en"
              :answer="question.answer"
              :description="question.description"
              @check="nextQuestion"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <QuizModal v-if="!start" @language="selectLanguage" @start="startQuiz" />
  <QuizResult
    v-if="score === questions.length"
    :total="questions.length"
    :correct="correct"
    :wrong="wrong"
    :wrongs="wrongs"
  />
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import QuizModal from "@/components/QuizModal.vue";
import QuizOption from "@/components/QuizOption.vue";
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const store = useStore();

let questions = store.state[route.params.book][route.params.unit];
let list = questions.sort(() => 0.5 - Math.random());
let container = ref(null);
let firstQuestion = ref(null);
let correct = ref(0);
let score = ref(0);
let wrong = ref(0);
let information = ref(false);
let wrongs = ref([]);
let typeLanguage = ref("text_en");
let start = ref(false);

const questionList = computed(() => {
  let language = typeLanguage.value === "text_uz" ? "text_en" : "text_uz";
  list.forEach((question) => {
    let options = [question[language]];
    for (let i = 0; i < 3; i++) {
      let item = list[Math.floor(Math.random() * list.length)][language];
      !options.includes(item) ? options.push(item) : i--;
    }
    question.answer = question[language];
    question.options = options.sort(() => 0.5 - Math.random());
  });
  return list;
});

const unit = computed(() => {
  let unitIndex = Object.keys(store.state[route.params.book]).findIndex(
    (index) => index === route.params.unit
  );
  return unitIndex + 1;
});

function nextQuestion(value) {
  information.value = false;

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
function informationFnc() {
  information.value = !information.value;
  setTimeout(() => {
    information.value = false;
  }, 10000);
}
function selectLanguage(value) {
  typeLanguage.value = value;
}
function startQuiz() {
  start.value = true;
}
</script>

<style lang="scss" scoped>
.quiz {
  &__head {
    background-color: rgb(108, 137, 255);
    padding: 20px;
    border-bottom: 1px solid #fff;
  }
  &__title {
    text-align: center;
    color: #fff;
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
    vertical-align: text-top;
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
  &__card {
    max-width: 250px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
  }
  &__info {
    position: relative;
  }
  &__info-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &__info-modal {
    position: absolute;
    left: 0;
    right: 0;
    top: 120%;
    background: #fff;
    padding: 10px 20px 20px 20px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &::before {
      content: "";
      position: absolute;
      transform: translateX(-50%);
      bottom: 100%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #fff;
    }

    p {
      white-space: pre-wrap;
      font-size: 10px;
      font-weight: 700;
      font-style: italic;
    }
    button {
      display: block;
      width: 20px;
      height: 20px;
      background: transparent;
      border: none;
      margin-left: auto;
      font-size: 10px;
      cursor: pointer;
    }
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
  &__list {
    margin-top: 30px;
    padding: 0 10px;

    li {
      margin-bottom: 10px;
    }
  }
}
</style>
