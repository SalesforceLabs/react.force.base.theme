package com.salesforce.designsystem.reactnative;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

public class SLDSIconUtilityManager extends SimpleViewManager<View>
{
    public SLDSIconUtilityManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "SLDSIconUtility";
    }

    @ReactProp(name = "iconScale", defaultFloat = 1f)
    public void setIconScale(SLDSIconUtilityView view, float iconScale) {
        view.setIconScale(iconScale);
    }

    @ReactProp(name = "iconCode")
    public void setIconCode(SLDSIconUtilityView view, @Nullable String iconCode) {
        view.setIconCode(iconCode);
    }

    @ReactProp(name = "iconColor")
    public void setIconColor(SLDSIconUtilityView view, @Nullable String iconColor) {
        view.setIconColor(iconColor);
    }

    @ReactProp(name = "fontName")
    public void setFontName(SLDSIconUtilityView view, @Nullable String fontName) {
        view.setFontName(fontName);
    }
    /*
        @ReactProp(name = "iconScale")
        public void setIconScale(SLDSIconUtilityView view, @Nullable Float iconScale) {
            view.setIconScale(iconScale);
        }
    */
    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new SLDSIconUtilityView(context.getBaseContext());
    }
}