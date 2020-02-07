// pages/movie/movie-more/movie-more.js
var app = getApp();
var utils = require("../../util/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    totalCount:0,
    isEmpty:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var categoryName = options.categoryname;
    this.setData({
      categoryName: categoryName
    });
    var url = app.globalUrl.doubanUrl;
    var allUrl = "";
    switch (options.categoryname) {
      case "正在热映":
        allUrl = url + '/v2/movie/in_theaters';
        break;
      case "即将上映":
        allUrl = url + '/v2/movie/coming_soon';
        break;
      case "排行榜":
        allUrl = url + '/v2/movie/top250';
        break;
    }

    this.setData({
      allUrl:allUrl
    })

    // 进行网络请求数据
    utils.http(allUrl, this.callback);
    wx.showNavigationBarLoading();

  },

  // 下拉刷新
  onPullDownRefresh:function(){
    var refreshUrl = this.data.allUrl;
    this.data.totalMovies = [];
    this.data.movies = [];
    this.data.isEmpty = true;
    utils.http(refreshUrl, this.callback);
  },

  // 上拉刷新
  onReachBottom: function (event) {
    // 上拉刷新url需要变化 1.start:0 2.start:20 3.start:40  count:20
    var nextUrl = this.data.allUrl + "?start=" + this.data.totalCount + "&count=20";
    utils.http(nextUrl, this.callback);
  },
  callback: function(res) {
    // console.log(res);
    var movies = [];
    for (var idx in res.subjects) {
      var subject = res.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6, "...");
      }

      var temp = {
        title: title,
        coverageUrl: subject.images.large,
        star: utils.convertToStarsArray(subject.rating.stars),
        average: subject.rating.average,
        movieid: subject.id
      }

      movies.push(temp);
    }

    var totalMovies = [];
    /**
     * concat合并数组
     * 第一次合并不需要累加
     * 非第一次合并需要累加
     * 
     */
    if(this.data.isEmpty){
      // 非第一次进入 以前更新到data中的movies+刚刚获取的movies
      totalMovies = this.data.movies.concat(movies)
    }else{
      // 第一次进入
      totalMovies = movies;
      this.data.isEmpty = false;
    }
    this.setData({
      movies: totalMovies
    });
    this.data.totalCount += 20;
    wx.hideNavigationBarLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 设置导航条
    wx.setNavigationBarTitle({
      title: this.data.categoryName,
    });
  },
  goMovieDetail:function(event){
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?movieid=' + movieId,
    })
  }
})