<route>
{
  name: 'Home',
}
</route>

<script setup>
// import TheWelcome from "@/shared/components/TheWelcome.vue";
import TreeNode from "../TreeNode.vue";

const foods = [
  {
    id: 1,
    label: "Foods",
    children: [
      {
        id: 2,
        label: "Fruits",
        children: [
          {
            id: 3,
            label: "Banana",
          },
          {
            id: 4,
            label: "Apple",
          },
          {
            id: 5,
            label: "Strawberry",
          },
        ],
      },
      {
        id: 6,
        label: "Vegetables",
        children: [
          {
            id: 7,
            label: "Carrot",
          },
          {
            id: 8,
            label: "Lettuce",
          },
        ],
      },
    ],
  },
];

const drinks = [
  {
    id: 9,
    label: "Drinks",
    children: [
      {
        id: 10,
        label: "Beers",
        children: [
          {
            id: 11,
            label: "Budweiser",
          },
          {
            id: 12,
            label: "Heineken",
          },
        ],
      },
      {
        id: 13,
        label: "Wines",
      },
      {
        id: 14,
        label: "Whiskey",
      },
    ],
  },
];
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <TreeNode v-for="node in foods" :key="node.id" :node="node" class="tab" />
    <TreeNode v-for="node in drinks" :key="node.id" :node="node" class="tab" />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.tab {
  width: 120px;
}

.tab + .tab {
  margin-left: 100px;
}
</style>
