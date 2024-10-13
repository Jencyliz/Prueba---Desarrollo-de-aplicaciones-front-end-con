import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

test('existe la vista Home', () => {
  expect(Home).toBeTruthy();
});

test('existe la vista About', () => {
  expect(About).toBeTruthy();
});
