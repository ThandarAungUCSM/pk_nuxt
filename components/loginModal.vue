<template>
  <div>
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                <div class="right-block">
                  <p class="welcome-back">歡迎回來</p>

                  <input v-model="accNo" placeholder="帳號" class="accountCss1" />
                  <input v-model="password" placeholder="密碼" class="accountCss2" />
                  <p class="forget-pwd">忘記密碼?</p>

                  <div class="btn-div">
                    <p class="newer-css">新玩家？<span class="register-css" @click="register">註冊</span></p>
                    <div class="register-btn">登入</div>
                  </div>
                </div>
              </slot>
            </div>
            <!-- <button class="modal-default-button" @click="$emit('close')">
              OK
            </button> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["show"],
}
</script>
<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(57, 47, 134, 0.62);
  backdrop-filter: blur(3px);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background: #F2F1F7;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;

  width: 90%;

}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0;
  padding: 5px 0 1rem;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
<style lang="scss" scoped>
.right-block {
  // border: 2px solid #FFFFFF;
  border-radius: 6px; 
  width: 20%;

  // background: #F2F1F7;
  // box-shadow: 0px 4px 4px rgba(33, 66, 116, 0.25);
  // border-radius: 12px;
  // padding: 1rem 1rem 1.5rem;

  // margin: 0 auto;
  display: flex;
  flex-direction: column;

  display: none;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

    display: block;
  }
  .welcome-back {
    font-weight: 700;
    font-size: 20px;
    color: #957FEF;
    text-align: center;
  }
  .accountCss1, .accountCss2 {
    font-weight: 500;
    font-size: 20px;
    color: #FFF;

    background: #7161EF;
    border-radius: 6px;

    border: none;
    width: 100%;

    padding-left: 10px;
    height: 60px;
    min-height: 60px;
    margin: 0 auto;
  }
  .accountCss1:focus, .accountCss2:focus {
    outline: none;
  }
  .accountCss1::placeholder, .accountCss2::placeholder {
    font-weight: 500;
    font-size: 20px;
    color: #FFF;
  }
  .accountCss2 {
    margin-top: 30px;
  }
  .forget-pwd {
    font-weight: 400;
    font-size: 1rem;
    color: #957FEF;
    width: 100%;
    margin: 1rem auto 0;
  }
  .btn-div {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .newer-css {
      font-weight: 400;
      font-size: 1rem;
      color: #CFC7F3;
      padding: 2rem 0 1rem;
    }
    .register-css {
      font-weight: 400;
      font-size: 1rem;
      color: #957FEF;
    }
    .register-btn {
      background: #E9B531;
      border-radius: 24px;
      height: 56px;
      font-weight: 700;
      font-size: 20px;
      color: #FFF;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>