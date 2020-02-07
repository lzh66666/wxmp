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

    // 电影
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7',
      success:function(res){
        var movies = res.data.subject_collection_items;
        that.setData({
          movies:movies,
        })
      }
    });

  // 电视剧
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7',
      success: function (res) {
        var tvs = res.data.subject_collection_items;
        that.setData({
          tvs: tvs,
        })
      }
    });
  // 综艺
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items?count=7',
      success: function (res) {
        var shows = res.data.subject_collection_items;
        that.setData({
          shows: shows,
        })
      }
    })
  },

  
})