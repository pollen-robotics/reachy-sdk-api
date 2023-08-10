// package: reachy.sdk.joint
// file: any_joint_command.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as fullbody_cartesian_command_pb from "./fullbody_cartesian_command_pb";
import * as joint_pb from "./joint_pb";

export class AnyJointsCommand extends jspb.Message {
  hasFullBody(): boolean;
  clearFullBody(): void;
  getFullBody(): fullbody_cartesian_command_pb.FullBodyCartesianCommand | undefined;
  setFullBody(value?: fullbody_cartesian_command_pb.FullBodyCartesianCommand): void;

  hasJoints(): boolean;
  clearJoints(): void;
  getJoints(): joint_pb.JointsCommand | undefined;
  setJoints(value?: joint_pb.JointsCommand): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCommandCase(): AnyJointsCommand.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyJointsCommand.AsObject;
  static toObject(includeInstance: boolean, msg: AnyJointsCommand): AnyJointsCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyJointsCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyJointsCommand;
  static deserializeBinaryFromReader(message: AnyJointsCommand, reader: jspb.BinaryReader): AnyJointsCommand;
}

export namespace AnyJointsCommand {
  export type AsObject = {
    fullBody?: fullbody_cartesian_command_pb.FullBodyCartesianCommand.AsObject,
    joints?: joint_pb.JointsCommand.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    FULL_BODY = 1,
    JOINTS = 3,
  }
}

