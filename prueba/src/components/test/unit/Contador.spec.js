import { createStore } from 'vuex';
import { shallowMount } from '@vue/test-utils';
import Contador from '@/components/Contador.vue';
import storeConfig from '@/store';

const store = createStore(storeConfig);

describe('Contador.vue', () => {
  it('verifica el valor inicial del contador', () => {
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } });
    expect(wrapper.text()).toContain('Contador: 0');
  });

  it('incrementa el contador', async () => {
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('Contador: 1');
  });

  it('decrementa el contador', async () => {
    const wrapper = shallowMount(Contador, { global: { plugins: [store] } });
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.text()).toContain('Contador: -1');
  });
});
