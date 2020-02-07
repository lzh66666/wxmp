Page({
  goNewsTap: function (event) {
    // console.log("跳转吧");
    // wx.navigateTo({
    //   url: '../news/news',
    // })
    wx.switchTab({
      url: '../news/news'
    })
  }
})