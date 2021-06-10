$(function() {
    sayHello()
})

function sayHello() {
    $('#helloBtn').on('click', function() {
        $('#helloWorldText').text("Hello World!!!")
        $('#helloWorldText').css({"color": "red", "font-size": "20px"})
    })
}