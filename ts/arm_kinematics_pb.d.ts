// package: reachy.sdk.kinematics
// file: arm_kinematics.proto

import * as jspb from "google-protobuf";
import * as kinematics_pb from "./kinematics_pb";

export class ArmEndEffector extends jspb.Message {
  getSide(): ArmSideMap[keyof ArmSideMap];
  setSide(value: ArmSideMap[keyof ArmSideMap]): void;

  hasPose(): boolean;
  clearPose(): void;
  getPose(): kinematics_pb.Matrix4x4 | undefined;
  setPose(value?: kinematics_pb.Matrix4x4): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmEndEffector.AsObject;
  static toObject(includeInstance: boolean, msg: ArmEndEffector): ArmEndEffector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmEndEffector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmEndEffector;
  static deserializeBinaryFromReader(message: ArmEndEffector, reader: jspb.BinaryReader): ArmEndEffector;
}

export namespace ArmEndEffector {
  export type AsObject = {
    side: ArmSideMap[keyof ArmSideMap],
    pose?: kinematics_pb.Matrix4x4.AsObject,
  }
}

export class ArmJointPosition extends jspb.Message {
  getSide(): ArmSideMap[keyof ArmSideMap];
  setSide(value: ArmSideMap[keyof ArmSideMap]): void;

  hasPositions(): boolean;
  clearPositions(): void;
  getPositions(): kinematics_pb.JointPosition | undefined;
  setPositions(value?: kinematics_pb.JointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmJointPosition.AsObject;
  static toObject(includeInstance: boolean, msg: ArmJointPosition): ArmJointPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmJointPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmJointPosition;
  static deserializeBinaryFromReader(message: ArmJointPosition, reader: jspb.BinaryReader): ArmJointPosition;
}

export namespace ArmJointPosition {
  export type AsObject = {
    side: ArmSideMap[keyof ArmSideMap],
    positions?: kinematics_pb.JointPosition.AsObject,
  }
}

export class ArmFKRequest extends jspb.Message {
  hasArmPosition(): boolean;
  clearArmPosition(): void;
  getArmPosition(): ArmJointPosition | undefined;
  setArmPosition(value?: ArmJointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmFKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArmFKRequest): ArmFKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmFKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmFKRequest;
  static deserializeBinaryFromReader(message: ArmFKRequest, reader: jspb.BinaryReader): ArmFKRequest;
}

export namespace ArmFKRequest {
  export type AsObject = {
    armPosition?: ArmJointPosition.AsObject,
  }
}

export class ArmFKSolution extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasEndEffector(): boolean;
  clearEndEffector(): void;
  getEndEffector(): ArmEndEffector | undefined;
  setEndEffector(value?: ArmEndEffector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmFKSolution.AsObject;
  static toObject(includeInstance: boolean, msg: ArmFKSolution): ArmFKSolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmFKSolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmFKSolution;
  static deserializeBinaryFromReader(message: ArmFKSolution, reader: jspb.BinaryReader): ArmFKSolution;
}

export namespace ArmFKSolution {
  export type AsObject = {
    success: boolean,
    endEffector?: ArmEndEffector.AsObject,
  }
}

export class ArmIKRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): ArmEndEffector | undefined;
  setTarget(value?: ArmEndEffector): void;

  hasQ0(): boolean;
  clearQ0(): void;
  getQ0(): kinematics_pb.JointPosition | undefined;
  setQ0(value?: kinematics_pb.JointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmIKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArmIKRequest): ArmIKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmIKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmIKRequest;
  static deserializeBinaryFromReader(message: ArmIKRequest, reader: jspb.BinaryReader): ArmIKRequest;
}

export namespace ArmIKRequest {
  export type AsObject = {
    target?: ArmEndEffector.AsObject,
    q0?: kinematics_pb.JointPosition.AsObject,
  }
}

export class ArmIKSolution extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasArmPosition(): boolean;
  clearArmPosition(): void;
  getArmPosition(): ArmJointPosition | undefined;
  setArmPosition(value?: ArmJointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArmIKSolution.AsObject;
  static toObject(includeInstance: boolean, msg: ArmIKSolution): ArmIKSolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArmIKSolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArmIKSolution;
  static deserializeBinaryFromReader(message: ArmIKSolution, reader: jspb.BinaryReader): ArmIKSolution;
}

export namespace ArmIKSolution {
  export type AsObject = {
    success: boolean,
    armPosition?: ArmJointPosition.AsObject,
  }
}

export interface ArmSideMap {
  LEFT: 0;
  RIGHT: 1;
}

export const ArmSide: ArmSideMap;

