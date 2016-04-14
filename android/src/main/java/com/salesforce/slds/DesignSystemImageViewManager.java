package com.salesforce.slds;

import javax.annotation.Nullable;

import java.util.Map;

import android.graphics.Color;
import android.graphics.PorterDuff.Mode;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;

public class DesignSystemImageViewManager extends SimpleViewManager<DesignSystemImageView> {

  public static final String REACT_CLASS = "SLDSIconViewAndr";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  private ResourceDrawableIdHelper mResourceDrawableIdHelper;
  private @Nullable AbstractDraweeControllerBuilder mDraweeControllerBuilder;
  private final @Nullable Object mCallerContext;

  public DesignSystemImageViewManager(
          AbstractDraweeControllerBuilder draweeControllerBuilder,
          Object callerContext) {
    mDraweeControllerBuilder = draweeControllerBuilder;
    mCallerContext = callerContext;
    mResourceDrawableIdHelper = new ResourceDrawableIdHelper();
  }

  public DesignSystemImageViewManager() {
    // Lazily initialize as FrescoModule have not been initialized yet
    mDraweeControllerBuilder = null;
    mCallerContext = null;
    mResourceDrawableIdHelper = new ResourceDrawableIdHelper();
  }

  public AbstractDraweeControllerBuilder getDraweeControllerBuilder() {
    if (mDraweeControllerBuilder == null) {
      mDraweeControllerBuilder = Fresco.newDraweeControllerBuilder();
    }
    return mDraweeControllerBuilder;
  }

  public Object getCallerContext() {
    return mCallerContext;
  }

  @Override
  public DesignSystemImageView createViewInstance(ThemedReactContext context) {
    return new DesignSystemImageView(
            context,
            getDraweeControllerBuilder(),
            getCallerContext());
  }

}