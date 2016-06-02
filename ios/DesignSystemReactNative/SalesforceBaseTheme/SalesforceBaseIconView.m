#import "SalesforceBaseIconView.h"

@implementation SalesforceBaseIconView  {
    NSString *iconCode;
    UIColor *iconColor;
    NSString *fontName;
    float iconScale;
}

- (instancetype)init {
    if(self = [super init]){
        self.opaque = NO;
        iconScale = 1.0f;
        fontName = @"SalesforceDesignSystemIconsUtility";
    }
    return self;
}

- (void)drawRect:(CGRect)rect
{
    
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextClearRect(context, rect);
    
    if (!iconColor) {
        iconColor = [UIColor blackColor];
    }
    
    float size = rect.size.height;
    
    CGRect textRect = CGRectMake(0,(size-size*iconScale)/2,size,size*iconScale);
    
    UIFont *font = [UIFont fontWithName:fontName size:textRect.size.height];
    
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
        [iconCode drawInRect:textRect withAttributes:@{NSFontAttributeName : font,
                                                       NSForegroundColorAttributeName : iconColor,
                                                       NSParagraphStyleAttributeName:paragraphStyle
                                                       }];
    }
    
}

-(void)setFontName:(NSString *)fName{
    fontName = fName;
}

-(void)setIconScale:(NSNumber *)scale{
    iconScale = scale.floatValue;
}

-(void)setIconCode:(NSString *)code{
    iconCode = code;
}

-(void)setIconColor:(NSString *)hexColor{
    if([hexColor hasPrefix:@"#"]){
        iconColor = [self colorFromHexString:hexColor];
    }
}

- (UIColor *)colorFromHexString:(NSString *)hexString {
    unsigned rgbValue = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    [scanner setScanLocation:1];
    [scanner scanHexInt:&rgbValue];
    return [UIColor colorWithRed:((rgbValue & 0xFF0000) >> 16)/255.0 green:((rgbValue & 0xFF00) >> 8)/255.0 blue:(rgbValue & 0xFF)/255.0 alpha:1.0];
}

@end