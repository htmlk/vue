<template>
  <div class="login-box">
      <div class="login-header">
        <ul>
          <li>返回</li>
          <li>登录</li>
          <li v-link="{name:'main'}">直接进入主页</li>
        </ul>
      </div>
      <div class="login-content">
        <ul>
          <li><p>———————</p><p>手机号快速登录</p><p>——————</p></li>
          <li><input type="tell"  placeholder="请输入手机号"/></li>
          <li><input type="button" name="name" value="下一步" ></li>
          <li><p>快速注册</p><p>使用账号密码登录</p></li>
        </ul>
      </div>
  </div>
</template>
