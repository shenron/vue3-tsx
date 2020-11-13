<script lang="ts">
import { defineComponent } from 'vue';
import useRender from './useRender';

export default defineComponent({
  render() {
    return useRender.call(this);
  },
});
</script>
