# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import head_kinematics_pb2 as head__kinematics__pb2


class HeadKinematicsStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ComputeHeadFK = channel.unary_unary(
                '/reachy.sdk.kinematics.HeadKinematics/ComputeHeadFK',
                request_serializer=head__kinematics__pb2.HeadFKRequest.SerializeToString,
                response_deserializer=head__kinematics__pb2.HeadFKSolution.FromString,
                )
        self.ComputeHeadIK = channel.unary_unary(
                '/reachy.sdk.kinematics.HeadKinematics/ComputeHeadIK',
                request_serializer=head__kinematics__pb2.HeadIKRequest.SerializeToString,
                response_deserializer=head__kinematics__pb2.HeadIKSolution.FromString,
                )


class HeadKinematicsServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ComputeHeadFK(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ComputeHeadIK(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_HeadKinematicsServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ComputeHeadFK': grpc.unary_unary_rpc_method_handler(
                    servicer.ComputeHeadFK,
                    request_deserializer=head__kinematics__pb2.HeadFKRequest.FromString,
                    response_serializer=head__kinematics__pb2.HeadFKSolution.SerializeToString,
            ),
            'ComputeHeadIK': grpc.unary_unary_rpc_method_handler(
                    servicer.ComputeHeadIK,
                    request_deserializer=head__kinematics__pb2.HeadIKRequest.FromString,
                    response_serializer=head__kinematics__pb2.HeadIKSolution.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.kinematics.HeadKinematics', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class HeadKinematics(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ComputeHeadFK(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.HeadKinematics/ComputeHeadFK',
            head__kinematics__pb2.HeadFKRequest.SerializeToString,
            head__kinematics__pb2.HeadFKSolution.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ComputeHeadIK(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.HeadKinematics/ComputeHeadIK',
            head__kinematics__pb2.HeadIKRequest.SerializeToString,
            head__kinematics__pb2.HeadIKSolution.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
