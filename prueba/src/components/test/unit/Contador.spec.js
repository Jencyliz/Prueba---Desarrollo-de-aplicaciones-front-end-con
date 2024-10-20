import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Contador from '@/components/Contador.vue';

describe('Contador.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state() {
        return {
          contador: 0,
        };
      },
      mutations: {
        incrementar(state) {
          state.contador++;
        },
        decrementar(state) {
          state.contador--;
        },
      },
    });
  });

  it('debe recibir un valor inicial en el contador', () => {
    const wrapper = mount(Contador, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.text()).toContain('Contador: 0');
  });

  it('incrementa el contador cuando se hace clic en el botón de incrementar', async () => {
    const wrapper = mount(Contador, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('button.incrementar').trigger('click');

    expect(wrapper.text()).toContain('Contador: 1');
  });

  it('decrementa el contador cuando se hace clic en el botón de decrementar', async () => {
    const wrapper = mount(Contador, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('button.decrementar').trigger('click');

    expect(wrapper.text()).toContain('Contador: -1');
  });
});

