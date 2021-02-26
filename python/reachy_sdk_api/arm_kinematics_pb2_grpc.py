# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import arm_kinematics_pb2 as arm__kinematics__pb2


class ArmKinematicStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ComputeArmFK = channel.unary_unary(
                '/reachy.sdk.kinematics.ArmKinematic/ComputeArmFK',
                request_serializer=arm__kinematics__pb2.ArmJointsPosition.SerializeToString,
                response_deserializer=arm__kinematics__pb2.ArmEndEffector.FromString,
                )
        self.ComputeArmIK = channel.unary_unary(
                '/reachy.sdk.kinematics.ArmKinematic/ComputeArmIK',
                request_serializer=arm__kinematics__pb2.ArmEndEffector.SerializeToString,
                response_deserializer=arm__kinematics__pb2.ArmIKSolution.FromString,
                )


class ArmKinematicServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ComputeArmFK(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ComputeArmIK(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ArmKinematicServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ComputeArmFK': grpc.unary_unary_rpc_method_handler(
                    servicer.ComputeArmFK,
                    request_deserializer=arm__kinematics__pb2.ArmJointsPosition.FromString,
                    response_serializer=arm__kinematics__pb2.ArmEndEffector.SerializeToString,
            ),
            'ComputeArmIK': grpc.unary_unary_rpc_method_handler(
                    servicer.ComputeArmIK,
                    request_deserializer=arm__kinematics__pb2.ArmEndEffector.FromString,
                    response_serializer=arm__kinematics__pb2.ArmIKSolution.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.kinematics.ArmKinematic', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ArmKinematic(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ComputeArmFK(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.ArmKinematic/ComputeArmFK',
            arm__kinematics__pb2.ArmJointsPosition.SerializeToString,
            arm__kinematics__pb2.ArmEndEffector.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ComputeArmIK(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.kinematics.ArmKinematic/ComputeArmIK',
            arm__kinematics__pb2.ArmEndEffector.SerializeToString,
            arm__kinematics__pb2.ArmIKSolution.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
