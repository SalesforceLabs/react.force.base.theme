package com.salesforce.designsystemreactnative;

import android.content.Context;
import android.graphics.drawable.shapes.OvalShape;
import android.graphics.drawable.ShapeDrawable;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Color;
import android.graphics.Paint.Style;
import android.util.AttributeSet;
import android.view.View;
import android.graphics.Typeface;
import com.facebook.react.views.text.ReactFontManager;


public class LovelyView extends View{
    private ShapeDrawable mDrawable;
    private Paint textPaint;
    //label text
    public LovelyView(Context context){
        super(context,null);
        textPaint = new Paint();
        textPaint.setFlags(Paint.ANTI_ALIAS_FLAG);
        textPaint.setTextAlign(Paint.Align.CENTER);
        Typeface typeface = ReactFontManager.getInstance().getTypeface("SalesforceDesignSystemIconsUtility", 0, context.getAssets());
        textPaint.setTypeface(typeface);
        mDrawable = new ShapeDrawable(new OvalShape());
        mDrawable.getPaint().setColor(0xff74AC23);
    }
    @Override
    protected void onDraw(Canvas canvas) {
        int size = 100;
        mDrawable.setBounds(0, 0, this.getWidth(), this.getHeight());
        mDrawable.draw(canvas);
        int viewWidthHalf = this.getMeasuredWidth()/2;
        int viewHeightHalf = this.getMeasuredHeight()/2;
        textPaint.setColor(Color.BLACK);
        textPaint.setTextSize(viewHeightHalf*2);
        canvas.drawText("\uEA03",viewWidthHalf,viewHeightHalf*2, textPaint);
    }

}
