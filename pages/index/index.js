//index.js
//获取应用实例
const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })


Page({
  data: {
    imgUrls: [
      {
        logo: '../../res/index_1.jpg',
        id: 1
      },
      {
        logo: '../../res/index_2.jpg',
        id: 2
      },      
      {
        logo: '../../res/index_3.jpg',
        id: 3
      },
      {
        logo: '../../res/index_4.jpg',
        id: 4
      },
      {
        logo: '../../res/index_5.jpg',
        id: 5
      }      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    allaction: "所有活动",
    actionfilter: "活动筛选"
  },
  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function (e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function (e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function (e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }

  wxSearchTab: function () {
    wx.redirectTo({
      url: '../search/search'
    })
  },


  activity_tap: function (event) {
    var id = event.target.dataset['id'];
    var activity_url = "../activity_detail/activity_detail?id=" + id;

    wx.navigateTo({
      url: activity_url
    })
  }
})