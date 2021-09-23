let d = {
    c : '<tr>'+
        '<td>list2</td>'+
        '<td>list2</td>'+
        '<td>list2</td>'+
    '</tr>',
}

$(function(){
    $(".b").click(function(){
        const e = $(this).attr("data-add-type"),
            f = $(this).attr("data-add-target");
            $("#" + f).append(d[e])
    });

    //행추가할때 합쳐지는 것
    let num = 2;
    $(".b").click(function(){
        num++;
        $(".a").attr('rowspan', num); 
    }); 
    
});
    
    
