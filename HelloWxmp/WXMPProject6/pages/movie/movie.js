// pages/movie/movie.js
var app = getApp();
var utils = require("../util/utils.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheater:[],
    comingSoon:[],
    top250:[],
    searchData:[],
    containerShow:true,
    searchPanelShow:false
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheater = app.globalUrl.doubanUrl + '/v2/movie/in_theaters?start=0&count=3';
    var comingSoon = app.globalUrl.doubanUrl + '/v2/movie/coming_soon?start=0&count=3';
    var top250 = app.globalUrl.doubanUrl + '/v2/movie/top250?start=0&count=3';

    this.http(inTheater, this.callback,"inTheater","正在热映");
    this.http(comingSoon, this.callback, "comingSoon","即将上映");
    this.http(top250, this.callback, "top250","排行榜");
    wx.showNavigationBarLoading();
  },

  http: function (url, callback, category,categoryName) {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/xml'
      },
      success(res) {
        callback(res.data, category, categoryName)
      }
    })
  },
  callback: function (res, category, categoryName){
    // console.log(res);
    var movies = [];
    for(var idx in res.subjects){
      var subject = res.subjects[idx];
      var title = utils.cutTitleString(subject.title, 0, 6);
      var temp = {
        title : title,
        coverageUrl: subject.images.large,
        star: utils.convertToStarsArray(subject.rating.stars),
        average: subject.rating.average,
        movieid: subject.id
      }

      movies.push(temp);
    }

    var readyData = {};
    readyData[category] = {
      categoryName: categoryName,
      movies:movies
    }
    this.setData(readyData);
    wx.hideNavigationBarLoading();
  },

  movieMoreTap:function(event){
    var categoryName = event.currentTarget.dataset.categoryname;
    wx.navigateTo({
      url: 'movie-more/movie-more?categoryname=' + categoryName,
    })
  },

  goMovieDetail: function (event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: 'movie-detail/movie-detail?movieid=' + movieId,
    })
  },
// 获取焦点
  onBindFocus:function(event){
    this.setData({
      containerShow: false,
      searchPanelShow :true
    })
    
  },
// 失去焦点
  onBindBlur:function(event){
    // 网络请求
    // 获取用户输入信息
    var text = event.detail.value;
    // 确定url
    var searchUrl = app.globalUrl.doubanUrl + "/v2/movie/search?q=" + text;
    this.http(searchUrl, this.callback,"searchData","");
    wx.showNavigationBarLoading();
  },

  onCancelImgTap:function(event){
    this.setData({
      containerShow: true,
      searchPanelShow: false,
    })
  }
})