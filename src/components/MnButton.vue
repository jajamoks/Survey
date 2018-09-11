<template>
  <button
    :color="color"
    class="button"
    @click="$emit('click')"
  >
    {{ text }}
    <img
      v-if="isArrow"
      src="@/assets/img/arrow.png"
      alt="arrow"
    >
  </button>
</template>

<script>
export default {
  name: 'MnButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'yellow',
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.button {
  margin-left: auto;
  margin-right: auto;
  width: 233.1px;
  height: 53.9px;
  border: none;
  font-family: 'Orgon-Light';
  font-size: 22.5px;
  color: #ffffff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  letter-spacing: .3px;
}

.button[color="yellow"] {
  background-image: linear-gradient(to bottom, #febf10, #e49a16);
  padding-left: 46.2px;
  padding-right: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button[color="blue"] {
  background-image: linear-gradient(to bottom, #027cc5, #015485);
}
</style>
