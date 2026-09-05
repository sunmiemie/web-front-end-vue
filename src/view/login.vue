<template>
  <scales>
    <div class="row box-bg">
      <h2 class="title-top text-center">
        北 清 智 创 氢 能 监 管 大 数 据 平台
      </h2>
      <div class="col-12 logo">
        <img
          src="../assets/img/logo.png"
          class="col-4 offset-4 img-responsive"
          width="100%"
          height="143"
          alt=""
        />
      </div>
      <div class="logo"></div>
      <div class="login-box">
        <form class="form-horizontal" @submit.prevent="login">
          <div class="form-group">
            <div class="col-12">
              <input
                type="text"
                class="form-control input-height"
                id="username"
                autocomplete="username"
                aria-label="账号"
                placeholder="请输入账号"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-12">
              <input
                type="password"
                class="form-control input-height input-margin-top"
                id="password"
                autocomplete="current-password"
                aria-label="密码"
                placeholder="请输入密码"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-12">
              <div class="checkbox">
                <label>
                  <input id="remember" type="checkbox"/>
                  记住我
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-12 text-center">
              <button
                id="loginSub"
                type="submit"
                :disabled="submitting || locked"
                class="btn col-12 login-btn btn-success text-white"
              >
                登 录
              </button>
            </div>
            <div
              v-show="fail"
              v-text="failTxt"
              class="text-center text-danger margin-top-30"
            ></div>
          </div>
        </form>
      </div>
    </div>
  </scales>
</template>

<script>
import Scales from "../components/public/Scales.vue";
import TopNav from "../components/public/TopNav.vue";
import $ from "jquery";
import axios from "axios";
import {base_api, failLogin, getFailLogin, getFail, removeToken} from "../api/nevt.js";

export default {
  components: {Scales, TopNav},
  data() {
    return {
      loginData: {
        username: null,
        password: null,
        address: {
          cityName: null,
          cityId: null,
          loginIP: null
        },
      },
      fail: false,
      failTxt: null,
      submitting: false,
      locked: false,
      failTimer: null,
      lockTimer: null,
    };
  },
  mounted() {
    getFailLogin(Date.now());
    this.loginBtn(getFail());
  },
  beforeDestroy() {
    this._loginDisposed = true;
    clearTimeout(this.failTimer);
    clearTimeout(this.lockTimer);
  },
  methods: {
    login() {
      if (this.submitting || this._loginDisposed) return;
      const locked = getFail();
      this.loginBtn(locked);
      if (locked) return;
      this.loginData.username = String($("#username").val() || '').trim();
      this.loginData.password = $("#password").val();
      if (!this.loginData.username || !this.loginData.password) {
        this.failTxt = '请输入账号和密码';
        this.fail = true;
        return;
      }
      // IP 查询脚本不可用时仍允许登录，由服务端处理缺失的位置字段。
      const address = typeof returnCitySN === 'object' && returnCitySN ? returnCitySN : {};
      this.loginData.address.cityName = address.cname || null;
      this.loginData.address.cityId = address.cid || null;
      this.loginData.address.loginIP = address.cip || null;
      this.loginData.remember = $("#remember").prop("checked");
      clearTimeout(this.failTimer);
      this.fail = false;
      this.submitting = true;
      const that = this;
      return axios({
        method: "post",
        url: base_api + "/login",
        data: that.loginData,
      })
        .then((res) => {
          if (that._loginDisposed) return;
          if (res.data.code === 201) {
            if (!res.data.data || typeof res.data.data.token !== "string" || !res.data.data.token.trim()) throw new Error("登录响应缺少凭证");
            // 清除另一种存储中的旧身份，避免新登录继续使用旧 token。
            removeToken();
            if (that.loginData.remember) {
              localStorage.setItem("token", res.data.data.token);
              localStorage.setItem(
                "username",
                that.loginData.username
              );
            } else {
              sessionStorage.setItem(
                "token",
                res.data.data.token
              );
              sessionStorage.setItem(
                "username",
                that.loginData.username
              );
            }
            return that.$router.push("/index");
          } else {
            if (res.data.data > 10) {
              failLogin(60 * 5 * 1000);
            }
            that.$router.replace("/login");
            that.failTxt = res.data.message;
            that.fail = true;
            that.failTimer = setTimeout(() => {
              that.fail = false;
            }, 5000);
          }
        })
        .catch(() => {
          if (that._loginDisposed) return;
          that.failTxt = '登录请求失败，请检查网络后重试';
          that.fail = true;
        })
        .then(() => {
          if (that._loginDisposed) return;
          that.submitting = false;
          that.loginBtn(getFail());
        });
    },
    loginBtn(bol) {
      this.locked = bol;
      clearTimeout(this.lockTimer);
      if (bol) {
        $("#loginSub").attr("disabled", true);
        $("#loginSub").text("登录错误过多!禁止登录!");
        const remaining = Number(localStorage.getItem('fail-login-number')) - Date.now();
        this.lockTimer = setTimeout(() => this.loginBtn(getFail()), Math.max(1, remaining));
      } else {
        $("#loginSub").attr("disabled", false);
        $("#loginSub").text("登录");
      }
    },
  },
};
</script>
<style>
.login-box {
  position: absolute;
  height: 400px;
  width: 600px;
  left: 50%;
  top: 250px;
  margin-left: -300px;
  background: transparent;
}

.title-top {
  position: relative;
  top: -100px;
  width: 1000px;
  left: 50%;
  margin-left: -500px;
  text-shadow: 0 0 2px aqua;
}

.input-height {
  height: 70px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.input-height::placeholder {
  color: aliceblue;
}

.input-margin-top {
  margin-top: 60px;
}

.box-bg {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  top: 150px;
  height: 800px;
  width: 100%;
  z-index: 2000;
}

.login-btn {
  height: 60px;
  font-size: 20px;
  font-weight: bold;
}

.logo {
  position: relative;
  top: -300px;
}
</style>
