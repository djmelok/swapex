<template lang="pug">
.login
  .login__logo
    img(src="~/assets/images/logo.png")
  .login__checkbox
    input#checkbox.login__checkbox-input(v-model="checkbox", type="checkbox", name="checkbox")
    label.login__checkbox-label(for="checkbox")
      span.login__checkbox-label-text
        | Я прочитал и согласен с&nbsp;
        a(href="#") условиями пользованиями&nbsp;
        | и&nbsp;
        a(href="#") политикой конфиденциальности
  a.login__button(:class="getClassName", href="/auth/google")
    i.fab.fa-google
    span Google
  a.login__button.login__button--disabled(:class="getClassName", href="/auth/telegram")
    i.fab.fa-telegram-plane
    span Telegram
</template>

<script>
export default {
  data() {
    return {
      checkbox: false
    };
  },
  computed: {
    getClassName() {
      return {
        'login__button--disagree': !this.checkbox
      };
    }
  }
};
</script>

<style lang="scss">
.login {
  height: calc((var(--vh, 1vh) * 100));
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__logo {
    width: 256px;
    height: 256px;

    img {
      width: 100%;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;

    &-input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & + .login__checkbox-label::before {
          border-color: #ff6800;
          background-color: #ff6800;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }
      }
    }

    &-label {
      margin: 24px 0;
      display: inline-flex;
      align-items: center;
      user-select: none;

      &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 6px;
        margin-right: 12px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }

      &-text {
        color: #fff;

        a {
          font-weight: 500;
          color: #ff6800;
        }
      }
    }
  }

  &__button {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    margin-top: 12px;
    color: #fff;
    padding: 12px;
    background-color: #ff6800;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &--disabled,
    &--disagree {
      background-color: #aaa;
      pointer-events: none;
    }

    &--disagree {
      background-color: #ccc;
    }

    span {
      text-transform: uppercase;
      font-weight: 500;
      margin-left: 12px;
    }
  }
}
</style>
