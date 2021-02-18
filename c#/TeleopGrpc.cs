// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: teleop.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Reachy.Teleop {
  public static partial class TeleoperationService
  {
    static readonly string __ServiceName = "reachy.teleop.TeleoperationService";

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

    static readonly grpc::Marshaller<global::Reachy.Teleop.EndEffector> __Marshaller_reachy_teleop_EndEffector = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Teleop.EndEffector.Parser));
    static readonly grpc::Marshaller<global::Reachy.Teleop.JointCommandAck> __Marshaller_reachy_teleop_JointCommandAck = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Teleop.JointCommandAck.Parser));

    static readonly grpc::Method<global::Reachy.Teleop.EndEffector, global::Reachy.Teleop.JointCommandAck> __Method_FollowMovement = new grpc::Method<global::Reachy.Teleop.EndEffector, global::Reachy.Teleop.JointCommandAck>(
        grpc::MethodType.Unary,
        __ServiceName,
        "FollowMovement",
        __Marshaller_reachy_teleop_EndEffector,
        __Marshaller_reachy_teleop_JointCommandAck);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Reachy.Teleop.TeleopReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of TeleoperationService</summary>
    [grpc::BindServiceMethod(typeof(TeleoperationService), "BindService")]
    public abstract partial class TeleoperationServiceBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Reachy.Teleop.JointCommandAck> FollowMovement(global::Reachy.Teleop.EndEffector request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for TeleoperationService</summary>
    public partial class TeleoperationServiceClient : grpc::ClientBase<TeleoperationServiceClient>
    {
      /// <summary>Creates a new client for TeleoperationService</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public TeleoperationServiceClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for TeleoperationService that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public TeleoperationServiceClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected TeleoperationServiceClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected TeleoperationServiceClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Reachy.Teleop.JointCommandAck FollowMovement(global::Reachy.Teleop.EndEffector request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return FollowMovement(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Teleop.JointCommandAck FollowMovement(global::Reachy.Teleop.EndEffector request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_FollowMovement, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Teleop.JointCommandAck> FollowMovementAsync(global::Reachy.Teleop.EndEffector request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return FollowMovementAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Teleop.JointCommandAck> FollowMovementAsync(global::Reachy.Teleop.EndEffector request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_FollowMovement, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override TeleoperationServiceClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new TeleoperationServiceClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(TeleoperationServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_FollowMovement, serviceImpl.FollowMovement).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, TeleoperationServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_FollowMovement, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Teleop.EndEffector, global::Reachy.Teleop.JointCommandAck>(serviceImpl.FollowMovement));
    }

  }
}
#endregion