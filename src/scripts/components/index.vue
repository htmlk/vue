<!-- //单页面 包含整个app公共部分 -->
<template>
  <div class="box-container">


      <router-view transition="goto" transition-mode="out-in" keep-alive></router-view>


    <footer id="footer">
      <ul>
        <li v-bind:class="curIndex==$index?'active':''" v-on:click="changPage($index)" v-for="tab in tabList" v-link="{path:tab.path}"><i class="iconfont">{{{tab.icon}}}</i><span>{{tab.name}}</span></li>
      </ul>
    </footer>
  </div>
</template>


<script>
import {changeIndex} from "../vuex/actions.js";
import { getIndex } from '../vuex/getters';
  export default{
    vuex: {
      actions: {
        change:changeIndex
      },
      getters: {
        curIndex: getIndex
      }
    },
    data(){
      return{
        cur:0,
        tabList:[
          {
            path:'/index/main',
            icon:"&#xe6bb;",
            name:"首页"
          },
          {
            path:'/index/search',
            icon:"&#xe65c;",
            name:"发现"
          },
          {
            path:'/index/cart',
            icon:"&#xe6b9;",
            name:"购买"
          },
          {
            path:'/index/info',
            icon:"&#xe7bd;",
            name:"消息"
          },
          {
            path:'/index/my',
            icon:"&#xe787;",
            name:"我的"
          }
        ]
      }
    },
    ready(){

    },
    methods:{
      changPage(index){
          this.change(index);
          console.log(index);
      }
    }
  }
</script>
