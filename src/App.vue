<template>
  <div>
    <v-nav :selected.sync="selected">
      <v-nav-item name="home">首页</v-nav-item>
      <v-nav-item name="about">
        <v-nav-sub>
          <template slot="title">关于</template>
          <v-nav-item name="about1">公司文化</v-nav-item>
          <v-nav-item name="about2">企业简介</v-nav-item>
          <v-nav-item name="about3">联系我们</v-nav-item>
          <!--                    <v-nav-sub>-->
          <!--                        <template slot="title">联系方式</template>-->
          <!--                        <v-nav-item name="wechat">微信</v-nav-item>-->
          <!--                        <v-nav-item name="qq">QQ</v-nav-item>-->
          <!--                        <v-nav-sub>-->
          <!--                            <template slot="title">手机</template>-->
          <!--                            <v-nav-item name="cm">移动</v-nav-item>-->
          <!--                            <v-nav-item name="cu">联通</v-nav-item>-->
          <!--                            <v-nav-item name="cn">电信</v-nav-item>-->
          <!--                        </v-nav-sub>-->
          <!--                    </v-nav-sub>-->
        </v-nav-sub>
      </v-nav-item>
      <v-nav-item name="job">招聘</v-nav-item>
    </v-nav>
    <v-button>按钮</v-button>
  </div>
</template>

<script>
import vNav from "./nav/nav";
import vNavItem from "./nav/nav-item";
import vNavSub from "./nav/nav-sub";
import vButton from "./button/button";
export default {
  name: "demo",
  components: {
    vNav,
    vNavItem,
    vNavSub,
    vButton
  },
  data() {
    return {
      selected: ["about2"]
    };
  }
};
</script>
<style>
</style>
