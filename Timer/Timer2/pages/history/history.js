//导入数据
var newsData = require("../newsData/newsData.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"太原简史",
    tab1:"历史文化",
    tab2:"推荐路线",
    currentTab: 0 ,
    userData:""
  },

  changTab: function (event) {
    this.setData({
      currentTab: event.target.dataset.current
    })
  },

  goHistoryArticle: function (event) {
    var newsId = event.currentTarget.dataset.newsid;
    wx.navigateTo({
      url: 'history-article/history-article?newsid=' + newsId
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.setData可以让view重绘
    this.setData({
      useData: newsData.initData
    })
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