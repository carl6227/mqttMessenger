
var client = mqtt.connect($('#broker').val())
 ;
$("#connectBtn").on('click', function () {
    $("#status").val('Connecting...')
    client.on('connect', function () {
     
        $("#status").val('Connected!')
    })
    $('#subTopic').on('change',function(){
        client.subscribe($('#subTopic').val())
    })
    $("#pub-button").on('click', () => {
        client.subscribe($('#subTopic').val())
        client.publish($('#pubTopic').val(), $('#pubMessage').val())
        $('.messageWrapper').append('<div class="col-sm-8 float-right<div class="sendWrapper">'+$('#pubMessage').val()+' </div><p class="text"id="you">'+"you"+'<span>'+new Date().toLocaleTimeString()+'</span>'+'</p></div>')
   
    })
})
pubTopic = $("#pubTopic").val();
message = $("#pubMessage").val();
client.on('message', function (pubTopic, message) {
    $('.messageWrapper').append(' <div class="col-sm-8 float-left " > <div class="recieveWrapper"><p class="payload">' + message.toString() + '</p></div><p class="text">' + pubTopic +'<span >'+new Date().toLocaleTimeString() +'</span></p></div>')
})


