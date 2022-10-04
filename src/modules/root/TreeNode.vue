<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  spacing: {
    type: Number,
    default: 0,
  },
});

const nodeMargin = computed(() => {
  return { "padding-left": `${props.spacing}px` };
});

const hasChildren = computed(() => {
  const { children } = props.node;
  return children && children.length > 0;
});

const showChildren = ref(false);
function toggleChildren() {
  showChildren.value = !showChildren.value;
}
</script>

<template>
  <div :style="nodeMargin">
    <div @click="toggleChildren">
      {{ node.label }}
    </div>
    <!--magic happens-->
    <div v-if="hasChildren" v-show="showChildren">
      <TreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :spacing="spacing + 10"
      />
    </div>
  </div>
</template>

<style scoped></style>
