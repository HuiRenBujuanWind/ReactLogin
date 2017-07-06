//
//  CalendarManager.h
//  TestReact
//
//  Created by handsome on 2017/6/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

typedef void (^callBack)(NSString *passMd5);
@interface CalendarManager : NSObject <RCTBridgeModule>

@property (nonatomic, copy)NSString *md5Pass;
@end
