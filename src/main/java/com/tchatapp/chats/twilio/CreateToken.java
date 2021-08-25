package com.tchatapp.chats.twilio;

import com.twilio.jwt.accesstoken.AccessToken;
import com.twilio.jwt.accesstoken.ChatGrant;

public class CreateToken {

	  public static String token(String identity) {
		String twilioAccountSid = "AC****************************";
		String twilioApiKey = "SK********************************";
		String twilioApiSecret = "D6G****************************";
		String serviceSid = "IS**********************************";
	    String appName = "chatX";
	    String endpointId = appName + ":" + identity + ":";

	    ChatGrant grant = new ChatGrant();
	    grant.setEndpointId(endpointId);
	    grant.setServiceSid(serviceSid);

// TODO: Uncomment lines below to connect to your Twilio account
//	    AccessToken token = new AccessToken.Builder(twilioAccountSid, twilioApiKey, twilioApiSecret)
//	        .identity(identity).grant(grant).build();
//		  return token;
	    
	    return "fake_token";
	  }

}