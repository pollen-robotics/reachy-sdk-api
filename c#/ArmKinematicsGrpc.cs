// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: arm_kinematics.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Reachy.Sdk.Kinematics {
  public static partial class ArmKinematic
  {
    static readonly string __ServiceName = "reachy.sdk.kinematics.ArmKinematic";

    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    static readonly grpc::Marshaller<global::Reachy.Sdk.Kinematics.ArmJointsPosition> __Marshaller_reachy_sdk_kinematics_ArmJointsPosition = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Kinematics.ArmJointsPosition.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Kinematics.ArmEndEffector> __Marshaller_reachy_sdk_kinematics_ArmEndEffector = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Kinematics.ArmEndEffector.Parser));

    static readonly grpc::Method<global::Reachy.Sdk.Kinematics.ArmJointsPosition, global::Reachy.Sdk.Kinematics.ArmEndEffector> __Method_ComputeArmFK = new grpc::Method<global::Reachy.Sdk.Kinematics.ArmJointsPosition, global::Reachy.Sdk.Kinematics.ArmEndEffector>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ComputeArmFK",
        __Marshaller_reachy_sdk_kinematics_ArmJointsPosition,
        __Marshaller_reachy_sdk_kinematics_ArmEndEffector);

    static readonly grpc::Method<global::Reachy.Sdk.Kinematics.ArmEndEffector, global::Reachy.Sdk.Kinematics.ArmJointsPosition> __Method_ComputeArmIK = new grpc::Method<global::Reachy.Sdk.Kinematics.ArmEndEffector, global::Reachy.Sdk.Kinematics.ArmJointsPosition>(
        grpc::MethodType.Unary,
        __ServiceName,
        "ComputeArmIK",
        __Marshaller_reachy_sdk_kinematics_ArmEndEffector,
        __Marshaller_reachy_sdk_kinematics_ArmJointsPosition);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Reachy.Sdk.Kinematics.ArmKinematicsReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of ArmKinematic</summary>
    [grpc::BindServiceMethod(typeof(ArmKinematic), "BindService")]
    public abstract partial class ArmKinematicBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Kinematics.ArmEndEffector> ComputeArmFK(global::Reachy.Sdk.Kinematics.ArmJointsPosition request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Kinematics.ArmJointsPosition> ComputeArmIK(global::Reachy.Sdk.Kinematics.ArmEndEffector request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for ArmKinematic</summary>
    public partial class ArmKinematicClient : grpc::ClientBase<ArmKinematicClient>
    {
      /// <summary>Creates a new client for ArmKinematic</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public ArmKinematicClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for ArmKinematic that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public ArmKinematicClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected ArmKinematicClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected ArmKinematicClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Reachy.Sdk.Kinematics.ArmEndEffector ComputeArmFK(global::Reachy.Sdk.Kinematics.ArmJointsPosition request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ComputeArmFK(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Kinematics.ArmEndEffector ComputeArmFK(global::Reachy.Sdk.Kinematics.ArmJointsPosition request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_ComputeArmFK, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Kinematics.ArmEndEffector> ComputeArmFKAsync(global::Reachy.Sdk.Kinematics.ArmJointsPosition request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ComputeArmFKAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Kinematics.ArmEndEffector> ComputeArmFKAsync(global::Reachy.Sdk.Kinematics.ArmJointsPosition request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_ComputeArmFK, null, options, request);
      }
      public virtual global::Reachy.Sdk.Kinematics.ArmJointsPosition ComputeArmIK(global::Reachy.Sdk.Kinematics.ArmEndEffector request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ComputeArmIK(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Kinematics.ArmJointsPosition ComputeArmIK(global::Reachy.Sdk.Kinematics.ArmEndEffector request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_ComputeArmIK, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Kinematics.ArmJointsPosition> ComputeArmIKAsync(global::Reachy.Sdk.Kinematics.ArmEndEffector request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return ComputeArmIKAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Kinematics.ArmJointsPosition> ComputeArmIKAsync(global::Reachy.Sdk.Kinematics.ArmEndEffector request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_ComputeArmIK, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override ArmKinematicClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new ArmKinematicClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(ArmKinematicBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_ComputeArmFK, serviceImpl.ComputeArmFK)
          .AddMethod(__Method_ComputeArmIK, serviceImpl.ComputeArmIK).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, ArmKinematicBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_ComputeArmFK, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Sdk.Kinematics.ArmJointsPosition, global::Reachy.Sdk.Kinematics.ArmEndEffector>(serviceImpl.ComputeArmFK));
      serviceBinder.AddMethod(__Method_ComputeArmIK, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Sdk.Kinematics.ArmEndEffector, global::Reachy.Sdk.Kinematics.ArmJointsPosition>(serviceImpl.ComputeArmIK));
    }

  }
}
#endregion