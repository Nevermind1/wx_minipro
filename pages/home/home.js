Page({
  data:{
    name:'王德发',
    student:[
      {id:110,name:'张三',age:19},
      {id:111,name:'李四',age:29},
      {id:112,name:'王二',age:39},
      {id:113,name:'麻子',age:49}
    ],
    count:0
  },
  getUser(event){
    console.log(event)
  },

    add(){
      this.setData({
        count:this.data.count+1
      })
      // return this.data.count++
    },
    jian(){
      this.setData({
        count:this.data.count -1
      })
    }
  
})