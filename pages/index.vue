<script setup lang="ts">
// definePageMeta({
//   name: 'home'
// })

const { locale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div>
    home
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="ja">ja</option>
      </select>
      <p>{{ $t("welcome") }}</p>
      <div>
        <NuxtLink
          :to="localePath({ name: 'index' })"
        >
          localePath({ name: 'index' })
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          :to="localePath({ name: 'home' })"
        >
          localePath({ name: 'home' })
        </NuxtLink>
      </div>
    </form>
  </div>
</template>
