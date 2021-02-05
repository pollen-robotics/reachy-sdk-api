# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import joint_state_pb2 as joint__state__pb2


class JointStateServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetAllJointNames = channel.unary_unary(
                '/reachy.sdk.joint.JointStateService/GetAllJointNames',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=joint__state__pb2.JointNames.FromString,
                )
        self.GetJointState = channel.unary_unary(
                '/reachy.sdk.joint.JointStateService/GetJointState',
                request_serializer=joint__state__pb2.JointRequest.SerializeToString,
                response_deserializer=joint__state__pb2.JointState.FromString,
                )
        self.StreamAllJointsState = channel.unary_stream(
                '/reachy.sdk.joint.JointStateService/StreamAllJointsState',
                request_serializer=joint__state__pb2.StreamAllJointsRequest.SerializeToString,
                response_deserializer=joint__state__pb2.AllJointsState.FromString,
                )


class JointStateServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetAllJointNames(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetJointState(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamAllJointsState(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_JointStateServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetAllJointNames': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAllJointNames,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=joint__state__pb2.JointNames.SerializeToString,
            ),
            'GetJointState': grpc.unary_unary_rpc_method_handler(
                    servicer.GetJointState,
                    request_deserializer=joint__state__pb2.JointRequest.FromString,
                    response_serializer=joint__state__pb2.JointState.SerializeToString,
            ),
            'StreamAllJointsState': grpc.unary_stream_rpc_method_handler(
                    servicer.StreamAllJointsState,
                    request_deserializer=joint__state__pb2.StreamAllJointsRequest.FromString,
                    response_serializer=joint__state__pb2.AllJointsState.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.joint.JointStateService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class JointStateService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetAllJointNames(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointStateService/GetAllJointNames',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            joint__state__pb2.JointNames.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetJointState(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointStateService/GetJointState',
            joint__state__pb2.JointRequest.SerializeToString,
            joint__state__pb2.JointState.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamAllJointsState(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/reachy.sdk.joint.JointStateService/StreamAllJointsState',
            joint__state__pb2.StreamAllJointsRequest.SerializeToString,
            joint__state__pb2.AllJointsState.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
