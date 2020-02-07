Page({
  data: {

   },
  onLoad: function () {
    wx.request({
      url: 'http://v.juhe.cn/weather/index',
      data:{
        cityname:'太原',
        // key:'d89dd2b22d477018675b0ce2cb70450b'
      },
      success:function(res){
        console.log(res);
      }
    })
  },
  
})
