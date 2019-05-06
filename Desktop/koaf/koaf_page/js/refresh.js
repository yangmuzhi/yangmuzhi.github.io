// 从数据库中获取数据，进行更新leader board

// refresh
var refresh_leader_board = function(){
// x = my_connect()
// 假设已经链接数据库

//
clean_table()
gen_table(1);
// 获取
var element = document.getElementsByClassName("particpate");
console.log(element.length);
console.log(element[0]);
for(var i=0;i<element.length;i++){
console.log(i);
};
}

// 生成与参与者数量相同的particpate
var gen_table = function(length){

  var new_table = document.getElementById('new_data_table')
  console.log(new_table)
  var table_html = "<td>Tiger Nixon</td><td>1</td><td>80.0</td><td>12:00.Apr.29.2019</td><td>10+</td>"
  for(var i=0;i<length;i++){
    var new_line = document.createElement("tr");
    new_line.className = "particpate"
    new_line.innerHTML = table_html
    new_table.append(new_line)
}
}

//
var clean_table = function(){
var new_table = document.getElementById('new_data_table')
var len = document.getElementsByClassName("particpate").length;
for(var i=0;i<len;i++){
var need_element = document.getElementsByClassName("particpate");
console.log({"need":need_element})
new_table.removeChild(need_element[0]);
};

}
