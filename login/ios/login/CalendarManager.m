//
//  CalendarManager.m
//  TestReact
//
//  Created by handsome on 2017/6/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <CommonCrypto/CommonCrypto.h>



@implementation CalendarManager
RCT_EXPORT_MODULE(); //这个宏也可以添加一个参数用来指定在javascript中访问这个模块的名字。如果你不指定默认会使用objective-c的类的名字

RCT_EXPORT_METHOD(domd5:(NSString *)password  callback:(RCTResponseSenderBlock)callStr) {
  const char *cStr = [password UTF8String];
  unsigned char digest[CC_MD5_DIGEST_LENGTH];
  CC_MD5( cStr, strlen(cStr), digest ); // This is the md5 call
  
  NSMutableString *output = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
  NSLog(@".....%@",password);
  for(int i = 0; i < CC_MD5_DIGEST_LENGTH; i++)
    [output appendFormat:@"%02x", digest[i]];
  callStr(@[[NSNull null],output]);
}



@end
