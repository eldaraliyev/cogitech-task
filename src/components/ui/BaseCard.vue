<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.26);
  background-color: #f8f8f8;
  padding: 2em;
  margin: 1em auto;
  
}
</style>