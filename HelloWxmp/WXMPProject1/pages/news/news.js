Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    circular:500,
    indicatorColor:"rgba(0,255,0,1)",
    indicatorActiveColor:"white",
    useData:""
  },
  goNewsDeatail:function(event){
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.setData可以让view重绘
    this.setData({
      useData:newsData.initData
    })
  }
})
