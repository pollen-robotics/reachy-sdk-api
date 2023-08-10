// package: reachy.sdk.config
// file: config.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class ConfigReachy extends jspb.Message {
  getGeneration(): number;
  setGeneration(value: number): void;

  getMobileBasePresence(): boolean;
  setMobileBasePresence(value: boolean): void;

  clearCameraParametersList(): void;
  getCameraParametersList(): Array<number>;
  setCameraParametersList(value: Array<number>): void;
  addCameraParameters(value: number, index?: number): number;

  getConfig(): string;
  setConfig(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigReachy.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigReachy): ConfigReachy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigReachy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigReachy;
  static deserializeBinaryFromReader(message: ConfigReachy, reader: jspb.BinaryReader): ConfigReachy;
}

export namespace ConfigReachy {
  export type AsObject = {
    generation: number,
    mobileBasePresence: boolean,
    cameraParametersList: Array<number>,
    config: string,
  }
}

