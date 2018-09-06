function htmlEncode (value){
  return $('<div/>').text(value).html();
}
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").text()) + "&chs=160x160&chld=L|0");