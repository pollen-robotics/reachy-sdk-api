// package: reachy.sdk.trajectory
// file: trajectory.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TrajectoryRequest extends jspb.Message {
  hasStartingPosition(): boolean;
  clearStartingPosition(): void;
  getStartingPosition(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setStartingPosition(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasTargetPosition(): boolean;
  clearTargetPosition(): void;
  getTargetPosition(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setTargetPosition(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDuration(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasDt(): boolean;
  clearDt(): void;
  getDt(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setDt(value?: google_protobuf_wrappers_pb.FloatValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrajectoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrajectoryRequest): TrajectoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrajectoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrajectoryRequest;
  static deserializeBinaryFromReader(message: TrajectoryRequest, reader: jspb.BinaryReader): TrajectoryRequest;
}

export namespace TrajectoryRequest {
  export type AsObject = {
    startingPosition?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    targetPosition?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    duration?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    dt?: google_protobuf_wrappers_pb.FloatValue.AsObject,
  }
}

export class Trajectory extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<number>;
  setPositionsList(value: Array<number>): void;
  addPositions(value: number, index?: number): number;

  getDt(): number;
  setDt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trajectory.AsObject;
  static toObject(includeInstance: boolean, msg: Trajectory): Trajectory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trajectory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trajectory;
  static deserializeBinaryFromReader(message: Trajectory, reader: jspb.BinaryReader): Trajectory;
}

export namespace Trajectory {
  export type AsObject = {
    positionsList: Array<number>,
    dt: number,
  }
}

