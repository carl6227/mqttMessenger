
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

        client.publish($('#pubTopic').val(), $('#pubMessage').val())
        $('.messageWrapper').append(' <div class="col-sm-8 float-right">  <p class="payload sendWrapper">'+$('#pubMessage').val()+'</p> <p class="text">'+"you"+'<span class="span">'+new Date().toLocaleTimeString()+' </span> </p>  <img class="user1" src="profile.png"></div> ')
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
    $('.messageWrapper').append(' <div class="col-sm-8 float-left" > <img  class="user2"src="man.png"><p class="payload recieveWrapper">' + message.toString() + '</p><p class="text2">' + pubTopic +'<span class="float-right">'+new Date().toLocaleTimeString() +'</span></p> </div>')
})


