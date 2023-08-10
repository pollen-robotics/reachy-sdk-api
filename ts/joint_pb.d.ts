// package: reachy.sdk.joint
// file: joint.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PIDGains extends jspb.Message {
  getP(): number;
  setP(value: number): void;

  getI(): number;
  setI(value: number): void;

  getD(): number;
  setD(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PIDGains.AsObject;
  static toObject(includeInstance: boolean, msg: PIDGains): PIDGains.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PIDGains, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PIDGains;
  static deserializeBinaryFromReader(message: PIDGains, reader: jspb.BinaryReader): PIDGains;
}

export namespace PIDGains {
  export type AsObject = {
    p: number,
    i: number,
    d: number,
  }
}

export class ComplianceMarginSlope extends jspb.Message {
  getCwComplianceMargin(): number;
  setCwComplianceMargin(value: number): void;

  getCcwComplianceMargin(): number;
  setCcwComplianceMargin(value: number): void;

  getCwComplianceSlope(): number;
  setCwComplianceSlope(value: number): void;

  getCcwComplianceSlope(): number;
  setCcwComplianceSlope(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplianceMarginSlope.AsObject;
  static toObject(includeInstance: boolean, msg: ComplianceMarginSlope): ComplianceMarginSlope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComplianceMarginSlope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComplianceMarginSlope;
  static deserializeBinaryFromReader(message: ComplianceMarginSlope, reader: jspb.BinaryReader): ComplianceMarginSlope;
}

export namespace ComplianceMarginSlope {
  export type AsObject = {
    cwComplianceMargin: number,
    ccwComplianceMargin: number,
    cwComplianceSlope: number,
    ccwComplianceSlope: number,
  }
}

export class PIDValue extends jspb.Message {
  hasPid(): boolean;
  clearPid(): void;
  getPid(): PIDGains | undefined;
  setPid(value?: PIDGains): void;

  hasCompliance(): boolean;
  clearCompliance(): void;
  getCompliance(): ComplianceMarginSlope | undefined;
  setCompliance(value?: ComplianceMarginSlope): void;

  getGainsCase(): PIDValue.GainsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PIDValue.AsObject;
  static toObject(includeInstance: boolean, msg: PIDValue): PIDValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PIDValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PIDValue;
  static deserializeBinaryFromReader(message: PIDValue, reader: jspb.BinaryReader): PIDValue;
}

export namespace PIDValue {
  export type AsObject = {
    pid?: PIDGains.AsObject,
    compliance?: ComplianceMarginSlope.AsObject,
  }

  export enum GainsCase {
    GAINS_NOT_SET = 0,
    PID = 1,
    COMPLIANCE = 2,
  }
}

export class JointId extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): number;
  setUid(value: number): void;

  getIdCase(): JointId.IdCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointId.AsObject;
  static toObject(includeInstance: boolean, msg: JointId): JointId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointId;
  static deserializeBinaryFromReader(message: JointId, reader: jspb.BinaryReader): JointId;
}

