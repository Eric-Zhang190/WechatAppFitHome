const db=wx.cloud.database()

Page({
  data: {
    addflag:true,  //判断是否显示搜索框右侧部分
    addimg:'../../images/activity_add.png',
    searchstr:'',
    dataObj: ""
  },

  getData(){

    db.collection("dbHomes").get().then(res=>{
      this.setData({
        dataObj:res.data
      })
    })

    // db.collection("dbHomes").get({
    //   success: res=>{
    //     console.log(res);
    //     this.setData({
    //       dataObj:res.data
    //     })
    //   }
    // })
  },

  addData(){
    wx.showLoading({
      title: '数据加载中。。。',
      mask:true
    })
    db.collection("dbHomes").add({
      data:{
        title:"房源3",
        detail_content:"此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3；此处有房源介绍-房源3",
      }
    }).then(res=>{
      wx.hideLoading()
    })
  },

  btnSubmit(res){
    console.log(res)
    var {title, detail_content} = res.detail.value;
    db.collection("dbHomes").add({
      data:{
        title:title,
        detail_content:detail_content
      }
    }).then(res=>{
      console.log(res)
    })
  },

  onLoad(){

   

  },
  onShow(){
   
  },

  tap(e) {

  },
 
  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    console.log(e.detail.value,'模糊查询字段')
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('搜索框回调函数')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },

  toDetail(event){
    // let index = event.currentTarget.dataset.index;
    
    wx.navigateTo({
      url: '/pages/detail/detail?index=1',
    })
  },


})