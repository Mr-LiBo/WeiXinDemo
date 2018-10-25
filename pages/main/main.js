// pages/main/main.js

const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Mina",
    id:"test",
    text: "这是关于页",
    message: "大中华测试",
    pageIndex: 0,
    condition:true,
    a:9,
    b:3,
    c:7,
    id:"test",
    object:{
      key:"哈哈"
    },
    array:[
      1,"hihi", "li"
    ]

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //   wx.scanCode({
    //           success: (res) => {
    //                   console.log(res)
    //           }
    //   })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    util.sayHello(this.data.name);
    //   wx.showModal({
    //           title: '提示',
    //           content: '这是一个模态弹窗',
    //           success: function (res) {
    //                   if (res.confirm) {
    //                           console.log('用户点击确定')
    //                   } else if (res.cancel) {
    //                           console.log('用户点击取消')
    //                   }
    //           }
    //   })

    // wx.showLoading({
    //         title: '加载中',
    // })

    // wx.showToast({
    //         title: '成功',
    //         icon: 'success',
    //         duration: 2000
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {


    //   wx.getLocation({
    //           type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //           success: function (res) {
    //                   var latitude = res.latitude
    //                   var longitude = res.longitude
    //                   wx.openLocation({
    //                           latitude: latitude,
    //                           longitude: longitude,
    //                           scale: 28
    //                   })
    //           }
    //   })
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

  }
})