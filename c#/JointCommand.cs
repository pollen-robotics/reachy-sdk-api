// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: joint_command.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Reachy.Sdk.Joint {

  /// <summary>Holder for reflection information generated from joint_command.proto</summary>
  public static partial class JointCommandReflection {

    #region Descriptor
    /// <summary>File descriptor for joint_command.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static JointCommandReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChNqb2ludF9jb21tYW5kLnByb3RvEhByZWFjaHkuc2RrLmpvaW50Gh9nb29n",
            "bGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvGh5nb29nbGUvcHJvdG9idWYv",
            "d3JhcHBlcnMucHJvdG8ikQIKDEpvaW50Q29tbWFuZBIKCgJpZBgBIAEoDRIt",
            "Cgljb21wbGlhbnQYCCABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVl",
            "EjIKDWdvYWxfcG9zaXRpb24YCSABKAsyGy5nb29nbGUucHJvdG9idWYuRmxv",
            "YXRWYWx1ZRIwCgtzcGVlZF9saW1pdBgKIAEoCzIbLmdvb2dsZS5wcm90b2J1",
            "Zi5GbG9hdFZhbHVlEjEKDHRvcnF1ZV9saW1pdBgLIAEoCzIbLmdvb2dsZS5w",
            "cm90b2J1Zi5GbG9hdFZhbHVlEi0KCXRpbWVzdGFtcBgPIAEoCzIaLmdvb2ds",
            "ZS5wcm90b2J1Zi5UaW1lc3RhbXAieAoVTXVsdGlwbGVKb2ludHNDb21tYW5k",
            "EjAKCGNvbW1hbmRzGAEgAygLMh4ucmVhY2h5LnNkay5qb2ludC5Kb2ludENv",
            "bW1hbmQSLQoJdGltZXN0YW1wGA8gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRp",
            "bWVzdGFtcCIiCg9Kb2ludENvbW1hbmRBY2sSDwoHc3VjY2VzcxgBIAEoCDLM",
            "AQoTSm9pbnRDb21tYW5kU2VydmljZRJQCgtTZW5kQ29tbWFuZBIeLnJlYWNo",
            "eS5zZGsuam9pbnQuSm9pbnRDb21tYW5kGiEucmVhY2h5LnNkay5qb2ludC5K",
            "b2ludENvbW1hbmRBY2sSYwoTU3RyZWFtSm9pbnRzQ29tbWFuZBInLnJlYWNo",
            "eS5zZGsuam9pbnQuTXVsdGlwbGVKb2ludHNDb21tYW5kGiEucmVhY2h5LnNk",
            "ay5qb2ludC5Kb2ludENvbW1hbmRBY2soAWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.WrappersReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Joint.JointCommand), global::Reachy.Sdk.Joint.JointCommand.Parser, new[]{ "Id", "Compliant", "GoalPosition", "SpeedLimit", "TorqueLimit", "Timestamp" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Joint.MultipleJointsCommand), global::Reachy.Sdk.Joint.MultipleJointsCommand.Parser, new[]{ "Commands", "Timestamp" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Joint.JointCommandAck), global::Reachy.Sdk.Joint.JointCommandAck.Parser, new[]{ "Success" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class JointCommand : pb::IMessage<JointCommand>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<JointCommand> _parser = new pb::MessageParser<JointCommand>(() => new JointCommand());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<JointCommand> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Joint.JointCommandReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommand() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommand(JointCommand other) : this() {
      id_ = other.id_;
      Compliant = other.Compliant;
      GoalPosition = other.GoalPosition;
      SpeedLimit = other.SpeedLimit;
      TorqueLimit = other.TorqueLimit;
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommand Clone() {
      return new JointCommand(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private uint id_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Id {
      get { return id_; }
      set {
        id_ = value;
      }
    }

    /// <summary>Field number for the "compliant" field.</summary>
    public const int CompliantFieldNumber = 8;
    private static readonly pb::FieldCodec<bool?> _single_compliant_codec = pb::FieldCodec.ForStructWrapper<bool>(66);
    private bool? compliant_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool? Compliant {
      get { return compliant_; }
      set {
        compliant_ = value;
      }
    }


    /// <summary>Field number for the "goal_position" field.</summary>
    public const int GoalPositionFieldNumber = 9;
    private static readonly pb::FieldCodec<float?> _single_goalPosition_codec = pb::FieldCodec.ForStructWrapper<float>(74);
    private float? goalPosition_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float? GoalPosition {
      get { return goalPosition_; }
      set {
        goalPosition_ = value;
      }
    }


    /// <summary>Field number for the "speed_limit" field.</summary>
    public const int SpeedLimitFieldNumber = 10;
    private static readonly pb::FieldCodec<float?> _single_speedLimit_codec = pb::FieldCodec.ForStructWrapper<float>(82);
    private float? speedLimit_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float? SpeedLimit {
      get { return speedLimit_; }
      set {
        speedLimit_ = value;
      }
    }


    /// <summary>Field number for the "torque_limit" field.</summary>
    public const int TorqueLimitFieldNumber = 11;
    private static readonly pb::FieldCodec<float?> _single_torqueLimit_codec = pb::FieldCodec.ForStructWrapper<float>(90);
    private float? torqueLimit_;
    /// <summary>
    /// PIDValue pid = 12;
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float? TorqueLimit {
      get { return torqueLimit_; }
      set {
        torqueLimit_ = value;
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

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as JointCommand);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(JointCommand other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (Compliant != other.Compliant) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.Equals(GoalPosition, other.GoalPosition)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.Equals(SpeedLimit, other.SpeedLimit)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.Equals(TorqueLimit, other.TorqueLimit)) return false;
      if (!object.Equals(Timestamp, other.Timestamp)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id != 0) hash ^= Id.GetHashCode();
      if (compliant_ != null) hash ^= Compliant.GetHashCode();
      if (goalPosition_ != null) hash ^= pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.GetHashCode(GoalPosition);
      if (speedLimit_ != null) hash ^= pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.GetHashCode(SpeedLimit);
      if (torqueLimit_ != null) hash ^= pbc::ProtobufEqualityComparers.BitwiseNullableSingleEqualityComparer.GetHashCode(TorqueLimit);
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
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Id);
      }
      if (compliant_ != null) {
        _single_compliant_codec.WriteTagAndValue(output, Compliant);
      }
      if (goalPosition_ != null) {
        _single_goalPosition_codec.WriteTagAndValue(output, GoalPosition);
      }
      if (speedLimit_ != null) {
        _single_speedLimit_codec.WriteTagAndValue(output, SpeedLimit);
      }
      if (torqueLimit_ != null) {
        _single_torqueLimit_codec.WriteTagAndValue(output, TorqueLimit);
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
      if (Id != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Id);
      }
      if (compliant_ != null) {
        _single_compliant_codec.WriteTagAndValue(ref output, Compliant);
      }
      if (goalPosition_ != null) {
        _single_goalPosition_codec.WriteTagAndValue(ref output, GoalPosition);
      }
      if (speedLimit_ != null) {
        _single_speedLimit_codec.WriteTagAndValue(ref output, SpeedLimit);
      }
      if (torqueLimit_ != null) {
        _single_torqueLimit_codec.WriteTagAndValue(ref output, TorqueLimit);
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
      if (Id != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Id);
      }
      if (compliant_ != null) {
        size += _single_compliant_codec.CalculateSizeWithTag(Compliant);
      }
      if (goalPosition_ != null) {
        size += _single_goalPosition_codec.CalculateSizeWithTag(GoalPosition);
      }
      if (speedLimit_ != null) {
        size += _single_speedLimit_codec.CalculateSizeWithTag(SpeedLimit);
      }
      if (torqueLimit_ != null) {
        size += _single_torqueLimit_codec.CalculateSizeWithTag(TorqueLimit);
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
    public void MergeFrom(JointCommand other) {
      if (other == null) {
        return;
      }
      if (other.Id != 0) {
        Id = other.Id;
      }
      if (other.compliant_ != null) {
        if (compliant_ == null || other.Compliant != false) {
          Compliant = other.Compliant;
        }
      }
      if (other.goalPosition_ != null) {
        if (goalPosition_ == null || other.GoalPosition != 0F) {
          GoalPosition = other.GoalPosition;
        }
      }
      if (other.speedLimit_ != null) {
        if (speedLimit_ == null || other.SpeedLimit != 0F) {
          SpeedLimit = other.SpeedLimit;
        }
      }
      if (other.torqueLimit_ != null) {
        if (torqueLimit_ == null || other.TorqueLimit != 0F) {
          TorqueLimit = other.TorqueLimit;
        }
      }
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
          case 8: {
            Id = input.ReadUInt32();
            break;
          }
          case 66: {
            bool? value = _single_compliant_codec.Read(input);
            if (compliant_ == null || value != false) {
              Compliant = value;
            }
            break;
          }
          case 74: {
            float? value = _single_goalPosition_codec.Read(input);
            if (goalPosition_ == null || value != 0F) {
              GoalPosition = value;
            }
            break;
          }
          case 82: {
            float? value = _single_speedLimit_codec.Read(input);
            if (speedLimit_ == null || value != 0F) {
              SpeedLimit = value;
            }
            break;
          }
          case 90: {
            float? value = _single_torqueLimit_codec.Read(input);
            if (torqueLimit_ == null || value != 0F) {
              TorqueLimit = value;
            }
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
          case 8: {
            Id = input.ReadUInt32();
            break;
          }
          case 66: {
            bool? value = _single_compliant_codec.Read(ref input);
            if (compliant_ == null || value != false) {
              Compliant = value;
            }
            break;
          }
          case 74: {
            float? value = _single_goalPosition_codec.Read(ref input);
            if (goalPosition_ == null || value != 0F) {
              GoalPosition = value;
            }
            break;
          }
          case 82: {
            float? value = _single_speedLimit_codec.Read(ref input);
            if (speedLimit_ == null || value != 0F) {
              SpeedLimit = value;
            }
            break;
          }
          case 90: {
            float? value = _single_torqueLimit_codec.Read(ref input);
            if (torqueLimit_ == null || value != 0F) {
              TorqueLimit = value;
            }
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

  public sealed partial class MultipleJointsCommand : pb::IMessage<MultipleJointsCommand>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<MultipleJointsCommand> _parser = new pb::MessageParser<MultipleJointsCommand>(() => new MultipleJointsCommand());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<MultipleJointsCommand> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Joint.JointCommandReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MultipleJointsCommand() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MultipleJointsCommand(MultipleJointsCommand other) : this() {
      commands_ = other.commands_.Clone();
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public MultipleJointsCommand Clone() {
      return new MultipleJointsCommand(this);
    }

    /// <summary>Field number for the "commands" field.</summary>
    public const int CommandsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Reachy.Sdk.Joint.JointCommand> _repeated_commands_codec
        = pb::FieldCodec.ForMessage(10, global::Reachy.Sdk.Joint.JointCommand.Parser);
    private readonly pbc::RepeatedField<global::Reachy.Sdk.Joint.JointCommand> commands_ = new pbc::RepeatedField<global::Reachy.Sdk.Joint.JointCommand>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Reachy.Sdk.Joint.JointCommand> Commands {
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
      return Equals(other as MultipleJointsCommand);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(MultipleJointsCommand other) {
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
    public void MergeFrom(MultipleJointsCommand other) {
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

  public sealed partial class JointCommandAck : pb::IMessage<JointCommandAck>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<JointCommandAck> _parser = new pb::MessageParser<JointCommandAck>(() => new JointCommandAck());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<JointCommandAck> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Joint.JointCommandReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommandAck() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommandAck(JointCommandAck other) : this() {
      success_ = other.success_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public JointCommandAck Clone() {
      return new JointCommandAck(this);
    }

    /// <summary>Field number for the "success" field.</summary>
    public const int SuccessFieldNumber = 1;
    private bool success_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Success {
      get { return success_; }
      set {
        success_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as JointCommandAck);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(JointCommandAck other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Success != other.Success) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Success != false) hash ^= Success.GetHashCode();
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
      if (Success != false) {
        output.WriteRawTag(8);
        output.WriteBool(Success);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Success != false) {
        output.WriteRawTag(8);
        output.WriteBool(Success);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Success != false) {
        size += 1 + 1;
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(JointCommandAck other) {
      if (other == null) {
        return;
      }
      if (other.Success != false) {
        Success = other.Success;
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
            Success = input.ReadBool();
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
            Success = input.ReadBool();
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
