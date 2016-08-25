var mysql=require('mysql');
exports.getUser=function(callback){
  var users;
  var connection=mysql.createConnection(
    {
      host:'localhost',
      user:'root',
      password:'fanher570916',
      database:'fanhe'
    }
  );
  connection.connect();
  connection.query('select * from t1 where name = "jack"',function(err,rows,filed){
    if(err){
      throw err;
    }else{
      users=rows;
      console.log(users);
      callback(rows);
    }
  });
  connection.end();
}

exports.userName=function(){
  return 'jinbao';
}
