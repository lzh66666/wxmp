// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'liness': [1, 2, 3, 4],
    'lines':[
      {
        'id':1,
        'name':'switch1'
      },
      {
        'id': 2,
        'name': 'switch2'
      },
      {
        'id': 3,
        'name': 'switch3'
      },
      {
        'id': 4,
        'name': 'switch4'
      },
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  tapEvent:function(event){
    var lines = this.data.lines;
    lines.splice(0,0,{
      'id':5,
      'name':'switch5'
    });
    this.setData({
      'lines':lines
    });

    var liness = this.data.liness;
    liness.splice(0, 0, 5);
    this.setData({
      liness: liness
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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