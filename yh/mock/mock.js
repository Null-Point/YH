var data=require("./data.js");
var dataone=require("./dataone.js");
var listmap=require("./listmap.js");
var wai=require("./wai.js");
var map=require("./map.js");
module.exports=function(){
  return {
        "data":data,
        "dataone":dataone,
        "listmap":listmap,
        "wai":wai,
        "map":map
  }
}
