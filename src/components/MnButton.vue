<template>
  <button
    :color="color"
    :class="{'big': isBig, 'centered': isCentered, 'submit': isSubmit, 'next': isNext}"
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

    isBig: {
      type: Boolean,
      default: false,
    },

    isCentered: {
      type: Boolean,
      default: false,
    },

    isSubmit: {
      type: Boolean,
      default: false,
    },

    isNext: {
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
  cursor: pointer;
  border: none;
  font-family: 'Orgon-Light';
  font-size: 22.5px;
  color: #ffffff;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  letter-spacing: .3px;
  padding-left: 28px;
  padding-right: 28px;
  line-height:normal !important;
}

.button[color="yellow"] {
  background-image: linear-gradient(to bottom, #febf10, #e49a16);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button[color="blue"] {
  background-image: linear-gradient(to bottom, #027cc5, #015485);
}

.button.big {
  padding-left: 46.2px;
}

.button.submit {
  padding-left: 77px;
}

.button.next {
  padding-left: 65px;
}

.button.centered {
  justify-content: center;
}
</style>
