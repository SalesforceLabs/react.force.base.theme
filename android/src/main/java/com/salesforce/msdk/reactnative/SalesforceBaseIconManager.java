/*
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
package com.salesforce.msdk.reactnative;

import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

public class SalesforceBaseIconManager extends SimpleViewManager<View>
{
    public SalesforceBaseIconManager(ReactApplicationContext reactContext) {

    }

    @Override
    public String getName()
    {
        return "SalesforceBaseIcon";
    }

    @ReactProp(name = "iconScale", defaultFloat = 1f)
    public void setIconScale(SalesforceBaseIconView view, float iconScale) {
        view.setIconScale(iconScale);
    }

    @ReactProp(name = "iconCode")
    public void setIconCode(SalesforceBaseIconView view, @Nullable String iconCode) {
        view.setIconCode(iconCode);
    }

    @ReactProp(name = "iconColor")
    public void setIconColor(SalesforceBaseIconView view, @Nullable String iconColor) {
        view.setIconColor(iconColor);
    }

    @ReactProp(name = "fontName")
    public void setFontName(SalesforceBaseIconView view, @Nullable String fontName) {
        view.setFontName(fontName);
    }

    @Override
    public View createViewInstance(ThemedReactContext context)
    {
        return new SalesforceBaseIconView(context.getBaseContext());
    }
}