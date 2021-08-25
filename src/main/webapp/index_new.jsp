<!DOCTYPE html>
<head>
  <title>Welcome to Struts 2 chat using Unlaunch.io feature flags</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/custom.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://media.twiliocdn.com/sdk/js/chat/v1.2/twilio-chat.min.js"></script>
  <script src="assets/custom.js"></script>

  <style>
     body {
       background-color: #E6E6FA;
     }
  </style>
</head>
  <body>
   <h1 class="text-center">Welcome To New Struts Chat</h1>

    <div class="container" style="border: 2px solid blue;">
            <!--msgbox-->
      	<div id="msgItems" class="container-fluid"> </div>

            <!-- querybox-->
            <div class="row text-center" id="queryText">

               <div class="hideForm">
                    <div class="row">
                        <div class="col-xs-9">
                             <input type="text" class="form-control" placeholder="Input message" id="message">
                        </div>
                        <div class="col-xs-3">
                            <button type="button" class="btn btn-primary" id="submitMessage">Send Message</button>
                        </div>
                    </div>
               </div>

               <div class="initiateChat">
                   <div class="row"> <h4>Setting up chat, Please wait...</h4> </div>
               </div>

               <div id="chatName">
                     <form class="form-inline">
                        <div class="form-group">
                             <input type="text" class="form-control" id="userName" placeholder="Your Name">
                        </div>
                             <button type="button" class="btn btn-secondary" id="startChatting">Start</button>
                    </form>
               </div>

           </div>
    </div>
  </body>
</html>