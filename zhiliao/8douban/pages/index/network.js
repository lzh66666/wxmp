import {globalUrls} from "../../utils/urls.js"

const network={
  getMovieList:function(params){
    wx.request({
      url: globalUrls.movieList,
      data:{
        count:7
      },
      success: function (res) {
        var movies = res.data.subject_collection_items;
        if(params && params.success){
          params.success(movies);
        }
      }
    });
  },
  getTvList:function(params){
    wx.request({
      url: globalUrls.tvList,
      data: {
        count: 7
      },
      success: function (res) {
        var tvs = res.data.subject_collection_items;
        if (params && params.success) {
          params.success(tvs);
        }
      }
    });
  },
  getShowList:function(params){
    wx.request({
      url: globalUrls.showList,
      data: {
        count: 7
      },
      success: function (res) {
        var shows = res.data.subject_collection_items;
        if (params && params.success) {
          params.success(shows);
        }
      }
    })
  }
}

export {network}