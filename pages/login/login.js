// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_login:true,/* 显示登录表单 */
    is_reg:false,/* 显示注册表单 */
    is_login_success:false,/* 是否登录成功 */
    userName:'',/* 存储账户名 */
    userPwd:'',/* 存储密码 */
    userPhone:'',/* 存储电话 */
    userIdStr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(wx.getStorageSync("userName")){
      this.setData({
        is_login_success:true,/* 是否登录成功 */
        userName:wx.getStorageSync("userName"),
        userIdStr:wx.getStorageSync("userIdStr")
      })
    }
  },
// 切换登录和注册
do_change(e){
  if(e.detail.value){
    this.setData({
      is_login: false,
      is_reg: true
    })
  } else {
    this.setData({
      is_login: true,
      is_reg: false
    })
  }
},
do_input(e){
  //根据输入框的名字来匹配
  switch (e.target.dataset["name"]) {
    case 'userName':
      this.setData({
        userName:e.detail.value
      });
      break;
      case 'userPwd':
        this.setData({
          userPwd:e.detail.value
        });
        break; 
        case 'userPhone':
        this.setData({
          userPhone:e.detail.value
        });
        break; 
  }
},
do_submit(){
  var that=this;
  wx.request({
    url: 'http://localhost/crm/user/login',/*请求服务器地址 */
    method:"POST",/*请求方式 */
    header: { 'content-type': 'application/x-www-form-urlencoded' },/*表单模式 */
    data:{/*请求的数据 */
      userName:this.data.userName,
      userPwd:this.data.userPwd
    },success(response){/*请求成功 并返回response */
       if(response.data.code==200){
         wx.setStorageSync('userName', response.data.result.userName);
         wx.setStorageSync('userIdStr', response.data.result.userIdStr);
          that.setData({
            is_login_success:true,/* 是否登录成功 */
            userName:response.data.result.userName,
            userIdStr:response.data.result.userIdStr
          })
       }else{
         wx.showToast({
           title:'用户名或密码错误',
           icon:"error"
         })
       }
    }
  })
},
do_exit(){
  wx.removeStorageSync('userName');
  wx.removeStorageSync('userIdStr');
  this.setData({
    is_login_success:false,/* 是否登录成功 */
    userName:'',
    userIdStra:''
  })
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