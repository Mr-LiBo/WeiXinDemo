//logs.js
const util = require('../../utils/util.js')

Page({
        data: {
                defaultSize: 'default',
                primarySize: 'default',
                warnSize: 'default',
                disabled: false,
                plain: false,
                loading: false,
                logs: []
        },

 


        primary: function (e) {
 
                      wx.scanCode({
                          success: (res) => {
                                  console.log(res)
                          }
                  })
        },
      
 

        onLoad: function () {
                this.setData({
                        logs: (wx.getStorageSync('logs') || []).map(log => {
                                return util.formatTime(new Date(log))
                        })
                })
        }
})
