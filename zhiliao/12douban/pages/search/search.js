// pages/search/search.js
import {network} from "../../utils/network.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'searched',
      success: function(res) {
        var data = res.data;
        that.setData({
          histories:data
        })
      },
    })
  },

  onSearchInputEvent:function(event){
    var that = this;
    var value = event.detail.value;
    network.getSearch({
      q:value,
      success:function(subjects){
        that.setData({
          subjects:subjects
        })
      }
    })
  },

  onItemTapEvent:function(event){
    var that = this;
    var id = event.currentTarget.dataset.id;
    var title = event.currentTarget.dataset.title;
    var histories = that.data.histories;
    histories.push({title:title,id:id});
    wx.setStorage({
      key: 'searched',
      data: histories,
      success:function(){
      }
    });
    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id='+id,
    });
  }
})