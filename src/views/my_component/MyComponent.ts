import { defineComponent } from 'vue';
import useRender from './useRender';

export default defineComponent({
  emits: {
    'custom-click': (str: string) => typeof str === 'string',
  },
  setup(props, { emit }) {
    return {
      onClick() {
        console.log('click me');
        emit('custom-click', 'clicked');
      },
    };
  },
  render() {
    return useRender.call(this, this);
  },
});
