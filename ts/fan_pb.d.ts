// package: reachy.sdk.fan
// file: fan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class FanId extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): number;
  setUid(value: number): void;

  getIdCase(): FanId.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FanId.AsObject;
  static toObject(includeInstance: boolean, msg: FanId): FanId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FanId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FanId;
  static deserializeBinaryFromReader(message: FanId, reader: jspb.BinaryReader): FanId;
}

export namespace FanId {
  export type AsObject = {
    name: string,
    uid: number,
  }

  export enum IdCase {
    ID_NOT_SET = 0,
    NAME = 1,
    UID = 2,
  }
}

export class FansId extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  clearUidsList(): void;
  getUidsList(): Array<number>;
  setUidsList(value: Array<number>): void;
  addUids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FansId.AsObject;
  static toObject(includeInstance: boolean, msg: FansId): FansId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FansId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FansId;
  static deserializeBinaryFromReader(message: FansId, reader: jspb.BinaryReader): FansId;
}

export namespace FansId {
  export type AsObject = {
    namesList: Array<string>,
    uidsList: Array<number>,
  }
}

export class FansStateRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<FanId>;
  setIdsList(value: Array<FanId>): void;
  addIds(value?: FanId, index?: number): FanId;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FansStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FansStateRequest): FansStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FansStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FansStateRequest;
  static deserializeBinaryFromReader(message: FansStateRequest, reader: jspb.BinaryReader): FansStateRequest;
}

export namespace FansStateRequest {
  export type AsObject = {
    idsList: Array<FanId.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FanState extends jspb.Message {
  getOn(): boolean;
  setOn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FanState.AsObject;
  static toObject(includeInstance: boolean, msg: FanState): FanState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FanState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FanState;
  static deserializeBinaryFromReader(message: FanState, reader: jspb.BinaryReader): FanState;
}

export namespace FanState {
  export type AsObject = {
    on: boolean,
  }
}

export class FansState extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<FanId>;
  setIdsList(value: Array<FanId>): void;
  addIds(value?: FanId, index?: number): FanId;

  clearStatesList(): void;
  getStatesList(): Array<FanState>;
  setStatesList(value: Array<FanState>): void;
  addStates(value?: FanState, index?: number): FanState;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FansState.AsObject;
  static toObject(includeInstance: boolean, msg: FansState): FansState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FansState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FansState;
  static deserializeBinaryFromReader(message: FansState, reader: jspb.BinaryReader): FansState;
}

export namespace FansState {
  export type AsObject = {
    idsList: Array<FanId.AsObject>,
    statesList: Array<FanState.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FanCommand extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): FanId | undefined;
  setId(value?: FanId): void;

  getOn(): boolean;
  setOn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FanCommand.AsObject;
  static toObject(includeInstance: boolean, msg: FanCommand): FanCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FanCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FanCommand;
  static deserializeBinaryFromReader(message: FanCommand, reader: jspb.BinaryReader): FanCommand;
}

export namespace FanCommand {
  export type AsObject = {
    id?: FanId.AsObject,
    on: boolean,
  }
}

export class FansCommand extends jspb.Message {
  clearCommandsList(): void;
  getCommandsList(): Array<FanCommand>;
  setCommandsList(value: Array<FanCommand>): void;
  addCommands(value?: FanCommand, index?: number): FanCommand;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FansCommand.AsObject;
  static toObject(includeInstance: boolean, msg: FansCommand): FansCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FansCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FansCommand;
  static deserializeBinaryFromReader(message: FansCommand, reader: jspb.BinaryReader): FansCommand;
}

export namespace FansCommand {
  export type AsObject = {
    commandsList: Array<FanCommand.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FansCommandAck extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FansCommandAck.AsObject;
  static toObject(includeInstance: boolean, msg: FansCommandAck): FansCommandAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FansCommandAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FansCommandAck;
  static deserializeBinaryFromReader(message: FansCommandAck, reader: jspb.BinaryReader): FansCommandAck;
}

export namespace FansCommandAck {
  export type AsObject = {
    success: boolean,
  }
}

