<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>>

<script>
import LikeHeader from './components/LikeHeader.vue';
import LikeNumber from './components/LikeNumber.vue';

export default {
    components: {
        LikeHeader,
        LikeNumber
    },
    data() {
      return {
        number: 5
      }
    }
}
</script>

