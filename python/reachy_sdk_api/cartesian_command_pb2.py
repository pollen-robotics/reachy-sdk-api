# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: cartesian_command.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import arm_kinematics_pb2 as arm__kinematics__pb2
import orbita_kinematics_pb2 as orbita__kinematics__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='cartesian_command.proto',
  package='reachy.sdk.kinematics',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x17\x63\x61rtesian_command.proto\x12\x15reachy.sdk.kinematics\x1a\x14\x61rm_kinematics.proto\x1a\x17orbita_kinematics.proto\"&\n\x13\x43\x61rtesianCommandAck\x12\x0f\n\x07success\x18\x01 \x01(\x08\"\xe3\x01\n\x18\x46ullBodyCartesianCommand\x12\x44\n\x15left_arm_end_effector\x18\x01 \x01(\x0b\x32%.reachy.sdk.kinematics.ArmEndEffector\x12\x45\n\x16right_arm_end_effector\x18\x02 \x01(\x0b\x32%.reachy.sdk.kinematics.ArmEndEffector\x12:\n\rorbita_target\x18\x03 \x01(\x0b\x32#.reachy.sdk.kinematics.OrbitaTarget2\x88\x02\n\x17\x43\x61rtesianCommandService\x12s\n\x14SendCartesianCommand\x12/.reachy.sdk.kinematics.FullBodyCartesianCommand\x1a*.reachy.sdk.kinematics.CartesianCommandAck\x12x\n\x17StreamCartesianCommands\x12/.reachy.sdk.kinematics.FullBodyCartesianCommand\x1a*.reachy.sdk.kinematics.CartesianCommandAck(\x01\x62\x06proto3'
  ,
  dependencies=[arm__kinematics__pb2.DESCRIPTOR,orbita__kinematics__pb2.DESCRIPTOR,])




_CARTESIANCOMMANDACK = _descriptor.Descriptor(
  name='CartesianCommandAck',
  full_name='reachy.sdk.kinematics.CartesianCommandAck',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='reachy.sdk.kinematics.CartesianCommandAck.success', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=97,
  serialized_end=135,
)


_FULLBODYCARTESIANCOMMAND = _descriptor.Descriptor(
  name='FullBodyCartesianCommand',
  full_name='reachy.sdk.kinematics.FullBodyCartesianCommand',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='left_arm_end_effector', full_name='reachy.sdk.kinematics.FullBodyCartesianCommand.left_arm_end_effector', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='right_arm_end_effector', full_name='reachy.sdk.kinematics.FullBodyCartesianCommand.right_arm_end_effector', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='orbita_target', full_name='reachy.sdk.kinematics.FullBodyCartesianCommand.orbita_target', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=138,
  serialized_end=365,
)

_FULLBODYCARTESIANCOMMAND.fields_by_name['left_arm_end_effector'].message_type = arm__kinematics__pb2._ARMENDEFFECTOR
_FULLBODYCARTESIANCOMMAND.fields_by_name['right_arm_end_effector'].message_type = arm__kinematics__pb2._ARMENDEFFECTOR
_FULLBODYCARTESIANCOMMAND.fields_by_name['orbita_target'].message_type = orbita__kinematics__pb2._ORBITATARGET
DESCRIPTOR.message_types_by_name['CartesianCommandAck'] = _CARTESIANCOMMANDACK
DESCRIPTOR.message_types_by_name['FullBodyCartesianCommand'] = _FULLBODYCARTESIANCOMMAND
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CartesianCommandAck = _reflection.GeneratedProtocolMessageType('CartesianCommandAck', (_message.Message,), {
  'DESCRIPTOR' : _CARTESIANCOMMANDACK,
  '__module__' : 'cartesian_command_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.CartesianCommandAck)
  })
_sym_db.RegisterMessage(CartesianCommandAck)

FullBodyCartesianCommand = _reflection.GeneratedProtocolMessageType('FullBodyCartesianCommand', (_message.Message,), {
  'DESCRIPTOR' : _FULLBODYCARTESIANCOMMAND,
  '__module__' : 'cartesian_command_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.FullBodyCartesianCommand)
  })
_sym_db.RegisterMessage(FullBodyCartesianCommand)



_CARTESIANCOMMANDSERVICE = _descriptor.ServiceDescriptor(
  name='CartesianCommandService',
  full_name='reachy.sdk.kinematics.CartesianCommandService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=368,
  serialized_end=632,
  methods=[
  _descriptor.MethodDescriptor(
    name='SendCartesianCommand',
    full_name='reachy.sdk.kinematics.CartesianCommandService.SendCartesianCommand',
    index=0,
    containing_service=None,
    input_type=_FULLBODYCARTESIANCOMMAND,
    output_type=_CARTESIANCOMMANDACK,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='StreamCartesianCommands',
    full_name='reachy.sdk.kinematics.CartesianCommandService.StreamCartesianCommands',
    index=1,
    containing_service=None,
    input_type=_FULLBODYCARTESIANCOMMAND,
    output_type=_CARTESIANCOMMANDACK,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_CARTESIANCOMMANDSERVICE)

DESCRIPTOR.services_by_name['CartesianCommandService'] = _CARTESIANCOMMANDSERVICE

# @@protoc_insertion_point(module_scope)
