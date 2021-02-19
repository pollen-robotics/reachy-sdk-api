// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: zoom_command.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Reachy.Sdk.Zoom {
  public static partial class ZoomControllerService
  {
    static readonly string __ServiceName = "reachy.sdk.zoom.ZoomControllerService";

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

    static readonly grpc::Marshaller<global::Reachy.Sdk.Zoom.ZoomSpeed> __Marshaller_reachy_sdk_zoom_ZoomSpeed = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Zoom.ZoomSpeed.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Zoom.Empty> __Marshaller_reachy_sdk_zoom_Empty = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Zoom.Empty.Parser));
    static readonly grpc::Marshaller<global::Reachy.Sdk.Zoom.ZoomCommand> __Marshaller_reachy_sdk_zoom_ZoomCommand = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Reachy.Sdk.Zoom.ZoomCommand.Parser));

    static readonly grpc::Method<global::Reachy.Sdk.Zoom.ZoomSpeed, global::Reachy.Sdk.Zoom.Empty> __Method_SetZoomSpeed = new grpc::Method<global::Reachy.Sdk.Zoom.ZoomSpeed, global::Reachy.Sdk.Zoom.Empty>(
        grpc::MethodType.Unary,
        __ServiceName,
        "SetZoomSpeed",
        __Marshaller_reachy_sdk_zoom_ZoomSpeed,
        __Marshaller_reachy_sdk_zoom_Empty);

    static readonly grpc::Method<global::Reachy.Sdk.Zoom.ZoomCommand, global::Reachy.Sdk.Zoom.Empty> __Method_SendZoomCommand = new grpc::Method<global::Reachy.Sdk.Zoom.ZoomCommand, global::Reachy.Sdk.Zoom.Empty>(
        grpc::MethodType.Unary,
        __ServiceName,
        "SendZoomCommand",
        __Marshaller_reachy_sdk_zoom_ZoomCommand,
        __Marshaller_reachy_sdk_zoom_Empty);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Reachy.Sdk.Zoom.ZoomCommandReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of ZoomControllerService</summary>
    [grpc::BindServiceMethod(typeof(ZoomControllerService), "BindService")]
    public abstract partial class ZoomControllerServiceBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Zoom.Empty> SetZoomSpeed(global::Reachy.Sdk.Zoom.ZoomSpeed request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      public virtual global::System.Threading.Tasks.Task<global::Reachy.Sdk.Zoom.Empty> SendZoomCommand(global::Reachy.Sdk.Zoom.ZoomCommand request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for ZoomControllerService</summary>
    public partial class ZoomControllerServiceClient : grpc::ClientBase<ZoomControllerServiceClient>
    {
      /// <summary>Creates a new client for ZoomControllerService</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public ZoomControllerServiceClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for ZoomControllerService that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public ZoomControllerServiceClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected ZoomControllerServiceClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected ZoomControllerServiceClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Reachy.Sdk.Zoom.Empty SetZoomSpeed(global::Reachy.Sdk.Zoom.ZoomSpeed request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SetZoomSpeed(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Zoom.Empty SetZoomSpeed(global::Reachy.Sdk.Zoom.ZoomSpeed request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_SetZoomSpeed, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Zoom.Empty> SetZoomSpeedAsync(global::Reachy.Sdk.Zoom.ZoomSpeed request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SetZoomSpeedAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Zoom.Empty> SetZoomSpeedAsync(global::Reachy.Sdk.Zoom.ZoomSpeed request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_SetZoomSpeed, null, options, request);
      }
      public virtual global::Reachy.Sdk.Zoom.Empty SendZoomCommand(global::Reachy.Sdk.Zoom.ZoomCommand request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SendZoomCommand(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Reachy.Sdk.Zoom.Empty SendZoomCommand(global::Reachy.Sdk.Zoom.ZoomCommand request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_SendZoomCommand, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Zoom.Empty> SendZoomCommandAsync(global::Reachy.Sdk.Zoom.ZoomCommand request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SendZoomCommandAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Reachy.Sdk.Zoom.Empty> SendZoomCommandAsync(global::Reachy.Sdk.Zoom.ZoomCommand request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_SendZoomCommand, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override ZoomControllerServiceClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new ZoomControllerServiceClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(ZoomControllerServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_SetZoomSpeed, serviceImpl.SetZoomSpeed)
          .AddMethod(__Method_SendZoomCommand, serviceImpl.SendZoomCommand).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, ZoomControllerServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_SetZoomSpeed, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Sdk.Zoom.ZoomSpeed, global::Reachy.Sdk.Zoom.Empty>(serviceImpl.SetZoomSpeed));
      serviceBinder.AddMethod(__Method_SendZoomCommand, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Reachy.Sdk.Zoom.ZoomCommand, global::Reachy.Sdk.Zoom.Empty>(serviceImpl.SendZoomCommand));
    }

  }
}
#endregion
