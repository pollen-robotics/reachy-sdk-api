# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import joint_pb2 as joint__pb2


class JointServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetAllJointsId = channel.unary_unary(
                '/reachy.sdk.joint.JointService/GetAllJointsId',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=joint__pb2.JointsId.FromString,
                )
        self.GetJointsState = channel.unary_unary(
                '/reachy.sdk.joint.JointService/GetJointsState',
                request_serializer=joint__pb2.JointsStateRequest.SerializeToString,
                response_deserializer=joint__pb2.JointsState.FromString,
                )
        self.StreamJointsState = channel.unary_stream(
                '/reachy.sdk.joint.JointService/StreamJointsState',
                request_serializer=joint__pb2.StreamJointsRequest.SerializeToString,
                response_deserializer=joint__pb2.JointsState.FromString,
                )
        self.SendCommands = channel.unary_unary(
                '/reachy.sdk.joint.JointService/SendCommands',
                request_serializer=joint__pb2.JointsCommand.SerializeToString,
                response_deserializer=joint__pb2.JointCommandAck.FromString,
                )
        self.StreamJointsCommand = channel.stream_unary(
                '/reachy.sdk.joint.JointService/StreamJointsCommand',
                request_serializer=joint__pb2.JointsCommand.SerializeToString,
                response_deserializer=joint__pb2.JointCommandAck.FromString,
                )


class JointServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetAllJointsId(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetJointsState(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamJointsState(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SendCommands(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamJointsCommand(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_JointServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetAllJointsId': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAllJointsId,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=joint__pb2.JointsId.SerializeToString,
            ),
            'GetJointsState': grpc.unary_unary_rpc_method_handler(
                    servicer.GetJointsState,
                    request_deserializer=joint__pb2.JointsStateRequest.FromString,
                    response_serializer=joint__pb2.JointsState.SerializeToString,
            ),
            'StreamJointsState': grpc.unary_stream_rpc_method_handler(
                    servicer.StreamJointsState,
                    request_deserializer=joint__pb2.StreamJointsRequest.FromString,
                    response_serializer=joint__pb2.JointsState.SerializeToString,
            ),
            'SendCommands': grpc.unary_unary_rpc_method_handler(
                    servicer.SendCommands,
                    request_deserializer=joint__pb2.JointsCommand.FromString,
                    response_serializer=joint__pb2.JointCommandAck.SerializeToString,
            ),
            'StreamJointsCommand': grpc.stream_unary_rpc_method_handler(
                    servicer.StreamJointsCommand,
                    request_deserializer=joint__pb2.JointsCommand.FromString,
                    response_serializer=joint__pb2.JointCommandAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.joint.JointService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class JointService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetAllJointsId(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointService/GetAllJointsId',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            joint__pb2.JointsId.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetJointsState(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointService/GetJointsState',
            joint__pb2.JointsStateRequest.SerializeToString,
            joint__pb2.JointsState.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamJointsState(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_stream(request, target, '/reachy.sdk.joint.JointService/StreamJointsState',
            joint__pb2.StreamJointsRequest.SerializeToString,
            joint__pb2.JointsState.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SendCommands(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointService/SendCommands',
            joint__pb2.JointsCommand.SerializeToString,
            joint__pb2.JointCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamJointsCommand(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/reachy.sdk.joint.JointService/StreamJointsCommand',
            joint__pb2.JointsCommand.SerializeToString,
            joint__pb2.JointCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)