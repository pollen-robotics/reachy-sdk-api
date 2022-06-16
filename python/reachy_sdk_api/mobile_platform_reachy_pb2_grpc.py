# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import mobile_platform_reachy_pb2 as mobile__platform__reachy__pb2


class MobilityServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SendDirection = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/SendDirection',
                request_serializer=mobile__platform__reachy__pb2.TargetDirectionCommand.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.TargetDirectionCommandAck.FromString,
                )
        self.SendSetSpeed = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/SendSetSpeed',
                request_serializer=mobile__platform__reachy__pb2.SetSpeedVector.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.SetSpeedAck.FromString,
                )
        self.SendGoTo = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/SendGoTo',
                request_serializer=mobile__platform__reachy__pb2.GoToVector.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.GoToAck.FromString,
                )
        self.DistanceToGoal = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/DistanceToGoal',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.DistanceToGoalVector.FromString,
                )
        self.SetControlMode = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/SetControlMode',
                request_serializer=mobile__platform__reachy__pb2.ControlModeCommand.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.ControlModeCommandAck.FromString,
                )
        self.GetControlMode = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/GetControlMode',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.ControlModeCommand.FromString,
                )
        self.SetZuuuMode = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/SetZuuuMode',
                request_serializer=mobile__platform__reachy__pb2.ZuuuModeCommand.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.ZuuuModeCommandAck.FromString,
                )
        self.GetZuuuMode = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/GetZuuuMode',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.ZuuuModeCommand.FromString,
                )
        self.GetBatteryLevel = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/GetBatteryLevel',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.BatteryLevel.FromString,
                )
        self.GetOdometry = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/GetOdometry',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.OdometryVector.FromString,
                )
        self.ResetOdometry = channel.unary_unary(
                '/reachy.sdk.mobility.MobilityService/ResetOdometry',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.ResetOdometryAck.FromString,
                )


class MobilityServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SendDirection(self, request, context):
        """Mobility commands
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SendSetSpeed(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SendGoTo(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DistanceToGoal(self, request, context):
        """GoTo management
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetControlMode(self, request, context):
        """Utility
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetControlMode(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SetZuuuMode(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetZuuuMode(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetBatteryLevel(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetOdometry(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResetOdometry(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MobilityServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SendDirection': grpc.unary_unary_rpc_method_handler(
                    servicer.SendDirection,
                    request_deserializer=mobile__platform__reachy__pb2.TargetDirectionCommand.FromString,
                    response_serializer=mobile__platform__reachy__pb2.TargetDirectionCommandAck.SerializeToString,
            ),
            'SendSetSpeed': grpc.unary_unary_rpc_method_handler(
                    servicer.SendSetSpeed,
                    request_deserializer=mobile__platform__reachy__pb2.SetSpeedVector.FromString,
                    response_serializer=mobile__platform__reachy__pb2.SetSpeedAck.SerializeToString,
            ),
            'SendGoTo': grpc.unary_unary_rpc_method_handler(
                    servicer.SendGoTo,
                    request_deserializer=mobile__platform__reachy__pb2.GoToVector.FromString,
                    response_serializer=mobile__platform__reachy__pb2.GoToAck.SerializeToString,
            ),
            'DistanceToGoal': grpc.unary_unary_rpc_method_handler(
                    servicer.DistanceToGoal,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.DistanceToGoalVector.SerializeToString,
            ),
            'SetControlMode': grpc.unary_unary_rpc_method_handler(
                    servicer.SetControlMode,
                    request_deserializer=mobile__platform__reachy__pb2.ControlModeCommand.FromString,
                    response_serializer=mobile__platform__reachy__pb2.ControlModeCommandAck.SerializeToString,
            ),
            'GetControlMode': grpc.unary_unary_rpc_method_handler(
                    servicer.GetControlMode,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.ControlModeCommand.SerializeToString,
            ),
            'SetZuuuMode': grpc.unary_unary_rpc_method_handler(
                    servicer.SetZuuuMode,
                    request_deserializer=mobile__platform__reachy__pb2.ZuuuModeCommand.FromString,
                    response_serializer=mobile__platform__reachy__pb2.ZuuuModeCommandAck.SerializeToString,
            ),
            'GetZuuuMode': grpc.unary_unary_rpc_method_handler(
                    servicer.GetZuuuMode,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.ZuuuModeCommand.SerializeToString,
            ),
            'GetBatteryLevel': grpc.unary_unary_rpc_method_handler(
                    servicer.GetBatteryLevel,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.BatteryLevel.SerializeToString,
            ),
            'GetOdometry': grpc.unary_unary_rpc_method_handler(
                    servicer.GetOdometry,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.OdometryVector.SerializeToString,
            ),
            'ResetOdometry': grpc.unary_unary_rpc_method_handler(
                    servicer.ResetOdometry,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.ResetOdometryAck.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.mobility.MobilityService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class MobilityService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SendDirection(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/SendDirection',
            mobile__platform__reachy__pb2.TargetDirectionCommand.SerializeToString,
            mobile__platform__reachy__pb2.TargetDirectionCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SendSetSpeed(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/SendSetSpeed',
            mobile__platform__reachy__pb2.SetSpeedVector.SerializeToString,
            mobile__platform__reachy__pb2.SetSpeedAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SendGoTo(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/SendGoTo',
            mobile__platform__reachy__pb2.GoToVector.SerializeToString,
            mobile__platform__reachy__pb2.GoToAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DistanceToGoal(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/DistanceToGoal',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.DistanceToGoalVector.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetControlMode(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/SetControlMode',
            mobile__platform__reachy__pb2.ControlModeCommand.SerializeToString,
            mobile__platform__reachy__pb2.ControlModeCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetControlMode(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/GetControlMode',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.ControlModeCommand.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def SetZuuuMode(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/SetZuuuMode',
            mobile__platform__reachy__pb2.ZuuuModeCommand.SerializeToString,
            mobile__platform__reachy__pb2.ZuuuModeCommandAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetZuuuMode(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/GetZuuuMode',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.ZuuuModeCommand.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetBatteryLevel(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/GetBatteryLevel',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.BatteryLevel.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetOdometry(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/GetOdometry',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.OdometryVector.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResetOdometry(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobilityService/ResetOdometry',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.ResetOdometryAck.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class MobileBasePresenceServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetMobileBasePresence = channel.unary_unary(
                '/reachy.sdk.mobility.MobileBasePresenceService/GetMobileBasePresence',
                request_serializer=google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
                response_deserializer=mobile__platform__reachy__pb2.MobileBasePresence.FromString,
                )


class MobileBasePresenceServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetMobileBasePresence(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MobileBasePresenceServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetMobileBasePresence': grpc.unary_unary_rpc_method_handler(
                    servicer.GetMobileBasePresence,
                    request_deserializer=google_dot_protobuf_dot_empty__pb2.Empty.FromString,
                    response_serializer=mobile__platform__reachy__pb2.MobileBasePresence.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'reachy.sdk.mobility.MobileBasePresenceService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class MobileBasePresenceService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetMobileBasePresence(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/reachy.sdk.mobility.MobileBasePresenceService/GetMobileBasePresence',
            google_dot_protobuf_dot_empty__pb2.Empty.SerializeToString,
            mobile__platform__reachy__pb2.MobileBasePresence.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
