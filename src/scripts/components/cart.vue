<template>
    <div class="cart-container">
        <div class="search-header">
            <ul>
                <li><i class="iconfont">&#xe65c;</i>
                    <input type="text" name="name" value="" placeholder="搜索笔记商品和用户" />
                </li>
                <li><i class="iconfont">&#xe73d;</i></li>
            </ul>
        </div>

        <div class="cart-content">
            选购去吧.....
        </div>
    </div>
</template>
<script>
import {changeIndex} from "../vuex/actions";

export default {
  vuex:{
    actions:{
      change:changeIndex
    }
  },
  ready(){
    this.change(2)
  }
}
</script>
