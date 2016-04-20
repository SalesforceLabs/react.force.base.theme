package com.salesforce.designsystem.reactnative;

import android.content.Context;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Color;
import android.view.View;
import android.graphics.Typeface;
import com.facebook.react.views.text.ReactFontManager;


public class SLDSBaseIconView extends View{
    private Paint textPaint;
    private String iconCode;
    private int iconColor;
    private float iconScale = 1.0f;

    public SLDSBaseIconView(Context context){
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
