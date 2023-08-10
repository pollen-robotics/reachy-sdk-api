// package: reachy.sdk.kinematics
// file: kinematics.proto

import * as jspb from "google-protobuf";
import * as joint_pb from "./joint_pb";

export class JointPosition extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<joint_pb.JointId>;
  setIdsList(value: Array<joint_pb.JointId>): void;
  addIds(value?: joint_pb.JointId, index?: number): joint_pb.JointId;

  clearPositionsList(): void;
  getPositionsList(): Array<number>;
  setPositionsList(value: Array<number>): void;
  addPositions(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JointPosition.AsObject;
  static toObject(includeInstance: boolean, msg: JointPosition): JointPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JointPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JointPosition;
  static deserializeBinaryFromReader(message: JointPosition, reader: jspb.BinaryReader): JointPosition;
}

export namespace JointPosition {
  export type AsObject = {
    idsList: Array<joint_pb.JointId.AsObject>,
    positionsList: Array<number>,
  }
}

export class Matrix4x4 extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Matrix4x4.AsObject;
  static toObject(includeInstance: boolean, msg: Matrix4x4): Matrix4x4.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Matrix4x4, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Matrix4x4;
  static deserializeBinaryFromReader(message: Matrix4x4, reader: jspb.BinaryReader): Matrix4x4;
}

export namespace Matrix4x4 {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class Quaternion extends jspb.Message {
  getW(): number;
  setW(value: number): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quaternion.AsObject;
  static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quaternion;
  static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
  export type AsObject = {
    w: number,
    x: number,
    y: number,
    z: number,
  }
}

