package com.salesforce.designsystemreactnative;

import android.util.AttributeSet;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class MyBasicViewManager extends SimpleViewManager<View>
{
    public MyBasicViewManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "MyBasicView";
    }

    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new LovelyView(context.getBaseContext());
    }
}