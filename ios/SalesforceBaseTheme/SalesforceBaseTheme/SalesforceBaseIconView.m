/*
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

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