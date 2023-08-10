// package: reachy.sdk.mobility
// file: mobile_platform_reachy.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class DirectionVector extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setX(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasY(): boolean;
  clearY(): void;
  getY(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setY(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTheta(): boolean;
  clearTheta(): void;
  getTheta(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTheta(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectionVector.AsObject;
  static toObject(includeInstance: boolean, msg: DirectionVector): DirectionVector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectionVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectionVector;
  static deserializeBinaryFromReader(message: DirectionVector, reader: jspb.BinaryReader): DirectionVector;
}

export namespace DirectionVector {
  export type AsObject = {
    x?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    y?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    theta?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class TargetDirectionCommand extends jspb.Message {
  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): DirectionVector | undefined;
  setDirection(value?: DirectionVector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetDirectionCommand.AsObject;
  static toObject(includeInstance: boolean, msg: TargetDirectionCommand): TargetDirectionCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetDirectionCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetDirectionCommand;
  static deserializeBinaryFromReader(message: TargetDirectionCommand, reader: jspb.BinaryReader): TargetDirectionCommand;
}

export namespace TargetDirectionCommand {
  export type AsObject = {
    direction?: DirectionVector.AsObject,
  }
}

export class GoToVector extends jspb.Message {
  hasXGoal(): boolean;
  clearXGoal(): void;
  getXGoal(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setXGoal(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasYGoal(): boolean;
  clearYGoal(): void;
  getYGoal(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setYGoal(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasThetaGoal(): boolean;
  clearThetaGoal(): void;
  getThetaGoal(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setThetaGoal(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoToVector.AsObject;
  static toObject(includeInstance: boolean, msg: GoToVector): GoToVector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoToVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoToVector;
  static deserializeBinaryFromReader(message: GoToVector, reader: jspb.BinaryReader): GoToVector;
}

export namespace GoToVector {
  export type AsObject = {
    xGoal?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    yGoal?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    thetaGoal?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class SetSpeedVector extends jspb.Message {
  hasXVel(): boolean;
  clearXVel(): void;
  getXVel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setXVel(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasYVel(): boolean;
  clearYVel(): void;
  getYVel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setYVel(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasRotVel(): boolean;
  clearRotVel(): void;
  getRotVel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setRotVel(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDuration(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSpeedVector.AsObject;
  static toObject(includeInstance: boolean, msg: SetSpeedVector): SetSpeedVector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSpeedVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSpeedVector;
  static deserializeBinaryFromReader(message: SetSpeedVector, reader: jspb.BinaryReader): SetSpeedVector;
}

export namespace SetSpeedVector {
  export type AsObject = {
    xVel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    yVel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    rotVel?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    duration?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class OdometryVector extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setX(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasY(): boolean;
  clearY(): void;
  getY(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setY(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTheta(): boolean;
  clearTheta(): void;
  getTheta(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTheta(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OdometryVector.AsObject;
  static toObject(includeInstance: boolean, msg: OdometryVector): OdometryVector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OdometryVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OdometryVector;
  static deserializeBinaryFromReader(message: OdometryVector, reader: jspb.BinaryReader): OdometryVector;
}

export namespace OdometryVector {
  export type AsObject = {
    x?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    y?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    theta?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class DistanceToGoalVector extends jspb.Message {
  hasDeltaX(): boolean;
  clearDeltaX(): void;
  getDeltaX(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDeltaX(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDeltaY(): boolean;
  clearDeltaY(): void;
  getDeltaY(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDeltaY(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDeltaTheta(): boolean;
  clearDeltaTheta(): void;
  getDeltaTheta(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDeltaTheta(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDistance(): boolean;
  clearDistance(): void;
  getDistance(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDistance(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistanceToGoalVector.AsObject;
  static toObject(includeInstance: boolean, msg: DistanceToGoalVector): DistanceToGoalVector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistanceToGoalVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistanceToGoalVector;
  static deserializeBinaryFromReader(message: DistanceToGoalVector, reader: jspb.BinaryReader): DistanceToGoalVector;
}

export namespace DistanceToGoalVector {
  export type AsObject = {
    deltaX?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    deltaY?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    deltaTheta?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    distance?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class ControlModeCommand extends jspb.Message {
  getMode(): ControlModePossiblitiesMap[keyof ControlModePossiblitiesMap];
  setMode(value: ControlModePossiblitiesMap[keyof ControlModePossiblitiesMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlModeCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ControlModeCommand): ControlModeCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlModeCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlModeCommand;
  static deserializeBinaryFromReader(message: ControlModeCommand, reader: jspb.BinaryReader): ControlModeCommand;
}

export namespace ControlModeCommand {
  export type AsObject = {
    mode: ControlModePossiblitiesMap[keyof ControlModePossiblitiesMap],
  }
}

export class ZuuuModeCommand extends jspb.Message {
  getMode(): ZuuuModePossiblitiesMap[keyof ZuuuModePossiblitiesMap];
  setMode(value: ZuuuModePossiblitiesMap[keyof ZuuuModePossiblitiesMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZuuuModeCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ZuuuModeCommand): ZuuuModeCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZuuuModeCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZuuuModeCommand;
  static deserializeBinaryFromReader(message: ZuuuModeCommand, reader: jspb.BinaryReader): ZuuuModeCommand;
}

export namespace ZuuuModeCommand {
  export type AsObject = {
    mode: ZuuuModePossiblitiesMap[keyof ZuuuModePossiblitiesMap],
  }
}

export class BatteryLevel extends jspb.Message {
  hasLevel(): boolean;
  clearLevel(): void;
  getLevel(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setLevel(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatteryLevel.AsObject;
  static toObject(includeInstance: boolean, msg: BatteryLevel): BatteryLevel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatteryLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatteryLevel;
  static deserializeBinaryFromReader(message: BatteryLevel, reader: jspb.BinaryReader): BatteryLevel;
}

export namespace BatteryLevel {
  export type AsObject = {
    level?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class MobileBasePresence extends jspb.Message {
  hasPresence(): boolean;
  clearPresence(): void;
  getPresence(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPresence(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasModelVersion(): boolean;
  clearModelVersion(): void;
  getModelVersion(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setModelVersion(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileBasePresence.AsObject;
  static toObject(includeInstance: boolean, msg: MobileBasePresence): MobileBasePresence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileBasePresence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileBasePresence;
  static deserializeBinaryFromReader(message: MobileBasePresence, reader: jspb.BinaryReader): MobileBasePresence;
}

export namespace MobileBasePresence {
  export type AsObject = {
    presence?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    modelVersion?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class SetZuuuSafetyRequest extends jspb.Message {
  hasSafetyOn(): boolean;
  clearSafetyOn(): void;
  getSafetyOn(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSafetyOn(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetZuuuSafetyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetZuuuSafetyRequest): SetZuuuSafetyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetZuuuSafetyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetZuuuSafetyRequest;
  static deserializeBinaryFromReader(message: SetZuuuSafetyRequest, reader: jspb.BinaryReader): SetZuuuSafetyRequest;
}

export namespace SetZuuuSafetyRequest {
  export type AsObject = {
    safetyOn?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class MobilityServiceAck extends jspb.Message {
  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setSuccess(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobilityServiceAck.AsObject;
  static toObject(includeInstance: boolean, msg: MobilityServiceAck): MobilityServiceAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobilityServiceAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobilityServiceAck;
  static deserializeBinaryFromReader(message: MobilityServiceAck, reader: jspb.BinaryReader): MobilityServiceAck;
}

export namespace MobilityServiceAck {
  export type AsObject = {
    success?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export interface ControlModePossiblitiesMap {
  NONE_CONTROL_MODE: 0;
  OPEN_LOOP: 1;
  PID: 2;
}

export const ControlModePossiblities: ControlModePossiblitiesMap;

export interface ZuuuModePossiblitiesMap {
  NONE_ZUUU_MODE: 0;
  CMD_VEL: 1;
  BRAKE: 2;
  FREE_WHEEL: 3;
  SPEED: 4;
  GOTO: 5;
  EMERGENCY_STOP: 6;
}

export const ZuuuModePossiblities: ZuuuModePossiblitiesMap;

