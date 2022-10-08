$(document).ready(function() {
    var style = "",
      hover = "";
    updateStyle();
  
    $("input").keyup(function() {
      updateStyle();
    });
  
  });
  
  function updateStyle() {
    style = "height:" + $("#buttonHeight").val() +
      ";width:" + $("#buttonWidth").val() +
      ";color:" + $("#colorTxt").val() +
      ";background-color:" + $("#colorBg").val() +
      ";border: 1px solid " + $("#colorBdr").val() + ";border-radius:" + $("#radiusBdr").val() + ";";
  
    hover = "color:" + $("#hoverTxt").val() +
      ";background-color:" + $("#hoverBg").val();
  
    $("#demo> button").html($("#buttonText").val());
    $("#demo> button").attr("style", style);
    $("#demo> button").hover(function() {
      $("#demo> button").css("color", $("#hoverTxt").val());
      $("#demo> button").css("background-color", $("#hoverBg").val());
    }, function() {
      $("#demo> button").attr("style", style);
    });
  
    $("#cssOutput").val("button{" + style + "transition: all 1s ease;" +  "}button:hover{" + hover + "}");
  
  
  }