export namespace JointId {
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

export class JointState extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasUid(): boolean;
  clearUid(): void;
  getUid(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setUid(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  hasPresentPosition(): boolean;
  clearPresentPosition(): void;
  getPresentPosition(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPresentPosition(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasPresentSpeed(): boolean;
  clearPresentSpeed(): void;
  getPresentSpeed(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPresentSpeed(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasPresentLoad(): boolean;
  clearPresentLoad(): void;
  getPresentLoad(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setPresentLoad(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTemperature(): boolean;
  clearTemperature(): void;
  getTemperature(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTemperature(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasCompliant(): boolean;
  clearCompliant(): void;
  getCompliant(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCompliant(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasGoalPosition(): boolean;
  clearGoalPosition(): void;
  getGoalPosition(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setGoalPosition(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasSpeedLimit(): boolean;
  clearSpeedLimit(): void;
  getSpeedLimit(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setSpeedLimit(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTorqueLimit(): boolean;
  clearTorqueLimit(): void;
  getTorqueLimit(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTorqueLimit(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): PIDValue | undefined;
  setPid(value?: PIDValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointState.AsObject;
  static toObject(includeInstance: boolean, msg: JointState): JointState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointState;
  static deserializeBinaryFromReader(message: JointState, reader: jspb.BinaryReader): JointState;
}

export namespace JointState {
  export type AsObject = {
    name: string,
    uid?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    presentPosition?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    presentSpeed?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    presentLoad?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    temperature?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    compliant?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    goalPosition?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    speedLimit?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    torqueLimit?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    pid?: PIDValue.AsObject,
  }
}

export class JointsState extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<JointId>;
  setIdsList(value: Array<JointId>): void;
  addIds(value?: JointId, index?: number): JointId;

  clearStatesList(): void;
  getStatesList(): Array<JointState>;
  setStatesList(value: Array<JointState>): void;
  addStates(value?: JointState, index?: number): JointState;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointsState.AsObject;
  static toObject(includeInstance: boolean, msg: JointsState): JointsState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointsState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointsState;
  static deserializeBinaryFromReader(message: JointsState, reader: jspb.BinaryReader): JointsState;
}

export namespace JointsState {
  export type AsObject = {
    idsList: Array<JointId.AsObject>,
    statesList: Array<JointState.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class JointsId extends jspb.Message {
  clearNamesList(): void;
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): void;
  addNames(value: string, index?: number): string;

  clearUidsList(): void;
  getUidsList(): Array<number>;
  setUidsList(value: Array<number>): void;
  addUids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointsId.AsObject;
  static toObject(includeInstance: boolean, msg: JointsId): JointsId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointsId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointsId;
  static deserializeBinaryFromReader(message: JointsId, reader: jspb.BinaryReader): JointsId;
}

export namespace JointsId {
  export type AsObject = {
    namesList: Array<string>,
    uidsList: Array<number>,
  }
}

export class JointsStateRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<JointId>;
  setIdsList(value: Array<JointId>): void;
  addIds(value?: JointId, index?: number): JointId;

  clearRequestedFieldsList(): void;
  getRequestedFieldsList(): Array<JointFieldMap[keyof JointFieldMap]>;
  setRequestedFieldsList(value: Array<JointFieldMap[keyof JointFieldMap]>): void;
  addRequestedFields(value: JointFieldMap[keyof JointFieldMap], index?: number): JointFieldMap[keyof JointFieldMap];

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointsStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JointsStateRequest): JointsStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointsStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointsStateRequest;
  static deserializeBinaryFromReader(message: JointsStateRequest, reader: jspb.BinaryReader): JointsStateRequest;
}

export namespace JointsStateRequest {
  export type AsObject = {
    idsList: Array<JointId.AsObject>,
    requestedFieldsList: Array<JointFieldMap[keyof JointFieldMap]>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StreamJointsRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): JointsStateRequest | undefined;
  setRequest(value?: JointsStateRequest): void;

  getPublishFrequency(): number;
  setPublishFrequency(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamJointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamJointsRequest): StreamJointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamJointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamJointsRequest;
  static deserializeBinaryFromReader(message: StreamJointsRequest, reader: jspb.BinaryReader): StreamJointsRequest;
}

export namespace StreamJointsRequest {
  export type AsObject = {
    request?: JointsStateRequest.AsObject,
    publishFrequency: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class JointCommand extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): JointId | undefined;
  setId(value?: JointId): void;

  hasCompliant(): boolean;
  clearCompliant(): void;
  getCompliant(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCompliant(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasGoalPosition(): boolean;
  clearGoalPosition(): void;
  getGoalPosition(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setGoalPosition(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasSpeedLimit(): boolean;
  clearSpeedLimit(): void;
  getSpeedLimit(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setSpeedLimit(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTorqueLimit(): boolean;
  clearTorqueLimit(): void;
  getTorqueLimit(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTorqueLimit(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasPid(): boolean;
  clearPid(): void;
  getPid(): PIDValue | undefined;
  setPid(value?: PIDValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointCommand.AsObject;
  static toObject(includeInstance: boolean, msg: JointCommand): JointCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointCommand;
  static deserializeBinaryFromReader(message: JointCommand, reader: jspb.BinaryReader): JointCommand;
}

export namespace JointCommand {
  export type AsObject = {
    id?: JointId.AsObject,
    compliant?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    goalPosition?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    speedLimit?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    torqueLimit?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    pid?: PIDValue.AsObject,
  }
}

export class JointsCommand extends jspb.Message {
  clearCommandsList(): void;
  getCommandsList(): Array<JointCommand>;
  setCommandsList(value: Array<JointCommand>): void;
  addCommands(value?: JointCommand, index?: number): JointCommand;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointsCommand.AsObject;
  static toObject(includeInstance: boolean, msg: JointsCommand): JointsCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointsCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointsCommand;
  static deserializeBinaryFromReader(message: JointsCommand, reader: jspb.BinaryReader): JointsCommand;
}

export namespace JointsCommand {
  export type AsObject = {
    commandsList: Array<JointCommand.AsObject>,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class JointsCommandAck extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointsCommandAck.AsObject;
  static toObject(includeInstance: boolean, msg: JointsCommandAck): JointsCommandAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointsCommandAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointsCommandAck;
  static deserializeBinaryFromReader(message: JointsCommandAck, reader: jspb.BinaryReader): JointsCommandAck;
}

export namespace JointsCommandAck {
  export type AsObject = {
    success: boolean,
  }
}

export interface JointFieldMap {
  NONE: 0;
  NAME: 1;
  UID: 2;
  PRESENT_POSITION: 3;
  PRESENT_SPEED: 4;
  PRESENT_LOAD: 5;
  TEMPERATURE: 6;
  COMPLIANT: 7;
  GOAL_POSITION: 8;
  SPEED_LIMIT: 9;
  TORQUE_LIMIT: 10;
  PID: 11;
  ALL: 15;
}

export const JointField: JointFieldMap;

