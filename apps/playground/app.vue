<template>
  <div class="top-div">
    <p v-copy>
      Copy this text by clicking on it
    </p>
    <button v-focus>Focuses automatically</button>
  </div>
</template>
<style>
.top-div {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>