// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: exo_arm.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Reachy.Sdk.ExoArm {

  /// <summary>Holder for reflection information generated from exo_arm.proto</summary>
  public static partial class ExoArmReflection {

    #region Descriptor
    /// <summary>File descriptor for exo_arm.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ExoArmReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cg1leG9fYXJtLnByb3RvEhJyZWFjaHkuc2RrLmV4b19hcm0aHmdvb2dsZS9w",
            "cm90b2J1Zi93cmFwcGVycy5wcm90byJlCgxFbGJvd1RvcnF1ZXMSKgoFcmln",
            "aHQYASABKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZRIpCgRsZWZ0",
            "GAIgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.WrappersReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Reachy.Sdk.ExoArm.ElbowTorques), global::Reachy.Sdk.ExoArm.ElbowTorques.Parser, new[]{ "Right", "Left" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class ElbowTorques : pb::IMessage<ElbowTorques>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ElbowTorques> _parser = new pb::MessageParser<ElbowTorques>(() => new ElbowTorques());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ElbowTorques> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Reachy.Sdk.ExoArm.ExoArmReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ElbowTorques() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ElbowTorques(ElbowTorques other) : this() {
      Right = other.Right;
      Left = other.Left;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ElbowTorques Clone() {
      return new ElbowTorques(this);
    }

    /// <summary>Field number for the "right" field.</summary>
    public const int RightFieldNumber = 1;
    private static readonly pb::FieldCodec<int?> _single_right_codec = pb::FieldCodec.ForStructWrapper<int>(10);
    private int? right_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int? Right {
      get { return right_; }
      set {
        right_ = value;
      }
    }


    /// <summary>Field number for the "left" field.</summary>
    public const int LeftFieldNumber = 2;
    private static readonly pb::FieldCodec<int?> _single_left_codec = pb::FieldCodec.ForStructWrapper<int>(18);
    private int? left_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int? Left {
      get { return left_; }
      set {
        left_ = value;
      }
    }


    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ElbowTorques);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ElbowTorques other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Right != other.Right) return false;
      if (Left != other.Left) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (right_ != null) hash ^= Right.GetHashCode();
      if (left_ != null) hash ^= Left.GetHashCode();
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
      if (right_ != null) {
        _single_right_codec.WriteTagAndValue(output, Right);
      }
      if (left_ != null) {
        _single_left_codec.WriteTagAndValue(output, Left);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (right_ != null) {
        _single_right_codec.WriteTagAndValue(ref output, Right);
      }
      if (left_ != null) {
        _single_left_codec.WriteTagAndValue(ref output, Left);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (right_ != null) {
        size += _single_right_codec.CalculateSizeWithTag(Right);
      }
      if (left_ != null) {
        size += _single_left_codec.CalculateSizeWithTag(Left);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ElbowTorques other) {
      if (other == null) {
        return;
      }
      if (other.right_ != null) {
        if (right_ == null || other.Right != 0) {
          Right = other.Right;
        }
      }
      if (other.left_ != null) {
        if (left_ == null || other.Left != 0) {
          Left = other.Left;
        }
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
            int? value = _single_right_codec.Read(input);
            if (right_ == null || value != 0) {
              Right = value;
            }
            break;
          }
          case 18: {
            int? value = _single_left_codec.Read(input);
            if (left_ == null || value != 0) {
              Left = value;
            }
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
            int? value = _single_right_codec.Read(ref input);
            if (right_ == null || value != 0) {
              Right = value;
            }
            break;
          }
          case 18: {
            int? value = _single_left_codec.Read(ref input);
            if (left_ == null || value != 0) {
              Left = value;
            }
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
