# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import kinematics_pb2 as kinematics__pb2
import orbita_kinematics_pb2 as orbita__kinematics__pb2


class OrbitaKinematicStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ComputeOrbitaIK = channel.unary_unary(
                '/reachy.sdk.kinematics.OrbitaKinematic/ComputeOrbitaIK',
                request_serializer=orbita__kinematics__pb2.OrbitaTarget.SerializeToString,
                response_deserializer=kinematics__pb2.JointsPosition.FromString,
                )


class OrbitaKinematicServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ComputeOrbitaIK(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_OrbitaKinematicServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ComputeOrbitaIK': grpc.unary_unary_rpc_method_handler(
                    servicer.ComputeOrbitaIK,
                    request_deserializer=orbita__kinematics__pb2.OrbitaTarget.FromString,
                    response_serializer=kinematics__pb2.JointsPosition.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.kinematics.OrbitaKinematic', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class OrbitaKinematic(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ComputeOrbitaIK(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.OrbitaKinematic/ComputeOrbitaIK',
            orbita__kinematics__pb2.OrbitaTarget.SerializeToString,
            kinematics__pb2.JointsPosition.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
