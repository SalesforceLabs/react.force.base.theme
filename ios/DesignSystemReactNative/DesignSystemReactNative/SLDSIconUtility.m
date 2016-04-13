//
//  SLDSIconUtility.m
//  DesignSystemReactNative
//
//  Created by Ivan Bogdanov on 4/13/16.
//  Copyright © 2016 Salesforce. All rights reserved.
//

#import "SLDSIconUtility.h"

@implementation SLDSIconUtility
+(UIImage*)sldsIconUtility{
    
    int size = 100;
    UIColor *iconColor;
    NSString *fontName = @"SalesforceSans-Light";

    
    if (!iconColor) {
        iconColor = [UIColor blueColor];
    }
    CGRect textRect = CGRectZero;
    textRect.size = CGSizeMake(size,size);
    UIGraphicsBeginImageContextWithOptions(textRect.size, NO, 0.0f);
    
    NSString *textContent = @"A";
    
    
    UIFont *font = [UIFont fontWithName:fontName size:size];
    
    [iconColor setFill];
    
    static NSParagraphStyle * paragraphStyle = nil;
    
    static dispatch_once_t predicate_static = 0;
    dispatch_once(&predicate_static, ^{
        NSMutableParagraphStyle * pStyle =
        [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
        [pStyle setAlignment:NSTextAlignmentCenter];
        paragraphStyle = [pStyle copy];
    });
    
    if(font){
        [textContent drawInRect:textRect withAttributes:@{NSFontAttributeName : font,
                                                          NSForegroundColorAttributeName : iconColor,
                                                          NSParagraphStyleAttributeName:paragraphStyle
                                                          }];
    }
    
    UIImage * icon = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return icon;
}

@end
