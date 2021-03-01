// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: arm_kinematics.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Reachy.Sdk.Kinematics {

  /// <summary>Holder for reflection information generated from arm_kinematics.proto</summary>
  public static partial class ArmKinematicsReflection {

    #region Descriptor
    /// <summary>File descriptor for arm_kinematics.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ArmKinematicsReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChRhcm1fa2luZW1hdGljcy5wcm90bxIVcmVhY2h5LnNkay5raW5lbWF0aWNz",
            "GhBraW5lbWF0aWNzLnByb3RvIqMBCg5Bcm1FbmRFZmZlY3RvchIsCgRzaWRl",
            "GAEgASgOMh4ucmVhY2h5LnNkay5raW5lbWF0aWNzLkFybVNpZGUSMAoGdGFy",
            "Z2V0GAIgASgLMiAucmVhY2h5LnNkay5raW5lbWF0aWNzLk1hdHJpeDR4NBIx",
            "CgJxMBgEIAEoCzIlLnJlYWNoeS5zZGsua2luZW1hdGljcy5Kb2ludHNQb3Np",
            "dGlvbiJ7ChFBcm1Kb2ludHNQb3NpdGlvbhIsCgRzaWRlGAEgASgOMh4ucmVh",
            "Y2h5LnNkay5raW5lbWF0aWNzLkFybVNpZGUSOAoJcG9zaXRpb25zGAIgASgL",
            "MiUucmVhY2h5LnNkay5raW5lbWF0aWNzLkpvaW50c1Bvc2l0aW9uIlcKDUFy",
            "bUlLU29sdXRpb24SDwoHc3VjY2VzcxgBIAEoCBI1CgNzb2wYAiABKAsyKC5y",
            "ZWFjaHkuc2RrLmtpbmVtYXRpY3MuQXJtSm9pbnRzUG9zaXRpb24qHgoHQXJt",
            "U2lkZRIICgRMRUZUEAASCQoFUklHSFQQATLMAQoMQXJtS2luZW1hdGljEl8K",
            "DENvbXB1dGVBcm1GSxIoLnJlYWNoeS5zZGsua2luZW1hdGljcy5Bcm1Kb2lu",
            "dHNQb3NpdGlvbholLnJlYWNoeS5zZGsua2luZW1hdGljcy5Bcm1FbmRFZmZl",
            "Y3RvchJbCgxDb21wdXRlQXJtSUsSJS5yZWFjaHkuc2RrLmtpbmVtYXRpY3Mu",
            "QXJtRW5kRWZmZWN0b3IaJC5yZWFjaHkuc2RrLmtpbmVtYXRpY3MuQXJtSUtT",
            "b2x1dGlvbmIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Reachy.Sdk.Kinematics.KinematicsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Reachy.Sdk.Kinematics.ArmSide), }, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Kinematics.ArmEndEffector), global::Reachy.Sdk.Kinematics.ArmEndEffector.Parser, new[]{ "Side", "Target", "Q0" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Kinematics.ArmJointsPosition), global::Reachy.Sdk.Kinematics.ArmJointsPosition.Parser, new[]{ "Side", "Positions" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.Kinematics.ArmIKSolution), global::Reachy.Sdk.Kinematics.ArmIKSolution.Parser, new[]{ "Success", "Sol" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Enums
  public enum ArmSide {
    [pbr::OriginalName("LEFT")] Left = 0,
    [pbr::OriginalName("RIGHT")] Right = 1,
  }

  #endregion

  #region Messages
  public sealed partial class ArmEndEffector : pb::IMessage<ArmEndEffector>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ArmEndEffector> _parser = new pb::MessageParser<ArmEndEffector>(() => new ArmEndEffector());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ArmEndEffector> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Kinematics.ArmKinematicsReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmEndEffector() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmEndEffector(ArmEndEffector other) : this() {
      side_ = other.side_;
      target_ = other.target_ != null ? other.target_.Clone() : null;
      q0_ = other.q0_ != null ? other.q0_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmEndEffector Clone() {
      return new ArmEndEffector(this);
    }

    /// <summary>Field number for the "side" field.</summary>
    public const int SideFieldNumber = 1;
    private global::Reachy.Sdk.Kinematics.ArmSide side_ = global::Reachy.Sdk.Kinematics.ArmSide.Left;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.ArmSide Side {
      get { return side_; }
      set {
        side_ = value;
      }
    }

    /// <summary>Field number for the "target" field.</summary>
    public const int TargetFieldNumber = 2;
    private global::Reachy.Sdk.Kinematics.Matrix4x4 target_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.Matrix4x4 Target {
      get { return target_; }
      set {
        target_ = value;
      }
    }

    /// <summary>Field number for the "q0" field.</summary>
    public const int Q0FieldNumber = 4;
    private global::Reachy.Sdk.Kinematics.JointsPosition q0_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.JointsPosition Q0 {
      get { return q0_; }
      set {
        q0_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ArmEndEffector);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ArmEndEffector other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Side != other.Side) return false;
      if (!object.Equals(Target, other.Target)) return false;
      if (!object.Equals(Q0, other.Q0)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) hash ^= Side.GetHashCode();
      if (target_ != null) hash ^= Target.GetHashCode();
      if (q0_ != null) hash ^= Q0.GetHashCode();
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
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Side);
      }
      if (target_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Target);
      }
      if (q0_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Q0);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Side);
      }
      if (target_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Target);
      }
      if (q0_ != null) {
        output.WriteRawTag(34);
        output.WriteMessage(Q0);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Side);
      }
      if (target_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Target);
      }
      if (q0_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Q0);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ArmEndEffector other) {
      if (other == null) {
        return;
      }
      if (other.Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        Side = other.Side;
      }
      if (other.target_ != null) {
        if (target_ == null) {
          Target = new global::Reachy.Sdk.Kinematics.Matrix4x4();
        }
        Target.MergeFrom(other.Target);
      }
      if (other.q0_ != null) {
        if (q0_ == null) {
          Q0 = new global::Reachy.Sdk.Kinematics.JointsPosition();
        }
        Q0.MergeFrom(other.Q0);
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
            Side = (global::Reachy.Sdk.Kinematics.ArmSide) input.ReadEnum();
            break;
          }
          case 18: {
            if (target_ == null) {
              Target = new global::Reachy.Sdk.Kinematics.Matrix4x4();
            }
            input.ReadMessage(Target);
            break;
          }
          case 34: {
            if (q0_ == null) {
              Q0 = new global::Reachy.Sdk.Kinematics.JointsPosition();
            }
            input.ReadMessage(Q0);
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
            Side = (global::Reachy.Sdk.Kinematics.ArmSide) input.ReadEnum();
            break;
          }
          case 18: {
            if (target_ == null) {
              Target = new global::Reachy.Sdk.Kinematics.Matrix4x4();
            }
            input.ReadMessage(Target);
            break;
          }
          case 34: {
            if (q0_ == null) {
              Q0 = new global::Reachy.Sdk.Kinematics.JointsPosition();
            }
            input.ReadMessage(Q0);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class ArmJointsPosition : pb::IMessage<ArmJointsPosition>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ArmJointsPosition> _parser = new pb::MessageParser<ArmJointsPosition>(() => new ArmJointsPosition());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ArmJointsPosition> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Kinematics.ArmKinematicsReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmJointsPosition() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmJointsPosition(ArmJointsPosition other) : this() {
      side_ = other.side_;
      positions_ = other.positions_ != null ? other.positions_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmJointsPosition Clone() {
      return new ArmJointsPosition(this);
    }

    /// <summary>Field number for the "side" field.</summary>
    public const int SideFieldNumber = 1;
    private global::Reachy.Sdk.Kinematics.ArmSide side_ = global::Reachy.Sdk.Kinematics.ArmSide.Left;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.ArmSide Side {
      get { return side_; }
      set {
        side_ = value;
      }
    }

    /// <summary>Field number for the "positions" field.</summary>
    public const int PositionsFieldNumber = 2;
    private global::Reachy.Sdk.Kinematics.JointsPosition positions_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.JointsPosition Positions {
      get { return positions_; }
      set {
        positions_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ArmJointsPosition);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ArmJointsPosition other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Side != other.Side) return false;
      if (!object.Equals(Positions, other.Positions)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) hash ^= Side.GetHashCode();
      if (positions_ != null) hash ^= Positions.GetHashCode();
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
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Side);
      }
      if (positions_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Positions);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Side);
      }
      if (positions_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Positions);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Side);
      }
      if (positions_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Positions);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ArmJointsPosition other) {
      if (other == null) {
        return;
      }
      if (other.Side != global::Reachy.Sdk.Kinematics.ArmSide.Left) {
        Side = other.Side;
      }
      if (other.positions_ != null) {
        if (positions_ == null) {
          Positions = new global::Reachy.Sdk.Kinematics.JointsPosition();
        }
        Positions.MergeFrom(other.Positions);
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
            Side = (global::Reachy.Sdk.Kinematics.ArmSide) input.ReadEnum();
            break;
          }
          case 18: {
            if (positions_ == null) {
              Positions = new global::Reachy.Sdk.Kinematics.JointsPosition();
            }
            input.ReadMessage(Positions);
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
            Side = (global::Reachy.Sdk.Kinematics.ArmSide) input.ReadEnum();
            break;
          }
          case 18: {
            if (positions_ == null) {
              Positions = new global::Reachy.Sdk.Kinematics.JointsPosition();
            }
            input.ReadMessage(Positions);
            break;
          }
        }
      }
    }
    #endif

  }

  public sealed partial class ArmIKSolution : pb::IMessage<ArmIKSolution>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ArmIKSolution> _parser = new pb::MessageParser<ArmIKSolution>(() => new ArmIKSolution());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ArmIKSolution> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.Kinematics.ArmKinematicsReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmIKSolution() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmIKSolution(ArmIKSolution other) : this() {
      success_ = other.success_;
      sol_ = other.sol_ != null ? other.sol_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ArmIKSolution Clone() {
      return new ArmIKSolution(this);
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

    /// <summary>Field number for the "sol" field.</summary>
    public const int SolFieldNumber = 2;
    private global::Reachy.Sdk.Kinematics.ArmJointsPosition sol_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Reachy.Sdk.Kinematics.ArmJointsPosition Sol {
      get { return sol_; }
      set {
        sol_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ArmIKSolution);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ArmIKSolution other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Success != other.Success) return false;
      if (!object.Equals(Sol, other.Sol)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Success != false) hash ^= Success.GetHashCode();
      if (sol_ != null) hash ^= Sol.GetHashCode();
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
      if (sol_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Sol);
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
      if (sol_ != null) {
        output.WriteRawTag(18);
        output.WriteMessage(Sol);
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
      if (sol_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Sol);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ArmIKSolution other) {
      if (other == null) {
        return;
      }
      if (other.Success != false) {
        Success = other.Success;
      }
      if (other.sol_ != null) {
        if (sol_ == null) {
          Sol = new global::Reachy.Sdk.Kinematics.ArmJointsPosition();
        }
        Sol.MergeFrom(other.Sol);
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
          case 18: {
            if (sol_ == null) {
              Sol = new global::Reachy.Sdk.Kinematics.ArmJointsPosition();
            }
            input.ReadMessage(Sol);
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
          case 18: {
            if (sol_ == null) {
              Sol = new global::Reachy.Sdk.Kinematics.ArmJointsPosition();
            }
            input.ReadMessage(Sol);
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
