#import <Foundation/Foundation.h>
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "SLDSIconUtilityManager.h"
#import "SLDSIconUtilityView.h"


@implementation RCTConvert (SLDSIconUtilityView)


@end

@implementation SLDSIconUtilityManager

RCT_EXPORT_MODULE();


- (UIView *)view
{
    return [[SLDSIconUtilityView alloc] init];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}


RCT_EXPORT_VIEW_PROPERTY(iconCode, NSString);
RCT_EXPORT_VIEW_PROPERTY(iconColor, NSString);



@end
