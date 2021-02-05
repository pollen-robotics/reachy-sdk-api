# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import joint_command_pb2 as joint__command__pb2


class JointCommandServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SendCommand = channel.unary_unary(
                '/reachy.sdk.joint.JointCommandService/SendCommand',
                request_serializer=joint__command__pb2.JointCommand.SerializeToString,
                response_deserializer=joint__command__pb2.JointCommandAck.FromString,
                )
        self.StreamJointsCommand = channel.stream_unary(
                '/reachy.sdk.joint.JointCommandService/StreamJointsCommand',
                request_serializer=joint__command__pb2.MultipleJointsCommand.SerializeToString,
                response_deserializer=joint__command__pb2.JointCommandAck.FromString,
                )


class JointCommandServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SendCommand(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamJointsCommand(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_JointCommandServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SendCommand': grpc.unary_unary_rpc_method_handler(
                    servicer.SendCommand,
                    request_deserializer=joint__command__pb2.JointCommand.FromString,
                    response_serializer=joint__command__pb2.JointCommandAck.SerializeToString,
            ),
            'StreamJointsCommand': grpc.stream_unary_rpc_method_handler(
                    servicer.StreamJointsCommand,
                    request_deserializer=joint__command__pb2.MultipleJointsCommand.FromString,
                    response_serializer=joint__command__pb2.JointCommandAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.joint.JointCommandService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class JointCommandService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SendCommand(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.joint.JointCommandService/SendCommand',
            joint__command__pb2.JointCommand.SerializeToString,
            joint__command__pb2.JointCommandAck.FromString,
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
        return grpc.experimental.stream_unary(request_iterator, target, '/reachy.sdk.joint.JointCommandService/StreamJointsCommand',
            joint__command__pb2.MultipleJointsCommand.SerializeToString,
            joint__command__pb2.JointCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
