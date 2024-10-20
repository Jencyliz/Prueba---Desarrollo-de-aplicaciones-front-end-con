import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

describe('Parent.vue', () => {
  it('recibe el texto enviado por Child', async () => {
    const wrapper = mount(Parent);
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    await input.setValue('Hola Mundo');
    await button.trigger('click');

    expect(wrapper.text()).toContain('Texto recibido: Hola Mundo');
  });
});

