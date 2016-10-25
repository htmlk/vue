<template>
    <div class="bg-container">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" track-by="$index" v-for="item in slide">
                  <p>{{item.title}}</p>
                  <img  v-bind:src="item.pic" alt="">
                </div>
            </div>
             <div class="swiper-pagination"></div>
        </div>

        <div class="bg-box">
          <div class="regbox"><p v-link="{ name:'login1'}">注册</p></div>
          <div class="loginbox"><p v-link="{ name:'login1'}">登录</p></div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
          return {
              slide:[
                {
                  title:'和最会生活的人做朋友',
                  pic:'/images/xy_walkthroughs_card1.png'
                },{
                  title:'和最会生活的人做朋友',
                  pic:'/images/xy_walkthroughs_card2.png'
                },{
                  title:'和最会生活的人做朋友',
                  pic:'/images/xy_walkthroughs_card3.png'
                }
              ]
              }
            },
            ready: function() {
              setTimeout(function(){
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: 5000, //可选选项，自动滑动
                     pagination: '.swiper-pagination',
                })
              },0)

            }
    }
</script>
