var newsData = require("../../newsData/newsData.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scenceTitle:"相关景点",
    picture:[
      {
        image1: "../../image/mianshan.jpg",
        pictureTitle:"绵山风景区"
      },
      {
        image1: "../../image/yungang.jpeg",
        pictureTitle: "云冈风景区"
      },
      {
        image1: "../../image/jinci.jpg",
        pictureTitle: "晋祠风景区"
      },
      {
        image1: "../../image/wutaishan.jpg",
        pictureTitle: "五台山风景区"
      },
      {
        image1: "../../image/1.jpg",
        pictureTitle: "清真风景区"
      },
      {
        image1: "../../image/pingyao.jpg",
        pictureTitle: "平遥风景区"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(newsData.initData[options.newsid])
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