package com.salesforce.designsystem.reactnative;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

public class SLDSBaseIconManager extends SimpleViewManager<View>
{
    public SLDSBaseIconManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "SLDSBaseIcon";
    }

    @ReactProp(name = "iconScale", defaultFloat = 1f)
    public void setIconScale(SLDSBaseIconView view, float iconScale) {
        view.setIconScale(iconScale);
    }

    @ReactProp(name = "iconCode")
    public void setIconCode(SLDSBaseIconView view, @Nullable String iconCode) {
        view.setIconCode(iconCode);
    }

    @ReactProp(name = "iconColor")
    public void setIconColor(SLDSBaseIconView view, @Nullable String iconColor) {
        view.setIconColor(iconColor);
    }

    @ReactProp(name = "fontName")
    public void setFontName(SLDSBaseIconView view, @Nullable String fontName) {
        view.setFontName(fontName);
    }

    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new SLDSBaseIconView(context.getBaseContext());
    }
}