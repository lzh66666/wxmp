//app.js
App({
  onLaunch: function (options) {
    // console.log(options);
    // console.log('onLaunch');
  },
  onShow: function (options) {
    // console.log('######################');
    // console.log(options);
    // console.log('onShow');
  },

  onHide:function(){
    // console.log("onHide");
  },
  onError: function (msg) {
    // console.log(msg);
  },
  globalData: {
    userInfo: null
  }
})