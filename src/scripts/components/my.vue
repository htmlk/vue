
<template>
    <div class="my-container">
        <div id="app">
            <waterfall :align="align" :line-gap="200" :min-line-gap="100" :max-line-gap="220" :single-max-width="300" :watch="items" @reflowed="reflowed" v-ref:"waterfall">
                <!-- each component is wrapped by a waterfall slot -->
                <waterfall-slot v-for="(index,item) in items" :width="item.width" :height="item.height" :order="index"  track-by="$index" move-class="item-move">
                    <div class="item" :style="item.style" :index="item.index"></div>
                </waterfall-slot>
            </waterfall>
        </div>

    </div>
</template>

<script>
// import Waterfall from '../libs/waterfall.vue';
// import WaterfallSlot from '../libs/waterfall-slot.vue';
    export default {
            // el(){
            //   return '#app'
            // },
            components: {
                'waterfall': Waterfall.waterfall,
                'waterfall-slot': Waterfall.waterfallSlot
            },
            data() {
                return {
                    align: 'center',
                    items: [
                       { "index": 0, "style": { "background": "rgba(195,123,177,.5)" }, "width": 116, "height": 129 },
                       { "index": 1, "style": { "background": "rgba(195,123,177,.5)" }, "width": 143, "height": 121 },
                       { "index": 2, "style": { "background": "rgba(255,230,135,.5)" }, "width": 114, "height": 127 },
                       { "index": 3, "style": { "background": "rgba(125,205,244,.5)" }, "width": 135, "height": 146 },
                       { "index": 4, "style": { "background": "rgba(255,230,135,.5)" }, "width": 116, "height": 131 },
                       { "index": 5, "style": { "background": "rgba(125,205,244,.5)" }, "width": 106, "height": 141 },
                       { "index": 6, "style": { "background": "rgba(255,230,135,.5)" }, "width": 117, "height": 138 },
                       { "index": 7, "style": { "background": "rgba(255,230,135,.5)" }, "width": 120, "height": 112 },
                      { "index": 8, "style": { "background": "rgba(125,205,244,.5)" }, "width": 132, "height": 100 },
                      { "index": 9, "style": { "background": "rgba(125,205,244,.5)" }, "width": 111, "height": 118 },
                      { "index": 10, "style": { "background": "rgba(194,217,78,.5)" }, "width": 144, "height": 133 }
                    ],
                    isBusy: false
                }
            },
            ready(){
              console.log(this.items)
            },
            methods: {
                    addItems: function () {
                    if (!this.isBusy && this.items.length < 500) {
                      this.isBusy = true
                      this.items.push.apply(this.items, ItemFactory.get(50))
                    }
                  },
                  shuffle: function () {
                    this.items.sort(function () {
                      return Math.random() - 0.5
                    })
                  },
                  reflowed: function () {
                    this.isBusy = false
                  }
            }


    }
</script>
