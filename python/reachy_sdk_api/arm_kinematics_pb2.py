# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: arm_kinematics.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import kinematics_pb2 as kinematics__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14\x61rm_kinematics.proto\x12\x15reachy.sdk.kinematics\x1a\x10kinematics.proto\"n\n\x0e\x41rmEndEffector\x12,\n\x04side\x18\x01 \x01(\x0e\x32\x1e.reachy.sdk.kinematics.ArmSide\x12.\n\x04pose\x18\x02 \x01(\x0b\x32 .reachy.sdk.kinematics.Matrix4x4\"y\n\x10\x41rmJointPosition\x12,\n\x04side\x18\x01 \x01(\x0e\x32\x1e.reachy.sdk.kinematics.ArmSide\x12\x37\n\tpositions\x18\x02 \x01(\x0b\x32$.reachy.sdk.kinematics.JointPosition\"M\n\x0c\x41rmFKRequest\x12=\n\x0c\x61rm_position\x18\x01 \x01(\x0b\x32\'.reachy.sdk.kinematics.ArmJointPosition\"]\n\rArmFKSolution\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12;\n\x0c\x65nd_effector\x18\x02 \x01(\x0b\x32%.reachy.sdk.kinematics.ArmEndEffector\"w\n\x0c\x41rmIKRequest\x12\x35\n\x06target\x18\x01 \x01(\x0b\x32%.reachy.sdk.kinematics.ArmEndEffector\x12\x30\n\x02q0\x18\x02 \x01(\x0b\x32$.reachy.sdk.kinematics.JointPosition\"_\n\rArmIKSolution\x12\x0f\n\x07success\x18\x01 \x01(\x08\x12=\n\x0c\x61rm_position\x18\x02 \x01(\x0b\x32\'.reachy.sdk.kinematics.ArmJointPosition*\x1e\n\x07\x41rmSide\x12\x08\n\x04LEFT\x10\x00\x12\t\n\x05RIGHT\x10\x01\x32\xc5\x01\n\rArmKinematics\x12Y\n\x0c\x43omputeArmFK\x12#.reachy.sdk.kinematics.ArmFKRequest\x1a$.reachy.sdk.kinematics.ArmFKSolution\x12Y\n\x0c\x43omputeArmIK\x12#.reachy.sdk.kinematics.ArmIKRequest\x1a$.reachy.sdk.kinematics.ArmIKSolutionb\x06proto3')

_ARMSIDE = DESCRIPTOR.enum_types_by_name['ArmSide']
ArmSide = enum_type_wrapper.EnumTypeWrapper(_ARMSIDE)
LEFT = 0
RIGHT = 1


_ARMENDEFFECTOR = DESCRIPTOR.message_types_by_name['ArmEndEffector']
_ARMJOINTPOSITION = DESCRIPTOR.message_types_by_name['ArmJointPosition']
_ARMFKREQUEST = DESCRIPTOR.message_types_by_name['ArmFKRequest']
_ARMFKSOLUTION = DESCRIPTOR.message_types_by_name['ArmFKSolution']
_ARMIKREQUEST = DESCRIPTOR.message_types_by_name['ArmIKRequest']
_ARMIKSOLUTION = DESCRIPTOR.message_types_by_name['ArmIKSolution']
ArmEndEffector = _reflection.GeneratedProtocolMessageType('ArmEndEffector', (_message.Message,), {
  'DESCRIPTOR' : _ARMENDEFFECTOR,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmEndEffector)
  })
_sym_db.RegisterMessage(ArmEndEffector)

ArmJointPosition = _reflection.GeneratedProtocolMessageType('ArmJointPosition', (_message.Message,), {
  'DESCRIPTOR' : _ARMJOINTPOSITION,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmJointPosition)
  })
_sym_db.RegisterMessage(ArmJointPosition)

ArmFKRequest = _reflection.GeneratedProtocolMessageType('ArmFKRequest', (_message.Message,), {
  'DESCRIPTOR' : _ARMFKREQUEST,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmFKRequest)
  })
_sym_db.RegisterMessage(ArmFKRequest)

ArmFKSolution = _reflection.GeneratedProtocolMessageType('ArmFKSolution', (_message.Message,), {
  'DESCRIPTOR' : _ARMFKSOLUTION,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmFKSolution)
  })
_sym_db.RegisterMessage(ArmFKSolution)

ArmIKRequest = _reflection.GeneratedProtocolMessageType('ArmIKRequest', (_message.Message,), {
  'DESCRIPTOR' : _ARMIKREQUEST,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmIKRequest)
  })
_sym_db.RegisterMessage(ArmIKRequest)

ArmIKSolution = _reflection.GeneratedProtocolMessageType('ArmIKSolution', (_message.Message,), {
  'DESCRIPTOR' : _ARMIKSOLUTION,
  '__module__' : 'arm_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.ArmIKSolution)
  })
_sym_db.RegisterMessage(ArmIKSolution)

_ARMKINEMATICS = DESCRIPTOR.services_by_name['ArmKinematics']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _ARMSIDE._serialized_start=692
  _ARMSIDE._serialized_end=722
  _ARMENDEFFECTOR._serialized_start=65
  _ARMENDEFFECTOR._serialized_end=175
  _ARMJOINTPOSITION._serialized_start=177
  _ARMJOINTPOSITION._serialized_end=298
  _ARMFKREQUEST._serialized_start=300
  _ARMFKREQUEST._serialized_end=377
  _ARMFKSOLUTION._serialized_start=379
  _ARMFKSOLUTION._serialized_end=472
  _ARMIKREQUEST._serialized_start=474
  _ARMIKREQUEST._serialized_end=593
  _ARMIKSOLUTION._serialized_start=595
  _ARMIKSOLUTION._serialized_end=690
  _ARMKINEMATICS._serialized_start=725
  _ARMKINEMATICS._serialized_end=922
# @@protoc_insertion_point(module_scope)
