#import "SLDSIconViewManager.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTUtils.h"
#import "SLDSImgView.h"

@implementation SLDSIconViewManager
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
@end