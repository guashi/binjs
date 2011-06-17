function wait(n){
  var start=new   Date().getTime();
  while(true)   if(new   Date().getTime()-start> 400)   break;
}

function log(message){
  return "log: " + message; 
}

