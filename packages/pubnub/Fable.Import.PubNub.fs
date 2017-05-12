namespace Fable.Import
open System
open System.Text.RegularExpressions
open Fable.Core
open Fable.Import.JS

module pubnub =
    type [<AllowNullLiteral>] InitParams =
        abstract origin: string option with get, set
        abstract publish_key: string option with get, set
        abstract subscribe_key: string with get, set
        abstract uuid: string option with get, set
        abstract cipher_key: string option with get, set
        abstract auth_key: string option with get, set
        abstract noleave: bool option with get, set
        abstract keepalive: float option with get, set
        abstract secret_key: string option with get, set
        abstract ssl: bool option with get, set
        abstract windowing: float option with get, set
        abstract jsonp: bool option with get, set
        abstract restore: bool option with get, set
        abstract heartbeat: float option with get, set
        abstract heartbeat_interval: float option with get, set
        abstract error: Func<obj, unit> option with get, set

    and [<AllowNullLiteral>] SubscribeParams =
        abstract channels: U2<string, ResizeArray<string>> option with get, set
        abstract channel_group: string option with get, set
        abstract timetoken: float option with get, set
        abstract connect: Func<obj, unit> option with get, set
        abstract disconnect: Func<obj, unit> option with get, set
        abstract error: Func<obj, unit> option with get, set
        abstract message: Func<obj, unit> option with get, set
        abstract presence: Func<obj, unit> option with get, set
        abstract reconnect: Func<obj, unit> option with get, set
        abstract restore: bool option with get, set
        abstract windowing: float option with get, set
        abstract backfill: bool option with get, set
        abstract state: obj option with get, set

    and [<AllowNullLiteral>] PublishParams =
        abstract callback: Func<obj, unit> option with get, set
        abstract channel: string with get, set
        abstract message: obj with get, set
        abstract publish_key: string option with get, set
        abstract store_in_history: bool option with get, set
        abstract error: Func<obj, unit> option with get, set

    and [<AllowNullLiteral>] UnsubscribeParams =
        abstract channel: U2<string, ResizeArray<string>> option with get, set
        abstract channel_group: U2<string, ResizeArray<string>> option with get, set

    and [<AllowNullLiteral>] HistoryParams =
        abstract callback: Func<unit, obj> with get, set
        abstract channel: string with get, set
        abstract count: float option with get, set
        abstract ``end``: float option with get, set
        abstract start: float option with get, set
        abstract reverse: bool option with get, set
        abstract include_token: bool option with get, set
        abstract error: Func<unit, unit> option with get, set

    and [<AllowNullLiteral>] Message =
        abstract channel: string with get, set
        abstract subscription: string with get, set
        abstract timetoken: string with get, set
        abstract message: string with get, set
        abstract publisher: string with get, set



    and [<AllowNullLiteral>] ListenerParams =
        abstract message: Func<Message, unit> with get, set

    and [<AllowNullLiteral>] PubNub =
        abstract init: ``params``: InitParams -> PubNub
        abstract publish: pubnubNotification: PublishParams * ?callback: Func<obj, unit> -> unit
        abstract subscribe: ``params``: SubscribeParams * ?callback: Func<obj, unit> -> unit
        abstract unsubscribe: ``params``: UnsubscribeParams -> unit
        abstract history: ``params``: HistoryParams -> unit
        abstract addListener: ``params``: ListenerParams -> unit
        abstract getUUID: unit -> string

    let [<ImportAttribute("default", "pubnub")>] PubNubConstructor: InitParams -> PubNub = jsNative
