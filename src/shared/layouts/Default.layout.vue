<script setup>
import { ref } from "vue";

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'Home' }" class="tab">Home</RouterLink>
        <RouterLink :to="{ name: 'About' }" class="tab">About</RouterLink>
        <div class="tab">
          <RouterLink :to="{ name: 'Repair' }" @click="toggleDropdown"
            >Repair</RouterLink
          >
          <ul v-show="showDropdown">
            <li>
              <RouterLink :to="{ name: 'RepairConsole' }"
                >RepairConsole</RouterLink
              >
            </li>
            <li>
              <RouterLink :to="{ name: 'RepairMotor' }">RepairMotor</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  padding: 20px 30px;
}

ul {
  padding: 0;
  position: absolute;
  top: 100%;
  z-index: 99;
}

li {
  list-style: none;
  padding: 0;
}

.tab {
  display: inline-block;
  position: relative;
  background-color: bisque;
  width: 150px;
  padding: 20px;
  text-align: center;
}

.tab + .tab {
  margin-left: 20px;
}

a {
  text-decoration: none;
}
</style>
