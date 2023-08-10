// package: reachy.sdk.exo_arm
// file: exo_arm.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ElbowTorques extends jspb.Message {
  hasRight(): boolean;
  clearRight(): void;
  getRight(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setRight(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasLeft(): boolean;
  clearLeft(): void;
  getLeft(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLeft(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElbowTorques.AsObject;
  static toObject(includeInstance: boolean, msg: ElbowTorques): ElbowTorques.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElbowTorques, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElbowTorques;
  static deserializeBinaryFromReader(message: ElbowTorques, reader: jspb.BinaryReader): ElbowTorques;
}

export namespace ElbowTorques {
  export type AsObject = {
    right?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    left?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

