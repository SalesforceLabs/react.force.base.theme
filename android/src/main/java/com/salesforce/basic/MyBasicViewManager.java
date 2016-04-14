package com.salesforce.basic;

import android.view.View;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class MyBasicViewManager extends SimpleViewManager<View>
{
    @Override
    public String getName()
    {
        return "MyBasicView";
    }

    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new View(context);
    }
}