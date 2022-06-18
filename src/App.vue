<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from "vue";
const textContent = ref("");
const status = ref(false);
const insertLogi = computed(() => {
  const vowel = /^([aeiou]).*\1$/i.test(textContent.value);
  if (
    !vowel &&
    textContent.value.length > 2 &&
    textContent.value.toLocaleLowerCase().substr(-1) !== "o"
  ) {
    return textContent.value + "ologi";
  } else if (
    textContent.value.length > 2 &&
    textContent.value.toLocaleLowerCase().substr(-1) === "o"
  ) {
    return textContent.value + "logi";
  }
});

const input = ref();

watchEffect(() => {
  textContent.value.length > 0
    ? ((status.value = true),
      setTimeout(() => {
        status.value = false;
      }, 1000))
    : false;
});

onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <main class="flex justify-center items-center w-full h-screen flex-col">
    <h1 class="text-3xl font-bold font-sans">Logi Generator V1</h1>
    <div class="flex items-center gap-y-4">
      <h1 class="text-blue-400 font-sans font-bold text-1xl">
        {{ insertLogi }}
      </h1>
    </div>
    <input
      ref="input"
      v-model="textContent"
      class="w-36 h-auto p-2 rounded-lg"
      type="text"
      placeholder="Masukan Kata"
    />
    <span v-if="status">Sedang mengetik..</span>
  </main>
</template>
