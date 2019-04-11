
#import "Simpl.h"
#import <SimplFingerPrint/GSUser.h>
#import <SimplFingerPrint/GSFingerPrint.h>
#import <SimplFingerPrint/SimplFingerPrint.h>


@interface Simpl()
@property (nonatomic) GSUser *user;
@end

@implementation Simpl

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(generateFingerprint:(NSString *)clientId phoneNumber:(NSString *)phoneNumber email: (NSString *)email callback:(RCTResponseSenderBlock)callback) {
    @try {
        GSUser *user = [[GSUser alloc] initWithPhoneNumber: phoneNumber email: email];
        GSFingerPrint *fingerprint = [[GSFingerPrint alloc] initWithMerchantId:clientId andUser:user];
        [fingerprint generateEncryptedPayloadWithCallback:^(NSString *payload) {
            callback(@[payload]);
        }];
    }
    @catch  (NSException * ex){
        callback(ex.reason);
    }
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

@end
