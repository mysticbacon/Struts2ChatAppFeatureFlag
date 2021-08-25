package com.tchatapp.chats.action;

import com.opensymphony.xwork2.ActionSupport;
import io.unlaunch.UnlaunchClient;

import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Main extends ActionSupport {

    private static UnlaunchClient ulClient;

    private static synchronized UnlaunchClient getUnlaunchClient() {
        if (ulClient == null) {
            ulClient = UnlaunchClient.create("prod-server-0003a012-0160-4c26-a04c-641fac5a2147");
            try {
                ulClient.awaitUntilReady(5, TimeUnit.SECONDS);
            } catch (InterruptedException | TimeoutException e) {
                System.out.println("Client wasn't ready, " + e.getMessage());
            }
        }
        return ulClient;
    }

    public String execute() {
        UnlaunchClient client = getUnlaunchClient();

        // get variation
        String variation = client.getVariation("chat-new-layout-2", UUID.randomUUID().toString());
        System.out.println("unlaunch variation " + variation);
        if (variation.equals("on")) {
            return "ON";
        } else {
            return "OFF";
        }
    }
}
