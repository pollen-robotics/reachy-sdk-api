# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import detection_pb2 as detection__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


class DetectionServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetDetections3D = channel.unary_unary(
                '/reachy.sdk.detection.DetectionService/GetDetections3D',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=detection__pb2.Detection3DArray.FromString,
                )
        self.GetKnownLabels = channel.unary_unary(
                '/reachy.sdk.detection.DetectionService/GetKnownLabels',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=detection__pb2.KnownLabels.FromString,
                )


class DetectionServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetDetections3D(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetKnownLabels(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_DetectionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetDetections3D': grpc.unary_unary_rpc_method_handler(
                    servicer.GetDetections3D,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=detection__pb2.Detection3DArray.SerializeToString,
            ),
            'GetKnownLabels': grpc.unary_unary_rpc_method_handler(
                    servicer.GetKnownLabels,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=detection__pb2.KnownLabels.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.detection.DetectionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class DetectionService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetDetections3D(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.detection.DetectionService/GetDetections3D',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            detection__pb2.Detection3DArray.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetKnownLabels(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.detection.DetectionService/GetKnownLabels',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            detection__pb2.KnownLabels.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)