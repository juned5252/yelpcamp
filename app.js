var express = require("express");
var app = express();

app.set("view engine","ejs");

app.listen(3000,function(){
    console.log("yelpcamp server started");
});


app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  var campgrounds = [
      {name:"Salmon Creek", image:"https://i.ytimg.com/vi/n6RtLye_qJM/maxresdefault.jpg"},
      {name:"Granite Hill", image:"http://access.parks.ca.gov/parkpictures//PrairieCreekCabin.jpg"},
      {name:"Dead man's cliff", image:"http://52583a043dc5b868d166-4f8f580dda5ee644b03eed875d323fab.r95.cf2.rackcdn.com/55fb1f8aa097a/55fb1f8aa097a-poster.jpg"},
      {name:"euakton valley", image:"http://haaslakepark.com/wp-content/uploads/2015/01/RV-by-Water2.jpg"},
      {name:"passapuiqua Peaks", image:"http://trekohio.com/wp-content/uploads/20161002-farnsworth-metropark-riverside-campsite-dscf0838.jpg"}
  ]

  res.render("campgrounds",{campgrounds:campgrounds});
});