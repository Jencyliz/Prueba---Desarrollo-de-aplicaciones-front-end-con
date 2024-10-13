import { mount } from '@vue/test-utils';
import Contador from '@/components/Contador.vue';
import store from '@/store';

test('el valor inicial del contador es 0', () => {
  expect(store.state.contador).toBe(0);
});

test('incrementa el contador', async () => {
  const wrapper = mount(Contador, { global: { plugins: [store] } });
  await wrapper.find('button').trigger('click');
  expect(store.state.contador).toBe(1);
});

test('decrementa el contador', async () => {
  store.commit('incrementar');
  const wrapper = mount(Contador, { global: { plugins: [store] } });
  await wrapper.findAll('button')[1].trigger('click');
  expect(store.state.contador).toBe(0);
});
