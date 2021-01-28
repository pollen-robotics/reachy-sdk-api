// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: joint_state.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Reachy.Sdk.Joint {
  public static partial class JointStateService
  {
    static readonly string __ServiceName = "reachy.sdk.joint.JointStateService";

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

    static readonly grpc::Marshaller<global::Google.Protobuf.WellKnownTypes.Empty> __Marshaller_google_protobuf_Empty = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Google.Protobuf.WellKnownTypes.Empty.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Joint.JointNames> __Marshaller_reachy_sdk_joint_JointNames = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Joint.JointNames.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Joint.JointRequest> __Marshaller_reachy_sdk_joint_JointRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Joint.JointRequest.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Joint.JointState> __Marshaller_reachy_sdk_joint_JointState = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Joint.JointState.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Joint.StreamAllJointsRequest> __Marshaller_reachy_sdk_joint_StreamAllJointsRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Joint.StreamAllJointsRequest.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Joint.AllJointsState> __Marshaller_reachy_sdk_joint_AllJointsState = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Joint.AllJointsState.Parser));

    static readonly grpc::Method<global::Google.Protobuf.WellKnownTypes.Empty, global::Reachy.Sdk.Joint.JointNames> __Method_GetAllJointNames = new grpc::Method<global::Google.Protobuf.WellKnownTypes.Empty, global::Reachy.Sdk.Joint.JointNames>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetAllJointNames",
        __Marshaller_google_protobuf_Empty,
        __Marshaller_reachy_sdk_joint_JointNames);

    static readonly grpc::Method<global::Reachy.Sdk.Joint.JointRequest, global::Reachy.Sdk.Joint.JointState> __Method_GetJointState = new grpc::Method<global::Reachy.Sdk.Joint.JointRequest, global::Reachy.Sdk.Joint.JointState>(
        grpc::MethodType.Unary,
        __ServiceName,
        "GetJointState",
        __Marshaller_reachy_sdk_joint_JointRequest,
        __Marshaller_reachy_sdk_joint_JointState);

    static readonly grpc::Method<global::Reachy.Sdk.Joint.StreamAllJointsRequest, global::Reachy.Sdk.Joint.AllJointsState> __Method_StreamAllJointsState = new grpc::Method<global::Reachy.Sdk.Joint.StreamAllJointsRequest, global::Reachy.Sdk.Joint.AllJointsState>(
        grpc::MethodType.ServerStreaming,
        __ServiceName,
        "StreamAllJointsState",
        __Marshaller_reachy_sdk_joint_StreamAllJointsRequest,
        __Marshaller_reachy_sdk_joint_AllJointsState);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Reachy.Sdk.Joint.JointStateReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of JointStateService</summary>
    [grpc::BindServiceMethod(typeof(JointStateService), "BindService")]
    public abstract partial class JointStateServiceBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Joint.JointNames> GetAllJointNames(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Joint.JointState> GetJointState(global::Reachy.Sdk.Joint.JointRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      public virtual global::System.Threading.Tasks.Task StreamAllJointsState(global::Reachy.Sdk.Joint.StreamAllJointsRequest request, grpc::IServerStreamWriter<global::Reachy.Sdk.Joint.AllJointsState> responseStream, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for JointStateService</summary>
    public partial class JointStateServiceClient : grpc::ClientBase<JointStateServiceClient>
    {
      /// <summary>Creates a new client for JointStateService</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public JointStateServiceClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for JointStateService that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public JointStateServiceClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected JointStateServiceClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected JointStateServiceClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Reachy.Sdk.Joint.JointNames GetAllJointNames(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetAllJointNames(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Joint.JointNames GetAllJointNames(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_GetAllJointNames, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Joint.JointNames> GetAllJointNamesAsync(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetAllJointNamesAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Joint.JointNames> GetAllJointNamesAsync(global::Google.Protobuf.WellKnownTypes.Empty request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_GetAllJointNames, null, options, request);
      }
      public virtual global::Reachy.Sdk.Joint.JointState GetJointState(global::Reachy.Sdk.Joint.JointRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetJointState(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Joint.JointState GetJointState(global::Reachy.Sdk.Joint.JointRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_GetJointState, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Joint.JointState> GetJointStateAsync(global::Reachy.Sdk.Joint.JointRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return GetJointStateAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Joint.JointState> GetJointStateAsync(global::Reachy.Sdk.Joint.JointRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_GetJointState, null, options, request);
      }
      public virtual grpc::AsyncServerStreamingCall<global::Reachy.Sdk.Joint.AllJointsState> StreamAllJointsState(global::Reachy.Sdk.Joint.StreamAllJointsRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return StreamAllJointsState(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncServerStreamingCall<global::Reachy.Sdk.Joint.AllJointsState> StreamAllJointsState(global::Reachy.Sdk.Joint.StreamAllJointsRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncServerStreamingCall(__Method_StreamAllJointsState, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override JointStateServiceClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new JointStateServiceClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(JointStateServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_GetAllJointNames, serviceImpl.GetAllJointNames)
          .AddMethod(__Method_GetJointState, serviceImpl.GetJointState)
          .AddMethod(__Method_StreamAllJointsState, serviceImpl.StreamAllJointsState).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, JointStateServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_GetAllJointNames, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Google.Protobuf.WellKnownTypes.Empty, global::Reachy.Sdk.Joint.JointNames>(serviceImpl.GetAllJointNames));
      serviceBinder.AddMethod(__Method_GetJointState, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Sdk.Joint.JointRequest, global::Reachy.Sdk.Joint.JointState>(serviceImpl.GetJointState));
      serviceBinder.AddMethod(__Method_StreamAllJointsState, serviceImpl == null ? null : new grpc::ServerStreamingServerMethod<global::Reachy.Sdk.Joint.StreamAllJointsRequest, global::Reachy.Sdk.Joint.AllJointsState>(serviceImpl.StreamAllJointsState));
    }

  }
}
#endregion