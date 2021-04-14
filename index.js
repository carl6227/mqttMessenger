
var client = mqtt.connect($('#broker').val())

;
$("#connectBtn").on('click', function () {
    $("#status").val('Connecting...')
    client.on('connect', function () {

        $("#status").val('Connected!')

    })
    $('#subTopic').on('change', function () {
        client.subscribe($('#subTopic').val())
    })
    $("#pub-button").on('click', () => {
        client.publish($('#pubTopic').val(), $('#pubMessage').val())
        $('#pubMessage').val("");
        $('#img').hide()
        
    })
    $("#clear").on('click', () => {
        $('.messageWrapper div').empty();
        $('#pubMessage').val("");
        $('#img').show();
    })
})

subTopic = $("#subTopic").val();
message = $("#pubMessage").val();
client.on('message', function (subTopic, message) {
    $('#img').hide();
    now= new Date().toLocaleTimeString();
    if (subTopic == $("#pubTopic").val()) {
        $('.messageWrapper').append(' <div class="col-sm-8 float-right  "><img class="user1" src="profile.png">  <p class=" sendWrapper">' + message.toString() + '</p>  <p class="text">' + subTopic + '|<span>' +now.substr(0,now.length-2) + ' </span> </p> </div> ')
    } else {
        $('.messageWrapper').append(' <div class="col-sm-8 float-left" > <img  class="user2"src="man.png"><p class="recieveWrapper">' + message.toString() + '</p><p class="text2">' + subTopic + '|<span >' + now.substr(0,now.length-2) + '</span></p> </div>')
    }
})


