// package: reachy.sdk.restart
// file: restart_signal.proto

import * as jspb from "google-protobuf";

export class RestartCmd extends jspb.Message {
  getCmd(): SignalTypeMap[keyof SignalTypeMap];
  setCmd(value: SignalTypeMap[keyof SignalTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartCmd.AsObject;
  static toObject(includeInstance: boolean, msg: RestartCmd): RestartCmd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartCmd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartCmd;
  static deserializeBinaryFromReader(message: RestartCmd, reader: jspb.BinaryReader): RestartCmd;
}

export namespace RestartCmd {
  export type AsObject = {
    cmd: SignalTypeMap[keyof SignalTypeMap],
  }
}

export class RestartSignalAck extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartSignalAck.AsObject;
  static toObject(includeInstance: boolean, msg: RestartSignalAck): RestartSignalAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartSignalAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartSignalAck;
  static deserializeBinaryFromReader(message: RestartSignalAck, reader: jspb.BinaryReader): RestartSignalAck;
}

export namespace RestartSignalAck {
  export type AsObject = {
    success: boolean,
  }
}

export interface SignalTypeMap {
  RESTART: 0;
  STOP: 1;
}

export const SignalType: SignalTypeMap;

