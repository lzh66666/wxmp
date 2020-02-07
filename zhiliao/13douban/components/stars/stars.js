// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0,
      observer(newVal,oldVal,changedPath){
        this.updateRate();
      }
    },
    starsize:{
      type:Number,
      value:20,//rpx默认
    },
    fontsize:{
      type:Number,
      value:20,//rpx默认
    },
    fontcolor:{
      type:String,
      value:'#ccc',//默认
    },
    istext:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate:function(){
      var that = this;
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(rate / 2);
      var half = intRate % 2;
      var gray = 5 - light - half;
      var lights = [];
      var halfs = [];
      var grays = [];
      for (var index = 1; index <= light; index++) {
        lights.push(index);
      }
      for (var index = 1; index <= half; index++) {
        halfs.push(index);
      }
      for (var index = 1; index <= gray; index++) {
        grays.push(index);
      }
      var ratetex = rate && rate > 0 ? rate.toFixed(1) : '未评分';
      that.setData({
        lights: lights,
        halfs: halfs,
        grays: grays,
        ratetex: ratetex,
      })
    }
  },

  lifetimes:{
    attached:function(){
      this.updateRate();
    }
  }
})
