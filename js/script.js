$(function(){
  $(".box").click(function(){
    $(".modal").fadeIn();
  });
  $(".close").click(function(){
    $(".modal").fadeOut();
  });
});

$(function(){
  var menu_list = $(".TopMenu > li");
  var body = $("body");

  //menu_listがクリックされた時の処理
  menu_list.click(function(){
    //クリックされた要素のhrefを取得
    var menu = $(this).attr("href");
    //スクロール位置
    var scroll_point = $(menu).offset().top;

    body.animate({
      scrollTop: scroll_point
    }, 300);
  });
});

top.click(function(){
  //クリックされたら色を薄くする
  top.css("opacity", "0.2");
  //ページの上部に移動
  body.animate({
    scrollTop: 0
  },{
    duration: 300,
    //移動が完了したらopacityを戻す
    complete: function(){
      top.css("opacity", "0.5");
    }
  });
});
