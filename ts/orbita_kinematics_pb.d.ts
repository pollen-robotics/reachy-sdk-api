// package: reachy.sdk.kinematics
// file: orbita_kinematics.proto

import * as jspb from "google-protobuf";
import * as kinematics_pb from "./kinematics_pb";

export class OrbitaIKRequest extends jspb.Message {
  hasQ(): boolean;
  clearQ(): void;
  getQ(): kinematics_pb.Quaternion | undefined;
  setQ(value?: kinematics_pb.Quaternion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrbitaIKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrbitaIKRequest): OrbitaIKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrbitaIKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrbitaIKRequest;
  static deserializeBinaryFromReader(message: OrbitaIKRequest, reader: jspb.BinaryReader): OrbitaIKRequest;
}

export namespace OrbitaIKRequest {
  export type AsObject = {
    q?: kinematics_pb.Quaternion.AsObject,
  }
}

