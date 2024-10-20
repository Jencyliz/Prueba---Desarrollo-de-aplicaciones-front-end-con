// router.spec.js
import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import routerConfig from '@/router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: routerConfig.routes,
});

describe('Router', () => {
  it('existe la ruta Home', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = mount(Home, { global: { plugins: [router] } });
    expect(wrapper.exists()).toBe(true);
  });

  it('existe la ruta About', async () => {
    router.push('/about');
    await router.isReady();
    const wrapper = mount(About, { global: { plugins: [router] } });
    expect(wrapper.exists()).toBe(true);
  });
});
