<template>
  <div>
    <h2>いいね{{ number() }}</h2>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  methods: {
    number() {
      return this.totalNumber;
    }
  }
}

</script>>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>>