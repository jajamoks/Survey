<template>
  <div class="page-wrapper">
    <div class="top">
      <img
        src="@/assets/img/headphones.png"
        class="top-image"
        alt="headphones"
      >
      <div class="small-text">Dear WFS guest!</div>
    </div>

    <div class="main-text">
      <h2>Welcome to the ASE raffle.</h2>

      <div class="regular-text">
        Please join in and you might win a Wireless Extra Bass SONY Speaker!
      </div>

      <div class="small-text">
        It is simple and easy to participate
      </div>

      <mn-button
        :is-arrow="true"
        :is-big="true"
        color="yellow"
        text="Start survey"
        @click="onStartClick"
      />
    </div>
  </div>
</template>

<script>
/* eslint import/no-unresolved: 0 */
import MnButton from '@/components/MnButton.vue'

export default {
  name: 'MnPageOne',
  components: {
    MnButton,
  },
  methods: {
    onStartClick() {
      this.$emit('nextClick')
    },
  },
};
</script>

<style scoped>
.top {
  margin-top: 20px;
  text-align: center;
  max-width: 85.6%;
  margin-left: auto;
  margin-right: auto;
}

.top .small-text {
  margin-top: -25px;
}

.main-text {
  text-align: center;
  max-width: 318px;
  margin: auto;
}

.regular-text {
  margin-bottom: 25px;
}

.main-text h2 {
  font-family: 'Orgon-Light';
  font-weight: 300;
  font-size: 42.8px;
  margin-top: -5px;
  margin-bottom: 10px;
}

.main-text .small-text {
  margin-bottom: 13px;
  font-family: Orgon-Thin;
}
</style>
