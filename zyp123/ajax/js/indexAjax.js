$(function() {
    $('#submit').click(function() {
        $.ajax({
            url: '你的提交url地址',
            type: 'post',
            dataType:'json',
            data: $("#formTest").serializeArray(),
            success: function(msg) {
            }
        });
    });
});