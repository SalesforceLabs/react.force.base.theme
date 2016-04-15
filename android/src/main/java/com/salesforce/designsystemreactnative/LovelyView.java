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

public class LovelyView extends View{
    private ShapeDrawable mDrawable;
    private Paint paint;
    //label text
    public LovelyView(Context context){
        super(context,null);
        int x = 10;
        int y = 10;
        int width = 300;
        int height = 50;

        paint = new Paint();
        paint.setFlags(Paint.ANTI_ALIAS_FLAG);
        mDrawable = new ShapeDrawable(new OvalShape());
        mDrawable.getPaint().setColor(0xff74AC23);
    }
    @Override
    protected void onDraw(Canvas canvas) {
        int size = 100;
        mDrawable.setBounds(0, 0, this.getWidth(), this.getHeight());
        mDrawable.draw(canvas);
        paint.setColor(Color.BLACK);
        paint.setTextSize(size);
        canvas.drawText("@",0,size, paint);
//        super.onDraw(canvas);

    }

}
