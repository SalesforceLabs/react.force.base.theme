package com.salesforce.designsystemreactnative;

import android.content.Context;
import android.graphics.drawable.shapes.OvalShape;
import android.graphics.drawable.ShapeDrawable;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.util.AttributeSet;
import android.view.View;

public class LovelyView extends View{
    private ShapeDrawable mDrawable;
    //label text
    public LovelyView(Context context){
        super(context,null);
        int x = 10;
        int y = 10;
        int width = 300;
        int height = 50;

        mDrawable = new ShapeDrawable(new OvalShape());
        mDrawable.getPaint().setColor(0xff74AC23);
        mDrawable.setBounds(x, y, x + width, y + height);
    }
    @Override
    protected void onDraw(Canvas canvas) {
        mDrawable.draw(canvas);
    }

}
