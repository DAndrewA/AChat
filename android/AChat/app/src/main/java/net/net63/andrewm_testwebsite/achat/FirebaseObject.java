package net.net63.andrewm_testwebsite.achat;

import com.firebase.client.DataSnapshot;
import com.firebase.client.Firebase;
import com.firebase.client.FirebaseError;
import com.firebase.client.ValueEventListener;

import java.util.Map;

/**
 * Created by andrewm on 3/31/15.
 */
public class FirebaseObject {
    // declaring variables for object
    private Firebase mFirebase;

    public FirebaseObject(String urlExtension){
        // creates the firebase object
        mFirebase = new Firebase("https://radiant-torch-1512.firebaseIO.com/chatapp/" + urlExtension);
    }

    public void setData(Map data,String position){
        mFirebase.child(position).setValue(data);
    }

    public Object readData(String position){
        final Map<String,Object> returnValues;
        mFirebase.child(position).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                returnValues = (Map<String,Object>)dataSnapshot.getValue();
            }

            @Override
            public void onCancelled(FirebaseError firebaseError) {

            }
        });
    }
}
