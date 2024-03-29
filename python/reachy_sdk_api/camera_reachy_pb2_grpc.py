# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import camera_reachy_pb2 as camera__reachy__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class CameraServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetImage = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/GetImage',
                request_serializer=camera__reachy__pb2.ImageRequest.SerializeToString,
                response_deserializer=camera__reachy__pb2.Image.FromString,
                )
        self.StreamImage = channel.unary_stream(
                '/reachy.sdk.camera.CameraService/StreamImage',
                request_serializer=camera__reachy__pb2.StreamImageRequest.SerializeToString,
                response_deserializer=camera__reachy__pb2.Image.FromString,
                )
        self.GetZoomLevel = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/GetZoomLevel',
                request_serializer=camera__reachy__pb2.Camera.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomLevel.FromString,
                )
        self.GetZoomSpeed = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/GetZoomSpeed',
                request_serializer=camera__reachy__pb2.Camera.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomSpeed.FromString,
                )
        self.SendZoomCommand = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/SendZoomCommand',
                request_serializer=camera__reachy__pb2.ZoomCommand.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomCommandAck.FromString,
                )
        self.GetZoomFocus = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/GetZoomFocus',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomFocusMessage.FromString,
                )
        self.SetZoomFocus = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/SetZoomFocus',
                request_serializer=camera__reachy__pb2.ZoomFocusMessage.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomCommandAck.FromString,
                )
        self.StartAutofocus = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/StartAutofocus',
                request_serializer=camera__reachy__pb2.Camera.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomCommandAck.FromString,
                )
        self.StopAutofocus = channel.unary_unary(
                '/reachy.sdk.camera.CameraService/StopAutofocus',
                request_serializer=camera__reachy__pb2.Camera.SerializeToString,
                response_deserializer=camera__reachy__pb2.ZoomCommandAck.FromString,
                )


class CameraServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetImage(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamImage(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetZoomLevel(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetZoomSpeed(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SendZoomCommand(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetZoomFocus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetZoomFocus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StartAutofocus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StopAutofocus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CameraServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetImage': grpc.unary_unary_rpc_method_handler(
                    servicer.GetImage,
                    request_deserializer=camera__reachy__pb2.ImageRequest.FromString,
                    response_serializer=camera__reachy__pb2.Image.SerializeToString,
            ),
            'StreamImage': grpc.unary_stream_rpc_method_handler(
                    servicer.StreamImage,
                    request_deserializer=camera__reachy__pb2.StreamImageRequest.FromString,
                    response_serializer=camera__reachy__pb2.Image.SerializeToString,
            ),
            'GetZoomLevel': grpc.unary_unary_rpc_method_handler(
                    servicer.GetZoomLevel,
                    request_deserializer=camera__reachy__pb2.Camera.FromString,
                    response_serializer=camera__reachy__pb2.ZoomLevel.SerializeToString,
            ),
            'GetZoomSpeed': grpc.unary_unary_rpc_method_handler(
                    servicer.GetZoomSpeed,
                    request_deserializer=camera__reachy__pb2.Camera.FromString,
                    response_serializer=camera__reachy__pb2.ZoomSpeed.SerializeToString,
            ),
            'SendZoomCommand': grpc.unary_unary_rpc_method_handler(
                    servicer.SendZoomCommand,
                    request_deserializer=camera__reachy__pb2.ZoomCommand.FromString,
                    response_serializer=camera__reachy__pb2.ZoomCommandAck.SerializeToString,
            ),
            'GetZoomFocus': grpc.unary_unary_rpc_method_handler(
                    servicer.GetZoomFocus,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=camera__reachy__pb2.ZoomFocusMessage.SerializeToString,
            ),
            'SetZoomFocus': grpc.unary_unary_rpc_method_handler(
                    servicer.SetZoomFocus,
                    request_deserializer=camera__reachy__pb2.ZoomFocusMessage.FromString,
                    response_serializer=camera__reachy__pb2.ZoomCommandAck.SerializeToString,
            ),
            'StartAutofocus': grpc.unary_unary_rpc_method_handler(
                    servicer.StartAutofocus,
                    request_deserializer=camera__reachy__pb2.Camera.FromString,
                    response_serializer=camera__reachy__pb2.ZoomCommandAck.SerializeToString,
            ),
            'StopAutofocus': grpc.unary_unary_rpc_method_handler(
                    servicer.StopAutofocus,
                    request_deserializer=camera__reachy__pb2.Camera.FromString,
                    response_serializer=camera__reachy__pb2.ZoomCommandAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.camera.CameraService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CameraService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetImage(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/GetImage',
            camera__reachy__pb2.ImageRequest.SerializeToString,
            camera__reachy__pb2.Image.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamImage(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/reachy.sdk.camera.CameraService/StreamImage',
            camera__reachy__pb2.StreamImageRequest.SerializeToString,
            camera__reachy__pb2.Image.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetZoomLevel(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/GetZoomLevel',
            camera__reachy__pb2.Camera.SerializeToString,
            camera__reachy__pb2.ZoomLevel.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetZoomSpeed(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/GetZoomSpeed',
            camera__reachy__pb2.Camera.SerializeToString,
            camera__reachy__pb2.ZoomSpeed.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SendZoomCommand(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/SendZoomCommand',
            camera__reachy__pb2.ZoomCommand.SerializeToString,
            camera__reachy__pb2.ZoomCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetZoomFocus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/GetZoomFocus',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            camera__reachy__pb2.ZoomFocusMessage.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetZoomFocus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/SetZoomFocus',
            camera__reachy__pb2.ZoomFocusMessage.SerializeToString,
            camera__reachy__pb2.ZoomCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StartAutofocus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/StartAutofocus',
            camera__reachy__pb2.Camera.SerializeToString,
            camera__reachy__pb2.ZoomCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StopAutofocus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.camera.CameraService/StopAutofocus',
            camera__reachy__pb2.Camera.SerializeToString,
            camera__reachy__pb2.ZoomCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
