#import <Foundation/Foundation.h>
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "SLDSIconStandardManager.h"
#import "SLDSIconStandardView.h"


@implementation RCTConvert (SLDSIconStandardView)


@end

@implementation SLDSIconStandardManager

RCT_EXPORT_MODULE();


- (UIView *)view
{
    return [[SLDSIconStandardView alloc] init];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}


RCT_EXPORT_VIEW_PROPERTY(iconCode, NSString);
RCT_EXPORT_VIEW_PROPERTY(iconColor, NSString);



@end
