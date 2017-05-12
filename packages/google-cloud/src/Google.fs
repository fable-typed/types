namespace Fable.Import.Google.Cloud

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

type [<Erase>] ProjectId = ProjectId of string
type ApiResponse = interface end

type [<Measure>] millisecond
type [<Measure>] ms = millisecond
