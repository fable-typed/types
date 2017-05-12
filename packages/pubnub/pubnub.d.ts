declare namespace pubnub {

    interface InitParams {
        /**
         * Specifies the fully qualified domain name of the PubNub origin.
         * By default this value is set to pubsub.pubnub.com but it
         * should be set to the appropriate origin specified in the PubNub Admin Portal.
         */
        origin?: string;

        /**
         * Specifies the publish_key to be used for publishing messages to a channel.
         * This key can be specified at initialization or along with a publish().
         */
        publish_key?: string;

        /**
         * Specifies the subscribe_key to be used for subscribing to a channel.
         * This key can be specified at initialization or along with a subscribe().
         */
        subscribe_key: string;

        /**
         * Specifies the unique user id to be used to identify the client.
         * By default a randomly generated uuid is created by the client
         * in the form of:6dbee204-df0b-4a72-a478-2317e107ce02. See uuid() for more info.
         */
        uuid?: string;

        /**
         * Specifies a cryptographic key to use for message level encryption with AES.
         * The cipher_key specifies the particular transformation of plain text
         * into cipher text, or vice versa during decryption.
         */
        cipher_key?: string;

        /**
         * Specifies auth_key to use to determine User-Level Access Manager permissions.
         */
        auth_key?: string;

        /**
         * Explicitly disables presence leave events.
         */
        noleave?: boolean;

        /**
         * Specifies the interval between keepalive pings.
         * The default value is 60 seconds. See keepalive example for more info.
         */
        keepalive?: number;

        /**
         * The secret_key is a super-secret private key used only
         * to sign Access Manager API messages.
         * Signatures are computed using HMAC + SHA256 with the application’s secret key
         * as the signing key and the request string as the message.
         * This signature is then Base64 encoded.
         */
        secret_key?: string;

        /**
         * Setting a value of true enables transport layer encryption with SSL/TLS.
         * Default is false.
         */
        ssl?: boolean;

        /**
         * Specifies the time interval in milliseconds that PubNub will use to optimize
         * message delivery by bundling them into a single compressed payload.
         * The Default is 10 milliseconds. See windowing example for more info.
         */
        windowing?: number;

        /**
         * The JavaScript SDK automatically selects the appropriate transport method
         * during run-time.
         * Setting jsonp to true explicitly enforces JSON(P) as the data transport method.
         */
        jsonp?: boolean;

        /**
         * If restore is set to true , when a client is disconnected and then reconnects
         * to a channel, it will automatically attempt to retrieve any missed messages
         * since it was last connected.
         */
        restore?: boolean;

        /**
         * Used to set the Presence heartbeat value (in seconds).
         * If no presence heartbeat is received within this interval the client subscription
         * will be timed-out
         */
        heartbeat?: number;

        /**
         * Used to set the Presence heartbeat interval value (in seconds).
         * The SDK will send a heartbeat ping to the after this time is elapsed.
         * Recommended value (heartbeat-1)/2
         */
        heartbeat_interval?: number;

        /**
         * @param error
         */
        error?: (error: any) => void;
    }

    interface SubscribeParams {
        /**
         * Specifying either channel or channel_group is mandatory
         *
         * Specifies the channel to subscribe to.
         * It is possible to specify multiple channels as a list or as an array.
         * See Examples for more info.
         */
        channel?: string|Array<string>;

        /**
         * Specifying either channel or channel_group is mandatory
         *
         * Specifies the channel_group to subscribe to.
         */
        channel_group?: string;

        /**
         * Specifies timetoken from which to start returning any available cached messages.
         * Message retrieval with timetoken is not guaranteed and should only be considered
         * a best-effort service.
         */
        timetoken?: number;

        /**
         * This callback is called on a successful connection to the PubNub cloud.
         * @param args
         */
        connect?: (...args) => void;

        /**
         * This callback is called on client disconnect from the PubNub cloud.
         * @param args
         */
        disconnect?: (...args) => void;

        /**
         * This callback is called on an error event.
         * @param args
         */
        error?: (...args) => void;

        /**
         * This callback is called on receiving a message from the channel.
         * @param args
         */
        message?: (...args) => void;

        /**
         * Specifies callback to be called when presence events take place such as join or leave.
         * @param args
         */
        presence?: (...args) => void;

        /**
         * This callback is called on successfully re-connecting to the PubNub cloud.
         * @param args
         */
        reconnect?: (...args) => void;

        /**
         * If restore is set to true , when a client is disconnected
         * and then reconnects to a channel,
         * it will automatically attempt to retrieve any missed messages
         * since it was last connected.
         */
        restore?: boolean;


        /**
         * Specifies the time interval in milliseconds that PubNub will use
         * to optimize message delivery by bundling them into a single compressed payload.
         * The Default is 10 milliseconds.
         * Setting a value of 1000 milliseconds will allow 100 messages in one second
         * to be bundled and compressed for optimized delivery.
         */
        windowing?: number;

        /**
         * This setting has been removed from subscribe and is only accessible at init as of 3.6.7.
         */
        backfill?: boolean;

        /**
         * JSON object of key/value pairs with supported data-types of int,
         * float and string. Nesting of key/values is not permitted and key names
         * beginning with prefix pn are reserved.
         *
         * If state is undefined, the current state for the specified uuid
         * will be returned. If a specified key already exists for the uuid
         * it will be over-written with the new value.
         * Key values can be deleted by setting the particular value to null.
         *
         * All state data for a user is deleted once the associated uuid
         * leaves the channel.
         */
        state?: Object;
    }


    interface PublishParams {
        /**
         * Executes on a successful publish.
         * @param args
         */
        callback?: (...args) => void;

        /**
         * Specifies channel name to publish messages to.
         */
        channel: string;

        /**
         * The message may be any valid JSON type
         * including objects, arrays, strings, and numbers.
         */
        message: JSON;

        /**
         * Specifies the required publish_key to use to send messages to a channel
         */
        publish_key?: string;

        /**
         * If true the messages are stored in history, default true.
         */
        store_in_history?: boolean;

        /**
         * Executes on a publish error.
         * @param args
         */
        error?: (...args) => void;
    }

    interface UnsubscribeParams {
        /**
         * Specifying either channel or channel_group is mandatory
         *
         * Specifies the channel to unsubscribe from.
         */
        channel?: string|Array<string>;

        /**
         * Specifying either channel or channel_group is mandatory
         *
         * Specifies the channel_group to unsubscribe from.
         */
        channel_group?: string|Array<string>;
    }

    interface HistoryParams {
        /**
         * Callback that is called on success.
         */
        callback: () => {};

        /**
         * Specifies channel to return history messages from.
         */
        channel: string;

        /**
         * Specifies the number of historical messages to return.
         *
         * default/maximum is 100.
         */
        count?: number;

        /**
         * Time token delimiting the end of time slice (inclusive) to pull messages from.
         */
        end?: number;

        /**
         * Time token delimiting the start of time slice (exclusive) to pull messages from.
         */
        start?: number;

        /**
         * Setting to true will traverse the time line in reverse starting with
         * the oldest message first. Default is false.
         * If both start and end arguments are provided,
         * reverse is ignored and messages are returned starting with the newest message.
         */
        reverse?: boolean;

        /**
         * If true the message post timestamps will be included in the history response.
         *
         * default: false
         */
        include_token?: boolean;

        /**
         * sSpecify callback to call on error event.
         */
        error?: () => void;
    }

    interface PUBNUB {
        init(params: InitParams): PUBNUB;
        publish(pubnubNotification: PublishParams, callback?: (...args) => void): void;
        subscribe(params: SubscribeParams, callback?: (...args) => void): void;
        unsubscribe(params: UnsubscribeParams): void;
        history(params: HistoryParams): void;
        // here_now();
    }
}


declare var PUBNUB: pubnub.PUBNUB;