<template>
  <div class="page-wrapper">
    <div class="text">
      Please note,<br >
      this raffle is for<br >
      airline delegates only.
    </div>

    <mn-button
      :is-arrow="true"
      :is-big="true"
      class="first-button"
      text="Start survey"
      color="yellow"
      @click="onStartClick"
    />

    <mn-button
      class="first-button"
      text="Exit survey"
      color="blue"
      @click="onExitClick"
    />
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import MnButton from '@/components/MnButton.vue'

export default {
  name: 'MnPageTwo',
  components: {
    MnButton,
  },
  methods: {
    onStartClick() {
      this.$emit('nextClick')
    },
    onExitClick() {
      this.$emit('exitClick')
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  padding-top: 195px;
  text-align: center;
}

.text {
  font-size: 30.8px;
  font-family: Orgon-Light;
  margin-bottom: 25px;
}

.first-button {
  margin-bottom: 16.1px;
}
</style>
