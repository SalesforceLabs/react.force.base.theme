#import "RCTEventDispatcher.h"
#import "RCTView.h"


typedef NS_ENUM(NSInteger, SLDSIconCategory) {
    SLDSIconCategoryUtility,
    SLDSIconCategoryCustom,
    SLDSIconCategoryAction,
    SLDSIconCategoryStandard
};

@class RCTEventDispatcher;


@interface SLDSImgView : UIView

@property (nonatomic, assign) NSString *src;
@property (nonatomic, assign) NSNumber *contentMode;
@property (nonatomic, assign) NSNumber *icon;
@property (nonatomic, assign) BOOL *isPitchEnabled;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

- (id)initWithFrame:(CGRect)frame  __attribute__((unavailable("Use -initWithEventDispatcher: instead")));


- (id)initWithCoder:(NSCoder *)aDecoder  __attribute__((unavailable("Use -initWithEventDispatcher: instead")));


@end
