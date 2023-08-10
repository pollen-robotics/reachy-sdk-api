// package: reachy.sdk.kinematics
// file: fullbody_cartesian_command.proto

import * as jspb from "google-protobuf";
import * as arm_kinematics_pb from "./arm_kinematics_pb";
import * as head_kinematics_pb from "./head_kinematics_pb";

export class FullBodyCartesianCommandAck extends jspb.Message {
  getLeftArmCommandSuccess(): boolean;
  setLeftArmCommandSuccess(value: boolean): void;

  getRightArmCommandSuccess(): boolean;
  setRightArmCommandSuccess(value: boolean): void;

  getHeadCommandSuccess(): boolean;
  setHeadCommandSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullBodyCartesianCommandAck.AsObject;
  static toObject(includeInstance: boolean, msg: FullBodyCartesianCommandAck): FullBodyCartesianCommandAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullBodyCartesianCommandAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullBodyCartesianCommandAck;
  static deserializeBinaryFromReader(message: FullBodyCartesianCommandAck, reader: jspb.BinaryReader): FullBodyCartesianCommandAck;
}

export namespace FullBodyCartesianCommandAck {
  export type AsObject = {
    leftArmCommandSuccess: boolean,
    rightArmCommandSuccess: boolean,
    headCommandSuccess: boolean,
  }
}

export class FullBodyCartesianCommand extends jspb.Message {
  hasLeftArm(): boolean;
  clearLeftArm(): void;
  getLeftArm(): arm_kinematics_pb.ArmIKRequest | undefined;
  setLeftArm(value?: arm_kinematics_pb.ArmIKRequest): void;

  hasRightArm(): boolean;
  clearRightArm(): void;
  getRightArm(): arm_kinematics_pb.ArmIKRequest | undefined;
  setRightArm(value?: arm_kinematics_pb.ArmIKRequest): void;

  hasHead(): boolean;
  clearHead(): void;
  getHead(): head_kinematics_pb.HeadIKRequest | undefined;
  setHead(value?: head_kinematics_pb.HeadIKRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullBodyCartesianCommand.AsObject;
  static toObject(includeInstance: boolean, msg: FullBodyCartesianCommand): FullBodyCartesianCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullBodyCartesianCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullBodyCartesianCommand;
  static deserializeBinaryFromReader(message: FullBodyCartesianCommand, reader: jspb.BinaryReader): FullBodyCartesianCommand;
}

export namespace FullBodyCartesianCommand {
  export type AsObject = {
    leftArm?: arm_kinematics_pb.ArmIKRequest.AsObject,
    rightArm?: arm_kinematics_pb.ArmIKRequest.AsObject,
    head?: head_kinematics_pb.HeadIKRequest.AsObject,
  }
}

