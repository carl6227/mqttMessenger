
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
        $('.messageWrapper').append('<div class="col-sm-8 float-right">  <p class="payload sendWrapper">'+$('#pubMessage').val()+'</p><p class="text">'+"you"+'<span>'+new Date().toLocaleTimeString()+'</span>'+'</p></div>')
        $('#pubMessage').val("");
        $('#img').hide()
    })
    $("#clear").on('click',()=>{
        $('.messageWrapper div').empty();   
        $('#pubMessage').val("");
        $('#img').show();
    })
})
pubTopic = $("#pubTopic").val();
message = $("#pubMessage").val();
client.on('message', function (pubTopic, message) {
    $('#img').hide();
    $('.messageWrapper').append(' <div class="col-sm-8 float-left" > <p class="payload recieveWrapper">' + message.toString() + '</p><p class="text">' + pubTopic +'<span >'+new Date().toLocaleTimeString() +'</span></p></div>')
})


