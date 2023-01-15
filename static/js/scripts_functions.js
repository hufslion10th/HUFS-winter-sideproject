function start() {
    $(".start").hide();
    $(".question").show();
    next();
}

function about() {
    $(".start").hide();
    $(".about").show();
}
  
function back() {
    $(".start").show();
    $(".about").hide();
}
  
$("#A").click(function(){
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
  
$("#B").click(function(){
    next();
});

function next(){
    if (num==10){
      $(".question").hide();
      $(".result").show();
      var mbti = "";
      ($("#EI").val() <2) ? mbti+="I" : mbti+="E";
      ($("#SN").val() <2) ? mbti+="N" : mbti+="S";
      ($("#JP").val() <2) ? mbti+="P" : mbti+="J";
      $("#img").attr("src",result[mbti]["img"]);
      $("#programming_language").html(result[mbti]["programming_language"]);
      $("#explain").html(result[mbti]["explain"]);
    } else {
      $("#title1").html(q[num]["title1"]);
      $("#title2").html(q[num]["title2"]);
      $("#page").html(q[num]["page"]);
      $("#type").val(q[num]["type"]);
      $("#A").html(q[num]["A"]);
      $("#B").html(q[num]["B"]);
      num++;
    }
}