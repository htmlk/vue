<!-- //主页面 -->
<template>
    <div class="main-container">


        <div class="main-header">
            <ul>
                <li><i class="iconfont">&#xe65c;</i></li>
                <li>小红书</li>
                <li><i class="iconfont">&#xe77e;</i></li>
            </ul>
        </div>

        <div class="main-content" id="main-scroll">
          <div class="scroll-box">

          <div class="loading">
            <div class="yo-loadtip yo-loadtip-test">
              <i class="yo-ico">{{{loadingicon}}}</i>
              <div class="text">{{loadingtext}}</div>
           </div>
          </div>


            <div class="main-box">
                <dl v-for="item in list">
                    <dt>
                        <template v-for="test in item.images_list" v-if="$index==1">
                          <img v-bind:src="test.url" alt="">
                        </template>
                    </dt>
                    <dd>
                        <h2>{{item.title}}</h2>
                        <p>{{item.desc}}</p>
                        <div class="user">
                            <img v-bind:src="item.user.images" alt="">
                            <span>{{item.user.nickname}}</span>
                            <i class="iconfont">&#xe668;</i>
                            <span>{{item.fav_count}}</span>
                        </div>
                    </dd>
                </dl>
            </div>

          </div>
        </div>
    </div>
</template>
<script>
    //对上面的渲染
    // var Vue = require('../libs/vue.js');
    // var VueResource = require('../libs/vue-resource.js');
    // Vue.use(VueResource);
    //vuex状态
    import {changeIndex} from "../vuex/actions";
    export default {
      vuex:{
          actions:{
            change:changeIndex
          }
        },
        data() {
                return {
                    list: {},
                    loadingicon:'',
                    loadingtext:''
                }
            },
            ready: function() {
                this.change(0);
                var that = this;
                var myScroll;
                this.$http.get('http://www.htmlk.cn/vuejson/index.json')
                    .then(
                        (res) => {
                            this.list = res.body.data
                                  console.log(res.body.data);
                            setTimeout(function() {
                                myScroll = new IScroll('#main-scroll', {
                                    click: true,
                                    mouseWheel: true,
                                    scrollbars: false,
                                    probeType: 1
                                });
                                myScroll.scrollTo(0,-100);
                                myScroll.on("scroll", function() {

                                  if(this.y>=0){
                                      that.loadingicon='&#xf07b;'
                                      that.loadingtext="正在挖小红薯的路上..."

                                  }
                                })
                                myScroll.on("scrollEnd", function() {
                                      console.log(this.y);
                                    var y = this.y;
                                  //  console.log(this.y);
                                    if(this.y>-100&&this.y<0){
                                      that.loadingicon='&#xf07b;'
                                      that.loadingtext="正在挖小红薯的路上..."
                                      myScroll.scrollTo(0,-100,4000);
                                    }
                                    if (this.y ==0) {
                                      that.loadingicon='&#xf089;'
                                      that.loadingtext="正在搬运小红薯..."
                                        that.$http.get('http://www.htmlk.cn/vuejson/index2.json')
                                            .then(
                                                (res1) => {
                                                    var arr = res1.body.data.concat(that.list);
                                                    //console.log(arr)
                                                    that.list = arr;
                                                    that.loadingicon='&#xf078;'
                                                    that.loadingtext="小红薯都已经到达..."
                                                    myScroll.scrollTo(0,-100,4000);
                                                    setTimeout(function () {
                                                       myScroll.refresh();
                                                   }, 0);
                                                }
                                            )
                                    }

                                })

                            }, 0);
                        }, (res) => {
                            console.log(res.data); //error
                        }
                    )
            },
            methods: {

            }

    }
</script>
