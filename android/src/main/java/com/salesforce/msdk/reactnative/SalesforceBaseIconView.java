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

import android.content.Context;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Color;
import android.view.View;
import android.graphics.Typeface;
import com.facebook.react.views.text.ReactFontManager;


public class SalesforceBaseIconView extends View{
    private Paint textPaint;
    private String iconCode;
    private int iconColor;
    private float iconScale = 1.0f;

    public SalesforceBaseIconView(Context context){
        super(context,null);
        textPaint = new Paint();
        textPaint.setFlags(Paint.ANTI_ALIAS_FLAG);
        textPaint.setTextAlign(Paint.Align.CENTER);
    }

    public void setIconCode(String code ){
        iconCode = code;
    }

    public void setFontName(String fontName ){
        Typeface typeface = ReactFontManager.getInstance().getTypeface(fontName, 0, this.getContext().getAssets());
        textPaint.setTypeface(typeface);
    }

    public void setIconColor(String color ){
        iconColor = Color.parseColor(color);
    }

    public void setIconScale(float scale ){
        iconScale = scale;
    }


    @Override
    protected void onDraw(Canvas canvas) {
        float size = this.getMeasuredHeight()*iconScale;
        int viewWidthHalf = this.getMeasuredWidth() / 2;
        int viewHeightHalf = this.getMeasuredHeight() / 2;
        textPaint.setColor(iconColor);
        textPaint.setTextSize(size);
        float top = viewHeightHalf + size/2;
        canvas.drawText(iconCode, viewWidthHalf, top, textPaint);
    }

}
