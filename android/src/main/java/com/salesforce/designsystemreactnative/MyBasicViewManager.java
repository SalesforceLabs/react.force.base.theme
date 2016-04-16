package com.salesforce.designsystemreactnative;

import android.util.AttributeSet;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;
import javax.annotation.Nullable;


public class MyBasicViewManager extends SimpleViewManager<View>
{
    public MyBasicViewManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "MyBasicView";
    }

    @ReactProp(name = "iconName")
    public void setIconName(LovelyView view, @Nullable String iconName) {
//        Log.i("PROP","iconName");
        view.setIconName(iconName);
    }

    @ReactProp(name = "iconCode")
    public void setIconCode(LovelyView view, @Nullable String iconCode) {
        view.setIconCode(iconCode);
    }


    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new LovelyView(context.getBaseContext());
    }
}