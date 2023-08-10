// package: reachy.sdk.camera
// file: camera_reachy.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Image extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class Camera extends jspb.Message {
  getId(): CameraIdMap[keyof CameraIdMap];
  setId(value: CameraIdMap[keyof CameraIdMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Camera.AsObject;
  static toObject(includeInstance: boolean, msg: Camera): Camera.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Camera, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Camera;
  static deserializeBinaryFromReader(message: Camera, reader: jspb.BinaryReader): Camera;
}

export namespace Camera {
  export type AsObject = {
    id: CameraIdMap[keyof CameraIdMap],
  }
}

export class Cameras extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<CameraIdMap[keyof CameraIdMap]>;
  setIdsList(value: Array<CameraIdMap[keyof CameraIdMap]>): void;
  addIds(value: CameraIdMap[keyof CameraIdMap], index?: number): CameraIdMap[keyof CameraIdMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cameras.AsObject;
  static toObject(includeInstance: boolean, msg: Cameras): Cameras.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cameras, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cameras;
  static deserializeBinaryFromReader(message: Cameras, reader: jspb.BinaryReader): Cameras;
}

export namespace Cameras {
  export type AsObject = {
    idsList: Array<CameraIdMap[keyof CameraIdMap]>,
  }
}

export class ImageRequest extends jspb.Message {
  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): Camera | undefined;
  setCamera(value?: Camera): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImageRequest): ImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageRequest;
  static deserializeBinaryFromReader(message: ImageRequest, reader: jspb.BinaryReader): ImageRequest;
}

export namespace ImageRequest {
  export type AsObject = {
    camera?: Camera.AsObject,
  }
}

export class StreamImageRequest extends jspb.Message {
  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): ImageRequest | undefined;
  setRequest(value?: ImageRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamImageRequest): StreamImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamImageRequest;
  static deserializeBinaryFromReader(message: StreamImageRequest, reader: jspb.BinaryReader): StreamImageRequest;
}

export namespace StreamImageRequest {
  export type AsObject = {
    request?: ImageRequest.AsObject,
  }
}

export class ZoomSpeed extends jspb.Message {
  getSpeed(): number;
  setSpeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomSpeed.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomSpeed): ZoomSpeed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomSpeed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomSpeed;
  static deserializeBinaryFromReader(message: ZoomSpeed, reader: jspb.BinaryReader): ZoomSpeed;
}

export namespace ZoomSpeed {
  export type AsObject = {
    speed: number,
  }
}

export class ZoomHoming extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomHoming.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomHoming): ZoomHoming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomHoming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomHoming;
  static deserializeBinaryFromReader(message: ZoomHoming, reader: jspb.BinaryReader): ZoomHoming;
}

export namespace ZoomHoming {
  export type AsObject = {
  }
}

export class ZoomLevel extends jspb.Message {
  getLevel(): ZoomLevelPossibilitiesMap[keyof ZoomLevelPossibilitiesMap];
  setLevel(value: ZoomLevelPossibilitiesMap[keyof ZoomLevelPossibilitiesMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomLevel.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomLevel): ZoomLevel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomLevel;
  static deserializeBinaryFromReader(message: ZoomLevel, reader: jspb.BinaryReader): ZoomLevel;
}

export namespace ZoomLevel {
  export type AsObject = {
    level: ZoomLevelPossibilitiesMap[keyof ZoomLevelPossibilitiesMap],
  }
}

export class ZoomCommandAck extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomCommandAck.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomCommandAck): ZoomCommandAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomCommandAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomCommandAck;
  static deserializeBinaryFromReader(message: ZoomCommandAck, reader: jspb.BinaryReader): ZoomCommandAck;
}

export namespace ZoomCommandAck {
  export type AsObject = {
    success: boolean,
  }
}

export class ZoomCommand extends jspb.Message {
  hasCamera(): boolean;
  clearCamera(): void;
  getCamera(): Camera | undefined;
  setCamera(value?: Camera): void;

  hasHomingCommand(): boolean;
  clearHomingCommand(): void;
  getHomingCommand(): ZoomHoming | undefined;
  setHomingCommand(value?: ZoomHoming): void;

  hasSpeedCommand(): boolean;
  clearSpeedCommand(): void;
  getSpeedCommand(): ZoomSpeed | undefined;
  setSpeedCommand(value?: ZoomSpeed): void;

  hasLevelCommand(): boolean;
  clearLevelCommand(): void;
  getLevelCommand(): ZoomLevel | undefined;
  setLevelCommand(value?: ZoomLevel): void;

  getCommandCase(): ZoomCommand.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomCommand.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomCommand): ZoomCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomCommand;
  static deserializeBinaryFromReader(message: ZoomCommand, reader: jspb.BinaryReader): ZoomCommand;
}

export namespace ZoomCommand {
  export type AsObject = {
    camera?: Camera.AsObject,
    homingCommand?: ZoomHoming.AsObject,
    speedCommand?: ZoomSpeed.AsObject,
    levelCommand?: ZoomLevel.AsObject,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    HOMING_COMMAND = 2,
    SPEED_COMMAND = 3,
    LEVEL_COMMAND = 4,
  }
}

export class ZoomFocusMessage extends jspb.Message {
  hasLeftFocus(): boolean;
  clearLeftFocus(): void;
  getLeftFocus(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setLeftFocus(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  hasLeftZoom(): boolean;
  clearLeftZoom(): void;
  getLeftZoom(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setLeftZoom(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  hasRightFocus(): boolean;
  clearRightFocus(): void;
  getRightFocus(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setRightFocus(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  hasRightZoom(): boolean;
  clearRightZoom(): void;
  getRightZoom(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setRightZoom(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoomFocusMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ZoomFocusMessage): ZoomFocusMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ZoomFocusMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoomFocusMessage;
  static deserializeBinaryFromReader(message: ZoomFocusMessage, reader: jspb.BinaryReader): ZoomFocusMessage;
}

export namespace ZoomFocusMessage {
  export type AsObject = {
    leftFocus?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    leftZoom?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    rightFocus?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    rightZoom?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export interface CameraIdMap {
  LEFT: 0;
  RIGHT: 1;
}

export const CameraId: CameraIdMap;

export interface ZoomLevelPossibilitiesMap {
  ZERO: 0;
  IN: 1;
  INTER: 2;
  OUT: 3;
}

export const ZoomLevelPossibilities: ZoomLevelPossibilitiesMap;

