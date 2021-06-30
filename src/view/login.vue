<template>
  <scales>
    <div class="row box-bg">
      <h2 class="title-top text-center">
        科 技 冬 奥 大 数 据 监 管 平 台
      </h2>
      <div class="col-12 logo">
        <img
          src="../assets/img/tsinghua-logo-2.png"
          class="col-2 offset-5 img-responsive"
          width="200"
          height="140"
          alt=""
        />
      </div>
      <div class="logo"></div>
      <div class="login-box">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-12">
              <input
                type="text"
                class="form-control input-height"
                id="username"
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
                type="button"
                @click="login()"
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
import {base_api, failLogin, getFailLogin, getFail} from "../api/nevt.js";

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
    };
  },
  mounted() {
    getFailLogin(Date.now());
    this.loginBtn(getFail());
  },
  methods: {
    login() {
      this.loginBtn(getFail());
      this.loginData.username = $("#username").val();
      this.loginData.password = $("#password").val();
      this.loginData.address.cityName = returnCitySN["cname"];
      this.loginData.address.cityId = returnCitySN["cid"];
      this.loginData.address.loginIP = returnCitySN["cip"];
      this.loginData.remember = $("#remember").prop("checked");
      const that = this;
      axios({
        method: "post",
        url: base_api + "/login",
        data: that.loginData,
      })
        .then((res) => {
          if (res.data.code === 201) {
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
            that.$router.push("/index");
          } else {
            if (res.data.data > 10) {
              failLogin(60 * 5 * 1000);
            }
            that.$router.replace("/login");
            that.failTxt = res.data.message;
            that.fail = true;
            setTimeout(() => {
              that.fail = false;
            }, 5000);
          }
        })
        .catch((err) => {
          // console.log("err", err);
        });
    },
    loginBtn(bol) {
      if (bol) {
        $("#loginSub").attr("disabled", true);
        $("#loginSub").text("登录错误过多!禁止登录!");
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
