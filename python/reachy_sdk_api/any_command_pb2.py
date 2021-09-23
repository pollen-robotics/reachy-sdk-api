# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: any_command.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import fullbody_cartesian_command_pb2 as fullbody__cartesian__command__pb2
import gripper_pb2 as gripper__pb2
import joint_pb2 as joint__pb2
import mobile_platform_reachy_pb2 as mobile__platform__reachy__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='any_command.proto',
  package='reachy.sdk.commands',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x11\x61ny_command.proto\x12\x13reachy.sdk.commands\x1a fullbody_cartesian_command.proto\x1a\rgripper.proto\x1a\x0bjoint.proto\x1a\x1cmobile_platform_reachy.proto\"\xd6\x02\n\nAnyCommand\x12\x44\n\tfull_body\x18\x01 \x01(\x0b\x32/.reachy.sdk.kinematics.FullBodyCartesianCommandH\x00\x12\x36\n\x07gripper\x18\x02 \x01(\x0b\x32#.reachy.sdk.gripper.GrippersCommandH\x00\x12\x31\n\x06joints\x18\x03 \x01(\x0b\x32\x1f.reachy.sdk.joint.JointsCommandH\x00\x12\x41\n\rwheeling_mode\x18\x04 \x01(\x0b\x32(.reachy.sdk.mobility.WheelingModeCommandH\x00\x12I\n\x12wheeling_direction\x18\x05 \x01(\x0b\x32+.reachy.sdk.mobility.TargetDirectionCommandH\x00\x42\t\n\x07\x63ommandb\x06proto3'
  ,
  dependencies=[fullbody__cartesian__command__pb2.DESCRIPTOR,gripper__pb2.DESCRIPTOR,joint__pb2.DESCRIPTOR,mobile__platform__reachy__pb2.DESCRIPTOR,])




_ANYCOMMAND = _descriptor.Descriptor(
  name='AnyCommand',
  full_name='reachy.sdk.commands.AnyCommand',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='full_body', full_name='reachy.sdk.commands.AnyCommand.full_body', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='gripper', full_name='reachy.sdk.commands.AnyCommand.gripper', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='joints', full_name='reachy.sdk.commands.AnyCommand.joints', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='wheeling_mode', full_name='reachy.sdk.commands.AnyCommand.wheeling_mode', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='wheeling_direction', full_name='reachy.sdk.commands.AnyCommand.wheeling_direction', index=4,
      number=5, type=11, cpp_type=10, label=1,
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
    _descriptor.OneofDescriptor(
      name='command', full_name='reachy.sdk.commands.AnyCommand.command',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=135,
  serialized_end=477,
)

_ANYCOMMAND.fields_by_name['full_body'].message_type = fullbody__cartesian__command__pb2._FULLBODYCARTESIANCOMMAND
_ANYCOMMAND.fields_by_name['gripper'].message_type = gripper__pb2._GRIPPERSCOMMAND
_ANYCOMMAND.fields_by_name['joints'].message_type = joint__pb2._JOINTSCOMMAND
_ANYCOMMAND.fields_by_name['wheeling_mode'].message_type = mobile__platform__reachy__pb2._WHEELINGMODECOMMAND
_ANYCOMMAND.fields_by_name['wheeling_direction'].message_type = mobile__platform__reachy__pb2._TARGETDIRECTIONCOMMAND
_ANYCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYCOMMAND.fields_by_name['full_body'])
_ANYCOMMAND.fields_by_name['full_body'].containing_oneof = _ANYCOMMAND.oneofs_by_name['command']
_ANYCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYCOMMAND.fields_by_name['gripper'])
_ANYCOMMAND.fields_by_name['gripper'].containing_oneof = _ANYCOMMAND.oneofs_by_name['command']
_ANYCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYCOMMAND.fields_by_name['joints'])
_ANYCOMMAND.fields_by_name['joints'].containing_oneof = _ANYCOMMAND.oneofs_by_name['command']
_ANYCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYCOMMAND.fields_by_name['wheeling_mode'])
_ANYCOMMAND.fields_by_name['wheeling_mode'].containing_oneof = _ANYCOMMAND.oneofs_by_name['command']
_ANYCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYCOMMAND.fields_by_name['wheeling_direction'])
_ANYCOMMAND.fields_by_name['wheeling_direction'].containing_oneof = _ANYCOMMAND.oneofs_by_name['command']
DESCRIPTOR.message_types_by_name['AnyCommand'] = _ANYCOMMAND
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AnyCommand = _reflection.GeneratedProtocolMessageType('AnyCommand', (_message.Message,), {
  'DESCRIPTOR' : _ANYCOMMAND,
  '__module__' : 'any_command_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.commands.AnyCommand)
  })
_sym_db.RegisterMessage(AnyCommand)


# @@protoc_insertion_point(module_scope)