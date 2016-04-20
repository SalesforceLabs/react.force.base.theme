#import "RCTConvert.h"
#import "RCTBridge.h"
#import "SLDSBaseIconManager.h"
#import "SLDSBaseIconView.h"


@implementation RCTConvert (SLDSBaseIconView)


@end

@implementation SLDSBaseIconManager

RCT_EXPORT_MODULE();


- (UIView *)view
{
    return [[SLDSBaseIconView alloc] init];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}


RCT_EXPORT_VIEW_PROPERTY(iconCode, NSString);
RCT_EXPORT_VIEW_PROPERTY(iconColor, NSString);
RCT_EXPORT_VIEW_PROPERTY(iconScale, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(fontName, NSString);


@end