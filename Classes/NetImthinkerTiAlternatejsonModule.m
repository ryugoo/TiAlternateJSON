/**
 * Your Copyright Here
 *
 * Appcelerator Titanium is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * and licensed under the Apache Public License (version 2)
 */
#import "NetImthinkerTiAlternatejsonModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

@implementation NetImthinkerTiAlternatejsonModule

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"cfd0250e-e7ee-4fbc-ad5b-767f3dd4feec";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"net.imthinker.ti.alternatejson";
}

#pragma mark Lifecycle

-(void)startup
{
	// this method is called when the module is first loaded
	// you *must* call the superclass
	[super startup];
	
	NSLog(@"[INFO] %@ loaded",self);
}

-(void)shutdown:(id)sender
{
	// this method is called when the module is being unloaded
	// typically this is during shutdown. make sure you don't do too
	// much processing here or the app will be quit forceably
	
	// you *must* call the superclass
	[super shutdown:sender];
}

#pragma mark Cleanup 

-(void)dealloc
{
	// release any resources that have been retained by the module
	[super dealloc];
}

#pragma mark Internal Memory Management

-(void)didReceiveMemoryWarning:(NSNotification*)notification
{
	// optionally release any resources that can be dynamically
	// reloaded once memory is available - such as caches
	[super didReceiveMemoryWarning:notification];
}

#pragma mark Listener Notifications

-(void)_listenerAdded:(NSString *)type count:(int)count
{
	if (count == 1 && [type isEqualToString:@"my_event"])
	{
		// the first (of potentially many) listener is being added 
		// for event named 'my_event'
	}
}

-(void)_listenerRemoved:(NSString *)type count:(int)count
{
	if (count == 0 && [type isEqualToString:@"my_event"])
	{
		// the last listener called for event named 'my_event' has
		// been removed, we can optionally clean up any resources
		// since no body is listening at this point for that event
	}
}

#pragma Public APIs

- (id)stringify:(id)args
{
    NSError *error;
    NSData *data = [NSJSONSerialization dataWithJSONObject:args[0] options:kNilOptions error:&error];

    NSString *stringified = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    return stringified;
}

- (id)parse:(id)args
{
    NSError *error;
    ENSURE_SINGLE_ARG(args, NSString);
    NSDictionary *json = [NSJSONSerialization JSONObjectWithData:[(NSString *)args dataUsingEncoding:NSUTF8StringEncoding]
                                                         options:kNilOptions
                                                           error:&error];

    return json;
}

- (id)stringify2:(id)args
{
    NSError *error;
    NSString *stringified = [[[NSString alloc] init] autorelease];
    [stringified JSONStringWithOptions:JKSerializeOptionNone includeQuotes:YES error:&error];
    return stringified;
}

- (id)parse2:(id)args
{
    NSError *error;
    ENSURE_SINGLE_ARG(args, NSString);
    NSDictionary *json = [(NSString *)args objectFromJSONStringWithParseOptions:JKParseOptionNone error:&error];
    return json;
}

@end
