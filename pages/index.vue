<template>
  <section class="container">
    <div>
      <p>{{ $store.state.menu }}</p>
      <ul>
        <li v-for="item in $store.state.menu" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </section>
</template>

<script>

</script>