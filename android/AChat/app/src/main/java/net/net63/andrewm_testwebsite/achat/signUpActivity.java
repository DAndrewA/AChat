package net.net63.andrewm_testwebsite.achat;

import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


public class signUpActivity extends ActionBarActivity {
    // declaring member variables
    private Button mReturnButton;
    private Button mSignUpButton;
    private EditText mUserNameField;
    private EditText mPassword1Field;
    private EditText mPassword2Field;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        // declaring entry fields
        mUserNameField = (EditText)findViewById(R.id.userNameField);
        mPassword1Field = (EditText)findViewById(R.id.password1Field);
        mPassword2Field = (EditText)findViewById(R.id.password2Field);

        // finds the sign up button and sets code for onClick listener
        mSignUpButton = (Button)findViewById(R.id.signUpButton);
        mSignUpButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String userName = mUserNameField.getText().toString();

            }
        });

        // finds the return button and sets code to return to previous activity
        mReturnButton = (Button)findViewById(R.id.returnButton);
        mReturnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}
