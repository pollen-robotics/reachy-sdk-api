// package: reachy.sdk.kinematics
// file: head_kinematics.proto

import * as jspb from "google-protobuf";
import * as kinematics_pb from "./kinematics_pb";

export class HeadIKRequest extends jspb.Message {
  hasQ(): boolean;
  clearQ(): void;
  getQ(): kinematics_pb.Quaternion | undefined;
  setQ(value?: kinematics_pb.Quaternion): void;

  hasQ0(): boolean;
  clearQ0(): void;
  getQ0(): kinematics_pb.JointPosition | undefined;
  setQ0(value?: kinematics_pb.JointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadIKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeadIKRequest): HeadIKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadIKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadIKRequest;
  static deserializeBinaryFromReader(message: HeadIKRequest, reader: jspb.BinaryReader): HeadIKRequest;
}

export namespace HeadIKRequest {
  export type AsObject = {
    q?: kinematics_pb.Quaternion.AsObject,
    q0?: kinematics_pb.JointPosition.AsObject,
  }
}

export class HeadFKRequest extends jspb.Message {
  hasNeckPosition(): boolean;
  clearNeckPosition(): void;
  getNeckPosition(): kinematics_pb.JointPosition | undefined;
  setNeckPosition(value?: kinematics_pb.JointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadFKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HeadFKRequest): HeadFKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadFKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadFKRequest;
  static deserializeBinaryFromReader(message: HeadFKRequest, reader: jspb.BinaryReader): HeadFKRequest;
}

export namespace HeadFKRequest {
  export type AsObject = {
    neckPosition?: kinematics_pb.JointPosition.AsObject,
  }
}

export class HeadFKSolution extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasQ(): boolean;
  clearQ(): void;
  getQ(): kinematics_pb.Quaternion | undefined;
  setQ(value?: kinematics_pb.Quaternion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadFKSolution.AsObject;
  static toObject(includeInstance: boolean, msg: HeadFKSolution): HeadFKSolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadFKSolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadFKSolution;
  static deserializeBinaryFromReader(message: HeadFKSolution, reader: jspb.BinaryReader): HeadFKSolution;
}

export namespace HeadFKSolution {
  export type AsObject = {
    success: boolean,
    q?: kinematics_pb.Quaternion.AsObject,
  }
}

export class HeadIKSolution extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasNeckPosition(): boolean;
  clearNeckPosition(): void;
  getNeckPosition(): kinematics_pb.JointPosition | undefined;
  setNeckPosition(value?: kinematics_pb.JointPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeadIKSolution.AsObject;
  static toObject(includeInstance: boolean, msg: HeadIKSolution): HeadIKSolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeadIKSolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeadIKSolution;
  static deserializeBinaryFromReader(message: HeadIKSolution, reader: jspb.BinaryReader): HeadIKSolution;
}

export namespace HeadIKSolution {
  export type AsObject = {
    success: boolean,
    neckPosition?: kinematics_pb.JointPosition.AsObject,
  }
}

