<template>
  <div>
    <LikeHeader :total-number="number"></LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
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
        number: 10
      }
    },
    methods: {
      incrementNumber(value) {
        this.number = value;
      }
    }
}
</script>

