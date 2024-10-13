import { mount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

test('envía texto al hacer clic en el botón', async () => {
  const wrapper = mount(Child);
  await wrapper.find('input').setValue('Hola');
  await wrapper.find('button').trigger('click');
  expect(wrapper.emitted().textoEnviado[0]).toEqual(['Hola']);
});
