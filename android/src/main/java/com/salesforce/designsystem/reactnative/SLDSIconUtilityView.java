package com.salesforce.designsystem.reactnative;

import android.content.Context;
import android.graphics.drawable.ShapeDrawable;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Color;
import android.view.View;
import android.graphics.Typeface;
import com.facebook.react.views.text.ReactFontManager;


public class SLDSIconUtilityView extends View{
    private ShapeDrawable mDrawable;
    private Paint textPaint;
    private String iconCode;
    private String fontName;
    private int iconColor;
    private float iconScale = 0.65f;

    public SLDSIconUtilityView(Context context){
        super(context,null);
        textPaint = new Paint();
        textPaint.setFlags(Paint.ANTI_ALIAS_FLAG);
        textPaint.setTextAlign(Paint.Align.CENTER);
//        Typeface typeface = ReactFontManager.getInstance().getTypeface("SalesforceDesignSystemIconsUtility", 0, context.getAssets());
//        textPaint.setTypeface(typeface);
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

    public void setIconScale(Float scale ){
        iconScale = scale.floatValue();
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
