// pages/movie/movie-detail/movie-detail.js
var app = getApp();
var utils = require("../../util/utils.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.movieid);
    var movieId = options.movieid;
    var detailMovieUrl = app.globalUrl.doubanUrl + "/v2/movie/subject/" + movieId;
    utils.http(detailMovieUrl,this.callback);
  },

  callback:function(data){
    // console.log(data);

    // 在整理数据之前，需要判断数据是否存在
    if(!data){
      return;
    }

    // 处理一下导演
    var director = {
      avator:"",
      name:"",
      id:""
    }
    if(data.directors[0] != null){
      if(data.directors[0].avators != null){
        director.avator = data.directors[0].avators.large;
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }

    var temp = {
      movieImg : data.images.large,
      country : data.countries[0],
      title: data.title,
      originalTitle : data.original_title,
      wishCount : data.wish_count,
      commentCount : data.comments_count,
      year : data.year,
      generes : data.genres,
      stars: utils.convertToStarsArray(data.rating.stars),
      score : data.rating.score,
      director : director,
      casts: utils.convertToCastString(data.casts),
      castsInfo: utils.convertToCastsString(data.casts),
      summary : data.summary
    }
    // console.log(temp);
    this.setData({
      movie:temp
    });
    wx.setNavigationBarTitle({
      title: utils.cutTitleString(this.data.movie.title, 0, 6),
    })
  }
})