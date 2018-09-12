<template>
  <div>
    <label class="checkbox-wrapper">
      <input
        :value="value"
        ref="input"
        type="checkbox"
        @change="onChange"
      >

      <span class="checkmark" />

      <div class="text">
        I accept the Terms and <br > Conditions
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'MnCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  
  methods: {
    onChange(e) {
      this.$emit('input', e.target.checked)
    },
  },
}
</script>

<style scoped>
.checkbox-wrapper {
  cursor: pointer;
  display: block;
  position: relative;
  font-size: 16px;
  font-weight: bold;
  color: #035384;
}

.checkbox-wrapper input {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 34px;
    height: 40px;
    width: 40px;
    cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 34px;
  height: 40px;
  width: 40px;
  border: 2px solid white;
  background-color: rgba(16, 81, 119, 0.8);
}

.checkmark::after {
  content: '';
  position: absolute;
  display: none;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 20px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) translate(-115%, -30%);
}

.checkbox-wrapper .text {
  font-size: 16px;
  font-family: Orgon-Thin;
  color: white;
  letter-spacing: 1px;
  transform: translate(15px, 12px)
}

.checkbox-wrapper input:checked ~ .checkmark::after {
  display: block;
}
</style>
