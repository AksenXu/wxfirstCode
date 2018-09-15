// pages/faqi/faqi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    faqi_num: 1,
    canyu_num: 2,
    fabu_image: "../../res/buluo_fabu_button_image.png",
    jilu_image: "../../res/buluo_canyu_button_image.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  release_activity_tap: function () {
    wx.redirectTo({
      url: '../faqi_activity/faqi_activity'
    })
  },
  signup_activity_tap: function () {
    wx.redirectTo({
      url: '../signup_activity/faqi_activity'
    })
  },

})