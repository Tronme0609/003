// menu菜单 
$(function () {
    // 获取触发事件的元素
    $(".menu-btn")
        // 绑定事件
        .click(function () {
            //查找要修改的元素
            $(this).children(":last-child")
                // 修改元素
                .toggleClass("hide");
            
                // $(this).find("i").addClass(".menumenuicon-del")
        });
   
})