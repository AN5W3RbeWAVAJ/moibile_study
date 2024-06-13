// pages/customer/customer.js
Page({
  data: {
    customerList: []
  },
  onLoad: function() {
    wx.request({
      url: 'http://localhost/crm/customer/list', // 您的后端接口地址
      method: 'GET',
      header: { 
        'content-type': 'application/x-www-form-urlencoded' ,
        "cookie":"userIdStr="+wx.getStorageSync('userIdStr')
      },/*表单模式 */
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({
            customerList: res.data.result
          });
        } else {
          // 处理错误情况
          wx.showToast({
            title: '数据加载失败',
            icon: 'none'
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})