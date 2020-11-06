//***************TIMER************************
var flag = 0;
var count = 60;
function countDown(){
  if(count > 0 && flag != 1){
      count--;
      document.getElementById("timer1").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer2").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer3").innerHTML = ""+count+" seconds left!";
      document.getElementById("timer4").innerHTML = ""+count+" seconds left!";  
      setTimeout("countDown()", 1000);
  }
  else if(count <= 0){
      document.getElementById('time').style.display = "block";
      localStorage.setItem("blocker", "true");
  }
}

  $(document).ready(function(){

    // **************audio******************
  
      var x = document.getElementById('myAudio');
  
    // **************door1******************
  
      $(".door1").click(function(){
        $(this).addClass("hover1"); 
        x.play();
        $(".door1__left").addClass("hover1");
        $(".door1__right").addClass("hover1");
        $(".riddle1").fadeIn(3000);
        countDown();
      });
  
    // **************door2******************
  
      $(".door2").click(function(){
        $(this).addClass("hover2"); 
        x.play();
        $(".door2__left").addClass("hover2");
        $(".door2__right").addClass("hover2");
        $(".riddle2").fadeIn(3000);
        countDown();
      });
  
    // **************door3******************
  
      $(".door3").click(function(){
        $(this).addClass("hover3"); 
        x.play();
        $(".door3__left").addClass("hover3");
        $(".door3__right").addClass("hover3");
        $(".riddle3").fadeIn(3000);
        countDown();
      });
  
    // **************door4******************
  
      $(".door4").click(function(){
        $(this).addClass("hover4"); 
        x.play();
        $(".door4__left").addClass("hover4");
        $(".door4__right").addClass("hover4");
        $(".riddle4").fadeIn(3000);
        countDown();
      });
  
    })

  // *******************INPUT VALIDATION*********************


function validate1(){
  if(localStorage.getItem("blocker")==null)
{
    localStorage.setItem("blocker", "true");
    var input1 = document.getElementById('answer1').value;
  if(input1 == "")
    alert("Please fill out the field!");
  else if(input1.toUpperCase() == "GILLYWEED"){
      document.getElementById('cor').style.display = "block";
      flag = 1;
  }
  else{
    document.getElementById('wro').style.display = "block";
    flag = 1;
  }
    
}
else if(localStorage.getItem("blocker")!=null){
  alert("You have already tried");
  
}
  
}
function validate2(){
  if(localStorage.getItem("blocker")==null)
{
    localStorage.setItem("blocker", "true");
  var input2 = document.getElementById('answer2').value;
  if(input2 == "")
    alert("Please fill out the field!");
  else if(input2.toUpperCase() == "PORTKEY"){
      document.getElementById('cor').style.display = "block";
      flag = 1;
  }
  else{
    document.getElementById('wro').style.display = "block";
    flag = 1;
  }
  }
else if(localStorage.getItem("blocker")!=null){
  alert("You have already tried");
  
}
}
function validate3(){
  var input3 = document.getElementById('answer3').value;
  if(input3 == "")
    alert("Please fill out the field!");
  else if(input3.toUpperCase() == "UNICORN"){
      document.getElementById('cor').style.display = "block";
      flag = 1;
  }
  else{
    document.getElementById('wro').style.display = "block";
    flag = 1;
  }
}
function validate4(){
  var input4 = document.getElementById('answer4').value;
  if(input4 == "")
    alert("Please fill out the field!");
  else if(input4.toUpperCase() == "SLYTHERIN LOCKET"){
      document.getElementById('cor').style.display = "block";
      flag = 1;
  }
  else{
    document.getElementById('wro').style.display = "block";
    flag = 1;
  }
}
  
  
