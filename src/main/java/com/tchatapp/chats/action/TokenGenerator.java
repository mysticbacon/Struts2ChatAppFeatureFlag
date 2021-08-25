package com.tchatapp.chats.action;

import com.opensymphony.xwork2.ActionSupport;
import com.tchatapp.chats.twilio.CreateToken;

public class TokenGenerator extends ActionSupport{

	private String token = "", identity;
	
	public String execute() {
	    
		this.token = CreateToken.token( this.getIdentity() );
		
		return SUCCESS;
	}

    public String getToken() {
    	   return this.token;
    }
    
    public String getIdentity() {
  	  return this.identity;
    }
  
   public void setIdentity(String identity) {
  	 this.identity = identity;
   }
}