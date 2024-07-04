$(document).ready(function(){
    $(".list li").mouseover(function(){
        $(this).children("a").addClass("bg");
        // addClass, removeClass에는 클래스.을 붙이지 않고 바로 클래스 명을 입력한다
        
        $(".list li").mouseleave(function(){
            $(this).find("a").removeClass("bg");
            // children은 직계자손을 찾을때, find는 후손을 찾을때
        })
    })

        $(".list2 li a").click(function(){
            $(this).toggleClass("txt");
        })

        $(".list3 li a").hover(function(){
            $(this).addClass("over");
        },function(){
            $(this).removeClass("over");
        })

        $(".list4 li a").hover(function(){
            $(this).addClass("b");
        },function(){
            $(this).removeClass("b");
        })

        $(".list4 li a").click(function(){
            $(this).toggleClass("grid_t");
        })
})// jquery end