var newsData = require("../../data/newsData.js");
var judge = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayer:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(newsData.initData[options.newsid]);
    this.setData({
      newsid: options.newsid
    })

    // 测试本地存储
    // wx.setStorageSync(key, data);
    // wx.getStorageSync(key);
    // wx.removeStorageSync(key);
    // wx.clearStorageSync();

    //收藏存储数据格式
    /**
     * var newsCollect = {
     *  0:true,
     *  1:false,
     *  2:false
     * }
     */

    //第一次进入的时候判断是否在本地存储并是否收藏
    var newsCollect = wx.getStorageSync("newsCollect");
    //如果newsCollect存在，则代表以前收藏过或者是以前取消过收藏
    if(newsCollect){
      var newCollect = newsCollect[options.newsid];
      this.setData({
        collected:newCollect
      })
    }else{
      //第一次进入，根本不存在数据
      var newsCollect = {};
      //我把当前ID扔到newsCollect对象中，然后默认指定false
      newsCollect[options.newsid] = false;
      //扔到本地存储中去
      wx.setStorageSync("newsCollect", newsCollect)
    }
  },

  collectTap:function(event){
    // console.log(this.data.newsid);
    //注意：newsCollect是所有数据的结合
    var newsCollect = wx.getStorageSync('newsCollect');
    //注意：newCollect是当前数据的结合
    var newCollect = newsCollect[this.data.newsid];
    //点击的时候，如果收藏则取消，如果未收藏则收藏
    newCollect = !newCollect;
    //更新到本地存储中
    newsCollect[this.data.newsid] = newCollect;
    wx.setStorageSync('newsCollect', newsCollect);

    //更新视图
    this.setData({
      //暂时不知道，因为本来不知道视图是怎么改变的

      //修该collected
      collected: newsCollect[this.data.newsid]
    })

    wx.showToast({
      title: newsCollect[this.data.newsid] ?'收藏成功':'取消收藏',
      icon: 'success',
      duration: 800,
      mask:true
    })
    
  },

  onShowTap:function(event){
    /**
     * wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
     */

    wx.showActionSheet({
      itemList: ['分享到微信', '分享到微博', '分享到QQ'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  //右上角分享
  onShareAppMessage:function() {
    return {
      title: newsData.initData[this.data.newsid].title,
      imageUrl: '' // 图片 URL
    }
  },

  //音乐播放
  playerMusicTap: function (event) {
    var that = this;
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = newsData.initData[that.data.newsid].music.title;
    backgroundAudioManager.epname = newsData.initData[that.data.newsid].music.title;
    backgroundAudioManager.coverImgUrl = newsData.initData[that.data.newsid].music.coverImgUrl;
    backgroundAudioManager.src = newsData.initData[that.data.newsid].music.url;

    // 播放
    if(judge){
      backgroundAudioManager.play();
      backgroundAudioManager.onPlay(function () {
        that.setData({
          isplayingmusic: true
        })
      });
      that.setData({
        isPlayer:true
      });
      judge = false;
    }else{
      backgroundAudioManager.pause()
      backgroundAudioManager.onPause(function () {
        that.setData({
          isplayingmusic: false
        })
      });
      that.setData({
        isPlayer: false
      });
      judge = true;
    }
    

    
/*//不能使用，未知原因
  playerMusicTap: function (event) {
    var that = this;
    //判断当前音乐是否在播放
    wx.getBackgroundAudioPlayerState({
      success: function(res) {
        var status = res.status;
        if (status != 1) {
          //没有在播放
          wx.playBackgroundAudio({
            dataUrl: newsData.initData[that.data.newsid].music.url,
            title: newsData.initData[that.data.newsid].music.title,
            coverImgUrl: newsData.initData[that.data.newsid].music.coverImgUrl
          })
        } else {
          wx.pauseBackgroundAudio()
        }
      }
    })
  }
*/
  }
})