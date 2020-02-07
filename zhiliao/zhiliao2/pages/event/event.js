// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {
        'id':1,
        'title':'钢铁是怎样炼成的'
      },
      {
        'id':2,
        'title':'互联网风口推动者的生意' 
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * view被点击的事件
   */
  onViewClick:function(event){
    console.log('hello')
  },

  /**
   * 文章被点击的事件
   */
  onArticleCick:function(event){
    var dataset = event.currentTarget.dataset;
    var id = dataset.id;
    // console.log(dataset);
    wx.navigateTo({
      url: '/pages/article_template/article_template?id='+id,
    })
  },

  /**
   * 外面的事件被点击
   */
  onOutterViewClick:function(event){
    console.log('outterview被点击了');
    console.log(event);
  },

  /**
   * 里面的事件被点击
   */
  onInnerViewClick:function(event){
    console.log('innerview被点击了');
    console.log(event);
  },

  onAdvertiseClick:function(event){
    console.log('广告被点击了');
    
  }
})