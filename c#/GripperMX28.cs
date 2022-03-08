// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: gripperMX28.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Reachy.Sdk.GripperMX28 {

  /// <summary>Holder for reflection information generated from gripperMX28.proto</summary>
  public static partial class GripperMX28Reflection {

    #region Descriptor
    /// <summary>File descriptor for gripperMX28.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static GripperMX28Reflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChFncmlwcGVyTVgyOC5wcm90bxIWcmVhY2h5LnNkay5ncmlwcGVyTVgyOBof",
            "Z29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcC5wcm90bxoNZ3JpcHBlci5wcm90",
            "byJWChJHcmlwcGVyTVgyOENvbW1hbmQSKQoCaWQYASABKA4yHS5yZWFjaHku",
            "c2RrLmdyaXBwZXIuR3JpcHBlcklkEhUKDWdvYWxfcG9zaXRpb24YAiABKAIi",
            "ggEKE0dyaXBwZXJzTVgyOENvbW1hbmQSPAoIY29tbWFuZHMYASADKAsyKi5y",
            "ZWFjaHkuc2RrLmdyaXBwZXJNWDI4LkdyaXBwZXJNWDI4Q29tbWFuZBItCgl0",
            "aW1lc3RhbXAYDyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wMn0K",
            "EkdyaXBwZXJNWDI4U2VydmljZRJnChdTZW5kR3JpcHBlck1YMjhDb21tYW5k",
            "cxIrLnJlYWNoeS5zZGsuZ3JpcHBlck1YMjguR3JpcHBlcnNNWDI4Q29tbWFu",
            "ZBofLnJlYWNoeS5zZGsuZ3JpcHBlci5HcmlwcGVyc0Fja2IGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, global::Reachy.Sdk.Gripper.GripperReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.GripperMX28.GripperMX28Command), global::Reachy.Sdk.GripperMX28.GripperMX28Command.Parser, new[]{ "Id", "GoalPosition" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.GripperMX28.GrippersMX28Command), global::Reachy.Sdk.GripperMX28.GrippersMX28Command.Parser, new[]{ "Commands", "Timestamp" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class GripperMX28Command : pb::IMessage<GripperMX28Command>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GripperMX28Command> _parser = new pb::MessageParser<GripperMX28Command>(() => new GripperMX28Command());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GripperMX28Command> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.GripperMX28.GripperMX28Reflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GripperMX28Command() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GripperMX28Command(GripperMX28Command other) : this() {
      id_ = other.id_;
      goalPosition_ = other.goalPosition_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GripperMX28Command Clone() {
      return new GripperMX28Command(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private global::Reachy.Sdk.Gripper.GripperId id_ = global::Reachy.Sdk.Gripper.GripperId.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Gripper.GripperId Id {
      get { return id_; }
      set {
        id_ = value;
      }
    }

    /// <summary>Field number for the "goal_position" field.</summary>
    public const int GoalPositionFieldNumber = 2;
    private float goalPosition_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float GoalPosition {
      get { return goalPosition_; }
      set {
        goalPosition_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GripperMX28Command);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GripperMX28Command other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(GoalPosition, other.GoalPosition)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id != global::Reachy.Sdk.Gripper.GripperId.None) hash ^= Id.GetHashCode();
      if (GoalPosition != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(GoalPosition);
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
      if (Id != global::Reachy.Sdk.Gripper.GripperId.None) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Id);
      }
      if (GoalPosition != 0F) {
        output.WriteRawTag(21);
        output.WriteFloat(GoalPosition);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Id != global::Reachy.Sdk.Gripper.GripperId.None) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Id);
      }
      if (GoalPosition != 0F) {
        output.WriteRawTag(21);
        output.WriteFloat(GoalPosition);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Id != global::Reachy.Sdk.Gripper.GripperId.None) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Id);
      }
      if (GoalPosition != 0F) {
        size += 1 + 4;
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GripperMX28Command other) {
      if (other == null) {
        return;
      }
      if (other.Id != global::Reachy.Sdk.Gripper.GripperId.None) {
        Id = other.Id;
      }
      if (other.GoalPosition != 0F) {
        GoalPosition = other.GoalPosition;
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
          case 8: {
            Id = (global::Reachy.Sdk.Gripper.GripperId) input.ReadEnum();
            break;
          }
          case 21: {
            GoalPosition = input.ReadFloat();
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
          case 8: {
            Id = (global::Reachy.Sdk.Gripper.GripperId) input.ReadEnum();
            break;
          }
          case 21: {
            GoalPosition = input.ReadFloat();
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class GrippersMX28Command : pb::IMessage<GrippersMX28Command>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<GrippersMX28Command> _parser = new pb::MessageParser<GrippersMX28Command>(() => new GrippersMX28Command());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<GrippersMX28Command> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.GripperMX28.GripperMX28Reflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GrippersMX28Command() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GrippersMX28Command(GrippersMX28Command other) : this() {
      commands_ = other.commands_.Clone();
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public GrippersMX28Command Clone() {
      return new GrippersMX28Command(this);
    }

    /// <summary>Field number for the "commands" field.</summary>
    public const int CommandsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Reachy.Sdk.GripperMX28.GripperMX28Command> _repeated_commands_codec
        = pb::FieldCodec.ForMessage(10, global::Reachy.Sdk.GripperMX28.GripperMX28Command.Parser);
    private readonly pbc::RepeatedField<global::Reachy.Sdk.GripperMX28.GripperMX28Command> commands_ = new pbc::RepeatedField<global::Reachy.Sdk.GripperMX28.GripperMX28Command>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Reachy.Sdk.GripperMX28.GripperMX28Command> Commands {
      get { return commands_; }
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

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as GrippersMX28Command);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(GrippersMX28Command other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!commands_.Equals(other.commands_)) return false;
      if (!object.Equals(Timestamp, other.Timestamp)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= commands_.GetHashCode();
      if (timestamp_ != null) hash ^= Timestamp.GetHashCode();
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
      commands_.WriteTo(output, _repeated_commands_codec);
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
      commands_.WriteTo(ref output, _repeated_commands_codec);
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
      size += commands_.CalculateSize(_repeated_commands_codec);
      if (timestamp_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Timestamp);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(GrippersMX28Command other) {
      if (other == null) {
        return;
      }
      commands_.Add(other.commands_);
      if (other.timestamp_ != null) {
        if (timestamp_ == null) {
          Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        Timestamp.MergeFrom(other.Timestamp);
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
            commands_.AddEntriesFrom(input, _repeated_commands_codec);
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
            commands_.AddEntriesFrom(ref input, _repeated_commands_codec);
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
