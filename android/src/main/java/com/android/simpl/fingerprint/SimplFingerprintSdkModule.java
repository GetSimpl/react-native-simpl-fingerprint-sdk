package com.android.simpl.fingerprint;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.simpl.android.fingerprint.SimplFingerprint;
import com.simpl.android.fingerprint.SimplFingerprintListener;

public class SimplFingerprintSdkModule extends ReactContextBaseJavaModule {

    public SimplFingerprintSdkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Simpl";
    }

    @ReactMethod
    public void generateFingerprint(final String clientId, final String phoneNumber, final String emailId, final Callback callback) {
        SimplFingerprint.init(getReactApplicationContext(), phoneNumber, emailId);
        SimplFingerprint.getInstance().generateFingerprint(new SimplFingerprintListener() {
            @Override
            public void fingerprintData(String fingerprint) {
                callback.invoke(fingerprint);
            }
        });
    }

}
