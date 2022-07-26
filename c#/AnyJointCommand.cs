// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: any_joint_command.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Reachy.Sdk.Joint {

  /// <summary>Holder for reflection information generated from any_joint_command.proto</summary>
  public static partial class AnyJointCommandReflection {

    #region Descriptor
    /// <summary>File descriptor for any_joint_command.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static AnyJointCommandReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chdhbnlfam9pbnRfY29tbWFuZC5wcm90bxIQcmVhY2h5LnNkay5qb2ludBof",
            "Z29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcC5wcm90bxogZnVsbGJvZHlfY2Fy",
            "dGVzaWFuX2NvbW1hbmQucHJvdG8aC2pvaW50LnByb3RvIsUBChBBbnlKb2lu",
            "dHNDb21tYW5kEkQKCWZ1bGxfYm9keRgBIAEoCzIvLnJlYWNoeS5zZGsua2lu",
            "ZW1hdGljcy5GdWxsQm9keUNhcnRlc2lhbkNvbW1hbmRIABIxCgZqb2ludHMY",
            "AyABKAsyHy5yZWFjaHkuc2RrLmpvaW50LkpvaW50c0NvbW1hbmRIABItCgl0",
            "aW1lc3RhbXAYDyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgkK",
            "B2NvbW1hbmRiBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, global::Reachy.Sdk.Kinematics.FullbodyCartesianCommandReflection.Descriptor, global::Reachy.Sdk.Joint.JointReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Joint.AnyJointsCommand), global::Reachy.Sdk.Joint.AnyJointsCommand.Parser, new[]{ "FullBody", "Joints", "Timestamp" }, new[]{ "Command" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class AnyJointsCommand : pb::IMessage<AnyJointsCommand>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<AnyJointsCommand> _parser = new pb::MessageParser<AnyJointsCommand>(() => new AnyJointsCommand());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AnyJointsCommand> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Joint.AnyJointCommandReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AnyJointsCommand() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AnyJointsCommand(AnyJointsCommand other) : this() {
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      switch (other.CommandCase) {
        case CommandOneofCase.FullBody:
          FullBody = other.FullBody.Clone();
          break;
        case CommandOneofCase.Gripper:
          Gripper = other.Gripper.Clone();
          break;
        case CommandOneofCase.Joints:
          Joints = other.Joints.Clone();
          break;
        case CommandOneofCase.GripperMX28:
          GripperMX28 = other.GripperMX28.Clone();
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AnyJointsCommand Clone() {
      return new AnyJointsCommand(this);
    }

    /// <summary>Field number for the "full_body" field.</summary>
    public const int FullBodyFieldNumber = 1;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand FullBody {
      get { return commandCase_ == CommandOneofCase.FullBody ? (global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand) command_ : null; }
      set {
        command_ = value;
        commandCase_ = value == null ? CommandOneofCase.None : CommandOneofCase.FullBody;
      }
    }

    /// <summary>Field number for the "gripper" field.</summary>
    public const int GripperFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Gripper.GrippersCommand Gripper {
      get { return commandCase_ == CommandOneofCase.Gripper ? (global::Reachy.Sdk.Gripper.GrippersCommand) command_ : null; }
      set {
        command_ = value;
        commandCase_ = value == null ? CommandOneofCase.None : CommandOneofCase.Gripper;
      }
    }

    /// <summary>Field number for the "joints" field.</summary>
    public const int JointsFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Joint.JointsCommand Joints {
      get { return commandCase_ == CommandOneofCase.Joints ? (global::Reachy.Sdk.Joint.JointsCommand) command_ : null; }
      set {
        command_ = value;
        commandCase_ = value == null ? CommandOneofCase.None : CommandOneofCase.Joints;
      }
    }

    /// <summary>Field number for the "gripperMX28" field.</summary>
    public const int GripperMX28FieldNumber = 4;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.GripperMX28.GrippersMX28Command GripperMX28 {
      get { return commandCase_ == CommandOneofCase.GripperMX28 ? (global::Reachy.Sdk.GripperMX28.GrippersMX28Command) command_ : null; }
      set {
        command_ = value;
        commandCase_ = value == null ? CommandOneofCase.None : CommandOneofCase.GripperMX28;
      }
    }

    /// <summary>Field number for the "timestamp" field.</summary>
    public const int TimestampFieldNumber = 15;
    private global::Google.Protobuf.WellKnownTypes.Timestamp timestamp_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp Timestamp {
      get { return timestamp_; }
      set {
        timestamp_ = value;
      }
    }

    private object command_;
    /// <summary>Enum of possible cases for the "command" oneof.</summary>
    public enum CommandOneofCase {
      None = 0,
      FullBody = 1,
      Gripper = 2,
      Joints = 3,
      GripperMX28 = 4,

    }
    private CommandOneofCase commandCase_ = CommandOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CommandOneofCase CommandCase {
      get { return commandCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearCommand() {
      commandCase_ = CommandOneofCase.None;
      command_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AnyJointsCommand);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AnyJointsCommand other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(FullBody, other.FullBody)) return false;
      if (!object.Equals(Gripper, other.Gripper)) return false;
      if (!object.Equals(Joints, other.Joints)) return false;
      if (!object.Equals(GripperMX28, other.GripperMX28)) return false;

      if (!object.Equals(Timestamp, other.Timestamp)) return false;
      if (CommandCase != other.CommandCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (commandCase_ == CommandOneofCase.FullBody) hash ^= FullBody.GetHashCode();
      if (commandCase_ == CommandOneofCase.Gripper) hash ^= Gripper.GetHashCode();
      if (commandCase_ == CommandOneofCase.Joints) hash ^= Joints.GetHashCode();
      if (commandCase_ == CommandOneofCase.GripperMX28) hash ^= GripperMX28.GetHashCode();
      if (timestamp_ != null) hash ^= Timestamp.GetHashCode();
      hash ^= (int) commandCase_;
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (commandCase_ == CommandOneofCase.FullBody) {
        output.WriteRawTag(10);
        output.WriteMessage(FullBody);
      }
      if (commandCase_ == CommandOneofCase.Gripper) {
        output.WriteRawTag(18);
        output.WriteMessage(Gripper);
      }

      if (commandCase_ == CommandOneofCase.Joints) {
        output.WriteRawTag(26);
        output.WriteMessage(Joints);
      }
      if (commandCase_ == CommandOneofCase.GripperMX28) {
        output.WriteRawTag(34);
        output.WriteMessage(GripperMX28);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(122);
        output.WriteMessage(Timestamp);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (commandCase_ == CommandOneofCase.FullBody) {
        output.WriteRawTag(10);
        output.WriteMessage(FullBody);
      }
      if (commandCase_ == CommandOneofCase.Gripper) {
        output.WriteRawTag(18);
        output.WriteMessage(Gripper);
      }
      if (commandCase_ == CommandOneofCase.Joints) {
        output.WriteRawTag(26);
        output.WriteMessage(Joints);
      }
      if (commandCase_ == CommandOneofCase.GripperMX28) {
        output.WriteRawTag(34);
        output.WriteMessage(GripperMX28);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(122);
        output.WriteMessage(Timestamp);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (commandCase_ == CommandOneofCase.FullBody) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(FullBody);
      }
      if (commandCase_ == CommandOneofCase.Gripper) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Gripper);
      }
      if (commandCase_ == CommandOneofCase.Joints) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Joints);
      }
      if (commandCase_ == CommandOneofCase.GripperMX28) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(GripperMX28);
      }
      if (timestamp_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Timestamp);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AnyJointsCommand other) {
      if (other == null) {
        return;
      }
      if (other.timestamp_ != null) {
        if (timestamp_ == null) {
          Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        Timestamp.MergeFrom(other.Timestamp);
      }
      switch (other.CommandCase) {
        case CommandOneofCase.FullBody:
          if (FullBody == null) {
            FullBody = new global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand();
          }
          FullBody.MergeFrom(other.FullBody);
          break;
        case CommandOneofCase.Gripper:
          if (Gripper == null) {
            Gripper = new global::Reachy.Sdk.Gripper.GrippersCommand();
          }
          Gripper.MergeFrom(other.Gripper);
          break;
        case CommandOneofCase.Joints:
          if (Joints == null) {
            Joints = new global::Reachy.Sdk.Joint.JointsCommand();
          }
          Joints.MergeFrom(other.Joints);
          break;
        case CommandOneofCase.GripperMX28:
          if (GripperMX28 == null) {
            GripperMX28 = new global::Reachy.Sdk.GripperMX28.GrippersMX28Command();
          }
          GripperMX28.MergeFrom(other.GripperMX28);
          break;
      }

      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand subBuilder = new global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand();
            if (commandCase_ == CommandOneofCase.FullBody) {
              subBuilder.MergeFrom(FullBody);
            }
            input.ReadMessage(subBuilder);
            FullBody = subBuilder;
            break;
          }
          case 18: {
            global::Reachy.Sdk.Gripper.GrippersCommand subBuilder = new global::Reachy.Sdk.Gripper.GrippersCommand();
            if (commandCase_ == CommandOneofCase.Gripper) {
              subBuilder.MergeFrom(Gripper);
            }
            input.ReadMessage(subBuilder);
            Gripper = subBuilder;
            break;
          }
          case 26: {
            global::Reachy.Sdk.Joint.JointsCommand subBuilder = new global::Reachy.Sdk.Joint.JointsCommand();
            if (commandCase_ == CommandOneofCase.Joints) {
              subBuilder.MergeFrom(Joints);
            }
            input.ReadMessage(subBuilder);
            Joints = subBuilder;
            break;
          }
          case 34: {
            global::Reachy.Sdk.GripperMX28.GrippersMX28Command subBuilder = new global::Reachy.Sdk.GripperMX28.GrippersMX28Command();
            if (commandCase_ == CommandOneofCase.GripperMX28) {
              subBuilder.MergeFrom(GripperMX28);
            }
            input.ReadMessage(subBuilder);
            GripperMX28 = subBuilder;
            break;
          }
          case 122: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand subBuilder = new global::Reachy.Sdk.Kinematics.FullBodyCartesianCommand();
            if (commandCase_ == CommandOneofCase.FullBody) {
              subBuilder.MergeFrom(FullBody);
            }
            input.ReadMessage(subBuilder);
            FullBody = subBuilder;
            break;
          }
          case 18: {
            global::Reachy.Sdk.Gripper.GrippersCommand subBuilder = new global::Reachy.Sdk.Gripper.GrippersCommand();
            if (commandCase_ == CommandOneofCase.Gripper) {
              subBuilder.MergeFrom(Gripper);
            }
            input.ReadMessage(subBuilder);
            Gripper = subBuilder;
            break;
          }
          case 26: {
            global::Reachy.Sdk.Joint.JointsCommand subBuilder = new global::Reachy.Sdk.Joint.JointsCommand();
            if (commandCase_ == CommandOneofCase.Joints) {
              subBuilder.MergeFrom(Joints);
            }
            input.ReadMessage(subBuilder);
            Joints = subBuilder;
            break;
          }
          case 34: {
            global::Reachy.Sdk.GripperMX28.GrippersMX28Command subBuilder = new global::Reachy.Sdk.GripperMX28.GrippersMX28Command();
            if (commandCase_ == CommandOneofCase.GripperMX28) {
              subBuilder.MergeFrom(GripperMX28);
            }
            input.ReadMessage(subBuilder);
            GripperMX28 = subBuilder;
            break;
          }
          case 122: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
