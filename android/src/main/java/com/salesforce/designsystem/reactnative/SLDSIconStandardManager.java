package com.salesforce.designsystem.reactnative;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;


public class SLDSIconStandardManager extends SimpleViewManager<View>
{
    public SLDSIconStandardManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "SLDSIconStandard";
    }

    @ReactProp(name = "iconName")
    public void setIconName(SLDSIconStandardView view, @Nullable String iconName) {
        view.setIconName(iconName);
    }

    @ReactProp(name = "iconCode")
    public void setIconCode(SLDSIconStandardView view, @Nullable String iconCode) {
        view.setIconCode(iconCode);
    }

    @ReactProp(name = "iconColor")
    public void setIconColor(SLDSIconStandardView view, @Nullable String iconColor) {
        view.setIconColor(iconColor);
    }

    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new SLDSIconStandardView(context.getBaseContext());
    }
}