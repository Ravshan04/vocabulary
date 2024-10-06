import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import BooksView from "../views/BooksView.vue";
import UnitsView from "../views/UnitsView.vue";
import QuizView from "../views/QuizView.vue";
import WritingView from "../views/WritingView.vue";
import VocabularyView from "../views/VocabularyView.vue";
import BrainView from "../views/BrainView.vue";
import FavoriteView from "../views/FavoriteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/game",
    name: "Game",
    component: GameView,
  },
  {
    path: "/game/:type",
    name: "Books",
    component: BooksView,
  },
  {
    path: "/game/:type/:book",
    name: "Units",
    component: UnitsView,
  },
  {
    path: "/game/test/:book/:unit",
    name: "test",
    component: QuizView,
  },
  {
    path: "/game/writing/:book/:unit",
    name: "writing",
    component: WritingView,
  },
  {
    path: "/game/vocabulary/:book/:unit",
    name: "vocabulary",
    component: VocabularyView,
  },
  {
    path: "/brain",
    name: "Brain",
    component: BrainView,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: FavoriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
