function htmlEncode (value){
  return $("URL1").text(value).html();
}
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content1").text()) + "&chs=160x160&chld=L|0");

function htmlEncode (value){
  return $("URL2").text(value).html();
}
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content2").text()) + "&chs=160x160&chld=L|0");

function htmlEncode (value){
  return $("URL3").text(value).html();
}
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content3").text()) + "&chs=160x160&chld=L|0");

function htmlEncode (value){
  return $("URL4").text(value).html();
}
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content4").text()) + "&chs=160x160&chld=L|0");
