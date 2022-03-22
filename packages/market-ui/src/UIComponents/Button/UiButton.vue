<template>
  <div>
    <button class="btn">{{ props.text }}</button>
  </div>
</template>
<script setup lang="ts">
interface Props {
  text: string;
  className?: string;
}
const props = defineProps<Props>();
</script>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "UiButton"
})
</script>
<style lang="less" scoped>
.btn {
  color: red;
  font-size: 20px;
}
</style>
