// package: reachy.sdk.realsense
// file: realsense.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Point extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setX(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasY(): boolean;
  clearY(): void;
  getY(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setY(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasZ(): boolean;
  clearZ(): void;
  getZ(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setZ(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    x?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    y?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    z?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class PointCloud extends jspb.Message {
  clearPointCloudList(): void;
  getPointCloudList(): Array<Point>;
  setPointCloudList(value: Array<Point>): void;
  addPointCloud(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloud.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloud): PointCloud.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointCloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloud;
  static deserializeBinaryFromReader(message: PointCloud, reader: jspb.BinaryReader): PointCloud;
}

export namespace PointCloud {
  export type AsObject = {
    pointCloudList: Array<Point.AsObject>,
  }
}

export class PointCloudMessage extends jspb.Message {
  hasGround(): boolean;
  clearGround(): void;
  getGround(): PointCloud | undefined;
  setGround(value?: PointCloud): void;

  hasObjects(): boolean;
  clearObjects(): void;
  getObjects(): PointCloud | undefined;
  setObjects(value?: PointCloud): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PointCloudMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PointCloudMessage): PointCloudMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PointCloudMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PointCloudMessage;
  static deserializeBinaryFromReader(message: PointCloudMessage, reader: jspb.BinaryReader): PointCloudMessage;
}

export namespace PointCloudMessage {
  export type AsObject = {
    ground?: PointCloud.AsObject,
    objects?: PointCloud.AsObject,
  }
}

