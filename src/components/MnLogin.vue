<template>
  <div class="login-wrapper">
    <form
      class="login-box"
      @submit.prevent="onFormSubmit"
    >
      <div class="item">
        <div class="text">
          Email
        </div>

        <div class="input">
          <input
            v-model="form.email"
            autocomplete="username"
            required
            type="email"
          >
        </div>
      </div>

      <div class="item">
        <div class="text">
          Password
        </div>

        <div class="input">
          <input
            v-model="form.password"
            autocomplete="current-password"
            required
            type="password"
          >
        </div>
      </div>

      <div class="buttons">
        <button
          type="submit"
        >
          Login
        </button>

        <button
          @click.prevent="onExitClick"
        >
          Exit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MnLogin',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onExitClick() {
      this.$emit('exitClick')
    },
    onFormSubmit() {
      this.$emit('loginClick', this.form)
    },
  },
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-box {
  background-color: rgba(0,0,0, .6);
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
}

.text {
  min-width: 100px;
  display: flex;
  align-items: center;
}

input {
  border: 1px solid black;
  padding: 5px;
  background-color: white;
}

.buttons {
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.buttons button {
  cursor: pointer;
  padding: 5px 20px;
  border: 1px solid black;
  font-size: 17px;
  font-family: Orgon-Light;
}
</style>
