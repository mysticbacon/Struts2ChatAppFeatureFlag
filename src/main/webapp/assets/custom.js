$(function() {
	
	var chatChannel = ""; // we will assign this to the channel payload later...

	$("#startChatting").click(function() {
	    	   
	    if( $("#userName").val() ) { // if user provides a username
             const username = $("#userName").val()  
	         fetchAccessToken(username);  
            
	    		 $("#chatName").hide();
	        	 $(".initiateChat").show();
	    	}
	});
     // Other code coming below soon…
	   // get existing channel or create new channel
	function getExistingChannelOrCreateNew(chatClient) {
	    return chatClient
	        .getPublicChannelDescriptors()
	        .then(function(paginator) {
	           if (paginator.items.length > 0) {
	        	       return paginator.items[0];
	            }
	            else {
	            	
	               chatClient
	                .createChannel({
	                   uniqueName: "general",
	                   friendlyName: "General Chat Channel"
	               })
	               .then(function(newChannel) {
	                   console.log("Created general channel:");
	                   console.log(newChannel);
	                   return newChannel;
	               });
	            }
	        })
	        .then( function(channel) {
	        	    return channel;
	        })
	        .catch(error => console.log("error getting channel", error) || error);
	}
	
	// initialize the chat
	function initializeChat(token) {
		
	   Twilio.Chat.Client.create( token )
	   .then( function(client) {
		   getExistingChannelOrCreateNew(client)
		   .then( function(channel) {
	              return channel.getChannel();
		   })
		   .then( function(channel) {
			   return channel.join(); //join the channel
		   })
		   .then( function(channel){
			   chatChannel = channel;

			     chatChannel.on("messageAdded", function(message) {
	                // append message...
	                appendMessage(message.state);
	             });

			   $(".hideForm").show();
			   $(".initiateChat").hide();
		   });
	   });
	}
	
	// fetch access token
	function fetchAccessToken(username) {
	    $.post('token', {identity: username})
	      .done(function(response) {
	        console.log('Successfully finished fetch of the Access Token.');
	         // Initialize the chat SDK
	         initializeChat(response.token);
	        
	      })
	      .fail(function(error) {
	        console.log('Failed to fetch the Access Token with error: ' + error);
	      });
	}
	
	// sending message
	$("#submitMessage").click( function() {
	   var message = $("#message").val();
	   chatChannel.sendMessage(message); // send to Twilio Server
	   $("#message").val("");
	});
	
	// listen for messages and append to HTML DOM as we receive them
	function appendMessage(data) {
	   $("#msgItems").append(
		 `<div id="chat-item" class="row">
		      <div class="cols-xs-4">	
		         <p>
	                 <b> ${data.author} </b>
	                    <img src="http://placehold.it/30X30" class="img-circle img-responsive">
		              ${data.body}
		          </p>   
		      </div>
		 </div>`
	   );
	}
});
