#import <Foundation/Foundation.h>

#import "UIView+React.h"
#import "RCTLog.h"

#import "SLDSIconStandardView.h"

static NSString *const FONT_NAME = @"SalesforceDesignSystemIconsStandard";

@implementation SLDSIconStandardView  {
    NSString *iconCode;
    UIColor *iconColor;
    float bgColorRed;
    float bgColorGreen;
    float bgColorBlue;
}

- (instancetype)init {
    if(self = [super init]){
        self.opaque = NO;
    }
    return self;
}

- (void)drawRect:(CGRect)rect
{
    
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextClearRect(context, rect);
    
    UIBezierPath *bg = [UIBezierPath bezierPathWithRoundedRect:CGRectMake(0, 0, rect.size.height, rect.size.width) byRoundingCorners:(UIRectCornerAllCorners) cornerRadii:CGSizeMake(rect.size.height/10, rect.size.width/10)];
    
    CGContextSetFillColorWithColor(context, [UIColor colorWithRed:bgColorRed green:bgColorGreen blue:bgColorBlue alpha:1.0].CGColor);
    
    
    [bg fill];
    
    if (!iconColor) {
        iconColor = [UIColor whiteColor];
    }
    
    UIFont *font = [UIFont fontWithName:FONT_NAME size:rect.size.height];
    
    [iconColor setFill];
    
    static NSParagraphStyle * paragraphStyle = nil;
    
    static dispatch_once_t predicate_static = 0;
    dispatch_once(&predicate_static, ^{
        NSMutableParagraphStyle * pStyle =
        [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
        [pStyle setAlignment:NSTextAlignmentCenter];
        paragraphStyle = [pStyle copy];
    });
    
    if(font && iconCode){
        [iconCode drawInRect:rect withAttributes:@{NSFontAttributeName : font,
                                                   NSForegroundColorAttributeName : iconColor,
                                                   NSParagraphStyleAttributeName:paragraphStyle
                                                   }];
    }
    
}

-(void)setIconCode:(NSString *)code{
    iconCode = code;
}

-(void)setIconColor:(NSString *)hexColor{
    if([hexColor hasPrefix:@"#"]){
        iconColor = [self colorFromHexString:hexColor];
    }
}

-(void)setBgColorRed:(NSNumber *)value{
    bgColorRed = value.floatValue;
}

-(void)setBgColorGreen:(NSNumber *)value{
    bgColorGreen = value.floatValue;
}

-(void)setBgColorBlue:(NSNumber *)value{
    bgColorBlue = value.floatValue;
}

- (UIColor *)colorFromHexString:(NSString *)hexString {
    unsigned rgbValue = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    [scanner setScanLocation:1]; // bypass '#' character
    [scanner scanHexInt:&rgbValue];
    return [UIColor colorWithRed:((rgbValue & 0xFF0000) >> 16)/255.0 green:((rgbValue & 0xFF00) >> 8)/255.0 blue:(rgbValue & 0xFF)/255.0 alpha:1.0];
}

@end