#import <Foundation/Foundation.h>
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "SLDSImgViewManager.h"
#import "SLDSImgView.h"

typedef NS_ENUM(NSInteger, ZIconUtilType) {
    ZIconUtilityAdd,
    ZIconUtilityAdduser,
    ZIconUtilityAnnouncement,
};

@implementation RCTConvert (SLDSImgViewView)

RCT_ENUM_CONVERTER(ZIconUtilType, (@{
    @"SLDSIconCategoryUtility"  : @(SLDSIconCategoryUtility),
    @"SLDSIconCategoryCustom"   : @(SLDSIconCategoryCustom),
    @"SLDSIconCategoryAction"   : @(SLDSIconCategoryAction),
    @"SLDSIconCategoryStandard" : @(SLDSIconCategoryStandard)
    }), ZIconUtilityAdd, integerValue);

RCT_ENUM_CONVERTER(SLDSIconCategory, (@{
    @"SLDSIconCategoryUtility"  : @(SLDSIconCategoryUtility),
    @"SLDSIconCategoryCustom"   : @(SLDSIconCategoryCustom),
    @"SLDSIconCategoryAction"   : @(SLDSIconCategoryAction),
    @"SLDSIconCategoryStandard" : @(SLDSIconCategoryStandard)
}), SLDSIconCategoryUtility, integerValue);

@end

@implementation SLDSImgViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;


- (UIView *)view
{
    return [[SLDSImgView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(src, NSString);
RCT_EXPORT_VIEW_PROPERTY(contentMode, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(category, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(icon, NSNumber);
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)



- (NSArray *) customDirectEventTypes {
    return @[
             @"onFrameChange"
    ];
}

- (NSDictionary *) constantsToExport {
    return @{
             @"ScaleAspectFit": @(UIViewContentModeScaleAspectFit),
             @"ScaleAspectFill": @(UIViewContentModeScaleAspectFill),
             @"ScaleToFill": @(UIViewContentModeScaleToFill),
             @"ZIconUtilityAdd": @(ZIconUtilityAdd),
             @"ZIconUtilityAdduser": @(ZIconUtilityAdduser),
             @"ZIconUtilityAnnouncement":@(ZIconUtilityAnnouncement),
             @"SLDSIconCategoryUtility"  : @(SLDSIconCategoryUtility),
             @"SLDSIconCategoryCustom"   : @(SLDSIconCategoryCustom),
             @"SLDSIconCategoryAction"   : @(SLDSIconCategoryAction),
             @"SLDSIconCategoryStandard" : @(SLDSIconCategoryStandard)
    };
}

@end
