// package: reachy.sdk.mobility
// file: any_mobile_base_command.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as mobile_platform_reachy_pb from "./mobile_platform_reachy_pb";

export class ResetOdometryMessage extends jspb.Message {
  hasReset(): boolean;
  clearReset(): void;
  getReset(): google_protobuf_empty_pb.Empty | undefined;
  setReset(value?: google_protobuf_empty_pb.Empty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetOdometryMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ResetOdometryMessage): ResetOdometryMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResetOdometryMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetOdometryMessage;
  static deserializeBinaryFromReader(message: ResetOdometryMessage, reader: jspb.BinaryReader): ResetOdometryMessage;
}

export namespace ResetOdometryMessage {
  export type AsObject = {
    reset?: google_protobuf_empty_pb.Empty.AsObject,
  }
}

export class AnyMobileBaseCommand extends jspb.Message {
  hasPresence(): boolean;
  clearPresence(): void;
  getPresence(): mobile_platform_reachy_pb.MobileBasePresence | undefined;
  setPresence(value?: mobile_platform_reachy_pb.MobileBasePresence): void;

  hasTargetDirection(): boolean;
  clearTargetDirection(): void;
  getTargetDirection(): mobile_platform_reachy_pb.TargetDirectionCommand | undefined;
  setTargetDirection(value?: mobile_platform_reachy_pb.TargetDirectionCommand): void;

  hasModeCommand(): boolean;
  clearModeCommand(): void;
  getModeCommand(): mobile_platform_reachy_pb.ZuuuModeCommand | undefined;
  setModeCommand(value?: mobile_platform_reachy_pb.ZuuuModeCommand): void;

  hasGoTo(): boolean;
  clearGoTo(): void;
  getGoTo(): mobile_platform_reachy_pb.GoToVector | undefined;
  setGoTo(value?: mobile_platform_reachy_pb.GoToVector): void;

  hasResetOdometry(): boolean;
  clearResetOdometry(): void;
  getResetOdometry(): ResetOdometryMessage | undefined;
  setResetOdometry(value?: ResetOdometryMessage): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCommandCase(): AnyMobileBaseCommand.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyMobileBaseCommand.AsObject;
  static toObject(includeInstance: boolean, msg: AnyMobileBaseCommand): AnyMobileBaseCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyMobileBaseCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyMobileBaseCommand;
  static deserializeBinaryFromReader(message: AnyMobileBaseCommand, reader: jspb.BinaryReader): AnyMobileBaseCommand;
}

export namespace AnyMobileBaseCommand {
  export type AsObject = {
    presence?: mobile_platform_reachy_pb.MobileBasePresence.AsObject,
    targetDirection?: mobile_platform_reachy_pb.TargetDirectionCommand.AsObject,
    modeCommand?: mobile_platform_reachy_pb.ZuuuModeCommand.AsObject,
    goTo?: mobile_platform_reachy_pb.GoToVector.AsObject,
    resetOdometry?: ResetOdometryMessage.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    PRESENCE = 1,
    TARGET_DIRECTION = 2,
    MODE_COMMAND = 3,
    GO_TO = 4,
    RESET_ODOMETRY = 5,
  }
}

