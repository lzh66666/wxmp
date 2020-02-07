Page({
  data: {
    username:'知了课堂',
    person:{
      username:'小程序课堂',
      age:'18'
    },
    books:[
      '西游记',
      '红楼梦',
      '水浒传',
      '三国演义'
    ]
  },
  onLoad: function () {
    // this.data.username='python学院'
    //1
    // var person = this.data.person;
    // person.username = 'python学院';
    // this.setData({
    //   person:person,
    // })

    //2
    this.setData({
      'person.username':'python学院',
    });

    this.setData({
      'books[3]':'金瓶梅',
    });

    console.log('onLoad');
  },

  gotoNextPage:function(event){
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})
