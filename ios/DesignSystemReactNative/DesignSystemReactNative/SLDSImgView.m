#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"
#import "RCTLog.h"

#import "SLDSImgView.h"

@implementation SLDSImgView  {
    
    RCTEventDispatcher *_eventDispatcher;
    UILabel *label;
    int iconCategory;
    int iconName;
//    UIImageView *imgView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    if ((self = [super init])) {
        _eventDispatcher = eventDispatcher;
    }
    return self;
}

- (void)removeFromSuperview
{
    _eventDispatcher = nil;
    [super removeFromSuperview];
}


- (void)layoutSubviews
{
    if(label){
        [label removeFromSuperview];
    }
    label = [UILabel init];
    label.text = @"OK!";
    
//    UIImage *icon = [self getIcon];
//    imgView = [[UIImageView alloc] initWithImage:icon];
 //   label.frame = self.bounds;
    [self addSubview:label];
}

-(void)setCategory:(NSNumber *)category{
    NSLog(@"CATEGORY: %@",category);
    iconCategory = category.intValue;
}


-(void)setIcon:(NSNumber *)icon{
    NSLog(@"!!! ICON: %@",icon);
    iconName = icon.intValue;
}

@end