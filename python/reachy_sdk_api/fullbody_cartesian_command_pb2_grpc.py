# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import fullbody_cartesian_command_pb2 as fullbody__cartesian__command__pb2


class FullBodyCartesianCommandServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SendFullBodyCartesianCommands = channel.unary_unary(
                '/reachy.sdk.kinematics.FullBodyCartesianCommandService/SendFullBodyCartesianCommands',
                request_serializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
                response_deserializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
                )
        self.StreamFullBodyCartesianCommands = channel.stream_unary(
                '/reachy.sdk.kinematics.FullBodyCartesianCommandService/StreamFullBodyCartesianCommands',
                request_serializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
                response_deserializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
                )


class FullBodyCartesianCommandServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SendFullBodyCartesianCommands(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StreamFullBodyCartesianCommands(self, request_iterator, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_FullBodyCartesianCommandServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SendFullBodyCartesianCommands': grpc.unary_unary_rpc_method_handler(
                    servicer.SendFullBodyCartesianCommands,
                    request_deserializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommand.FromString,
                    response_serializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.SerializeToString,
            ),
            'StreamFullBodyCartesianCommands': grpc.stream_unary_rpc_method_handler(
                    servicer.StreamFullBodyCartesianCommands,
                    request_deserializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommand.FromString,
                    response_serializer=fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.kinematics.FullBodyCartesianCommandService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class FullBodyCartesianCommandService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SendFullBodyCartesianCommands(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.FullBodyCartesianCommandService/SendFullBodyCartesianCommands',
            fullbody__cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
            fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StreamFullBodyCartesianCommands(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_unary(request_iterator, target, '/reachy.sdk.kinematics.FullBodyCartesianCommandService/StreamFullBodyCartesianCommands',
            fullbody__cartesian__command__pb2.FullBodyCartesianCommand.SerializeToString,
            fullbody__cartesian__command__pb2.FullBodyCartesianCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
