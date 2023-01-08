<script setup lang="ts">
const navList = computed(() => [
  { title: 'nav1', link: '/' },
  { title: 'nav2', link: '/' },
  { title: 'nav3', link: '/' },
])
</script>

<template>
  <header flex items-center max-w-screen-2xl mx-auto h16 px-8>
    <section>
      <RouterLink v-slot="{ navigate }" to="/" custom>
        <h1 cursor-pointer font-italic text-violet @click="navigate()">
          Passerby Spring
        </h1>
      </RouterLink>
    </section>
    <section ml-auto>
      <nav space-x-8>
        <RouterLink v-for="item of navList" :key="item.title" text-xl text-gray-7 border-b hover:border-b-solid :to="item.link">
          {{ item.title }}
        </RouterLink>
      </nav>
    </section>
  </header>
</template>
