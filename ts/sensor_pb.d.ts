// package: reachy.sdk.joint
// file: sensor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SensorId extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): number;
  setUid(value: number): void;

  getIdCase(): SensorId.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorId.AsObject;
  static toObject(includeInstance: boolean, msg: SensorId): SensorId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorId;
  static deserializeBinaryFromReader(message: SensorId, reader: jspb.BinaryReader): SensorId;
}

export namespace SensorId {
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

export class SensorsId extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  clearUidsList(): void;
  getUidsList(): Array<number>;
  setUidsList(value: Array<number>): void;
  addUids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorsId.AsObject;
  static toObject(includeInstance: boolean, msg: SensorsId): SensorsId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorsId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorsId;
  static deserializeBinaryFromReader(message: SensorsId, reader: jspb.BinaryReader): SensorsId;
}

export namespace SensorsId {
  export type AsObject = {
    namesList: Array<string>,
    uidsList: Array<number>,
  }
}

export class ForceSensorState extends jspb.Message {
  getForce(): number;
  setForce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForceSensorState.AsObject;
  static toObject(includeInstance: boolean, msg: ForceSensorState): ForceSensorState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForceSensorState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForceSensorState;
  static deserializeBinaryFromReader(message: ForceSensorState, reader: jspb.BinaryReader): ForceSensorState;
}

export namespace ForceSensorState {
  export type AsObject = {
    force: number,
  }
}

export class SensorState extends jspb.Message {
  hasForceSensorState(): boolean;
  clearForceSensorState(): void;
  getForceSensorState(): ForceSensorState | undefined;
  setForceSensorState(value?: ForceSensorState): void;

  getStateCase(): SensorState.StateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorState.AsObject;
  static toObject(includeInstance: boolean, msg: SensorState): SensorState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorState;
  static deserializeBinaryFromReader(message: SensorState, reader: jspb.BinaryReader): SensorState;
}

export namespace SensorState {
  export type AsObject = {
    forceSensorState?: ForceSensorState.AsObject,
  }

  export enum StateCase {
    STATE_NOT_SET = 0,
    FORCE_SENSOR_STATE = 1,
  }
}

export class SensorsState extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<SensorId>;
  setIdsList(value: Array<SensorId>): void;
  addIds(value?: SensorId, index?: number): SensorId;

  clearStatesList(): void;
  getStatesList(): Array<SensorState>;
  setStatesList(value: Array<SensorState>): void;
  addStates(value?: SensorState, index?: number): SensorState;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorsState.AsObject;
  static toObject(includeInstance: boolean, msg: SensorsState): SensorsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorsState;
  static deserializeBinaryFromReader(message: SensorsState, reader: jspb.BinaryReader): SensorsState;
}

export namespace SensorsState {
  export type AsObject = {
    idsList: Array<SensorId.AsObject>,
    statesList: Array<SensorState.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SensorsStateRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<SensorId>;
  setIdsList(value: Array<SensorId>): void;
  addIds(value?: SensorId, index?: number): SensorId;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorsStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SensorsStateRequest): SensorsStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorsStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorsStateRequest;
  static deserializeBinaryFromReader(message: SensorsStateRequest, reader: jspb.BinaryReader): SensorsStateRequest;
}

export namespace SensorsStateRequest {
  export type AsObject = {
    idsList: Array<SensorId.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StreamSensorsStateRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): SensorsStateRequest | undefined;
  setRequest(value?: SensorsStateRequest): void;

  getPublishFrequency(): number;
  setPublishFrequency(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSensorsStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSensorsStateRequest): StreamSensorsStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamSensorsStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSensorsStateRequest;
  static deserializeBinaryFromReader(message: StreamSensorsStateRequest, reader: jspb.BinaryReader): StreamSensorsStateRequest;
}

export namespace StreamSensorsStateRequest {
  export type AsObject = {
    request?: SensorsStateRequest.AsObject,
    publishFrequency: number,
  }
}

