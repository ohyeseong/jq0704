$(document).ready(function(){
    // 이미지 첫번째 그림 보이게 하기(2)
    // 내입장에서 순번으로
    // $(".img_view li").hide();
    // $(".img_view li:nth-child(1)").show();

    // 컴퓨터입장에서 순번으로
    // $(".img_view li").hide();
    // $(".img_view li").eq(0).show();

    // eq(0)을 제외한 형제들
    $(".img_view li").eq(0).siblings().hide();


    // 버튼 첫번째 먼저 들어오게 만들기(1)
    $(".btn_group li").click(function(){
        $(".btn_group li").removeClass("act");
        $(this).addClass("act")

        // 버튼을 이미지와 연결하기(3)
        var n = $(this).index();
        console.log(n);

        $(".img_view li").hide();
        $(".img_view li").eq(n).show();
    })
})// jquery end