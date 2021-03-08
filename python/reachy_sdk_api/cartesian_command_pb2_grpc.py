# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import cartesian_command_pb2 as cartesian__command__pb2


class CartesianCommandServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SendFullBodyCartesianCommand = channel.unary_unary(
                '/reachy.sdk.kinematics.CartesianCommandService/SendFullBodyCartesianCommand',
                request_serializer=cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
                response_deserializer=cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
                )
        self.StreamCartesianCommands = channel.stream_unary(
                '/reachy.sdk.kinematics.CartesianCommandService/StreamCartesianCommands',
                request_serializer=cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
                response_deserializer=cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
                )


class CartesianCommandServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SendFullBodyCartesianCommand(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamCartesianCommands(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CartesianCommandServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SendFullBodyCartesianCommand': grpc.unary_unary_rpc_method_handler(
                    servicer.SendFullBodyCartesianCommand,
                    request_deserializer=cartesian__command__pb2.FullBodyCartesianCommand.FromString,
                    response_serializer=cartesian__command__pb2.FullBodyCartesianCommandAck.SerializeToString,
            ),
            'StreamCartesianCommands': grpc.stream_unary_rpc_method_handler(
                    servicer.StreamCartesianCommands,
                    request_deserializer=cartesian__command__pb2.FullBodyCartesianCommand.FromString,
                    response_serializer=cartesian__command__pb2.FullBodyCartesianCommandAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.kinematics.CartesianCommandService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CartesianCommandService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SendFullBodyCartesianCommand(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.CartesianCommandService/SendFullBodyCartesianCommand',
            cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
            cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamCartesianCommands(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/reachy.sdk.kinematics.CartesianCommandService/StreamCartesianCommands',
            cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
            cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
