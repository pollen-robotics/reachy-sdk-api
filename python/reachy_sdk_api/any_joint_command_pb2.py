# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: any_joint_command.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
import fullbody_cartesian_command_pb2 as fullbody__cartesian__command__pb2
import joint_pb2 as joint__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='any_joint_command.proto',
  package='reachy.sdk.joint',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x17\x61ny_joint_command.proto\x12\x10reachy.sdk.joint\x1a\x1fgoogle/protobuf/timestamp.proto\x1a fullbody_cartesian_command.proto\x1a\x0bjoint.proto\"\xc5\x01\n\x10\x41nyJointsCommand\x12\x44\n\tfull_body\x18\x01 \x01(\x0b\x32/.reachy.sdk.kinematics.FullBodyCartesianCommandH\x00\x12\x31\n\x06joints\x18\x03 \x01(\x0b\x32\x1f.reachy.sdk.joint.JointsCommandH\x00\x12-\n\ttimestamp\x18\x0f \x01(\x0b\x32\x1a.google.protobuf.TimestampB\t\n\x07\x63ommandb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,fullbody__cartesian__command__pb2.DESCRIPTOR,joint__pb2.DESCRIPTOR,])




_ANYJOINTSCOMMAND = _descriptor.Descriptor(
  name='AnyJointsCommand',
  full_name='reachy.sdk.joint.AnyJointsCommand',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='full_body', full_name='reachy.sdk.joint.AnyJointsCommand.full_body', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='joints', full_name='reachy.sdk.joint.AnyJointsCommand.joints', index=1,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='reachy.sdk.joint.AnyJointsCommand.timestamp', index=2,
      number=15, type=11, cpp_type=10, label=1,
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
      name='command', full_name='reachy.sdk.joint.AnyJointsCommand.command',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=126,
  serialized_end=323,
)

_ANYJOINTSCOMMAND.fields_by_name['full_body'].message_type = fullbody__cartesian__command__pb2._FULLBODYCARTESIANCOMMAND
_ANYJOINTSCOMMAND.fields_by_name['joints'].message_type = joint__pb2._JOINTSCOMMAND
_ANYJOINTSCOMMAND.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_ANYJOINTSCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYJOINTSCOMMAND.fields_by_name['full_body'])
_ANYJOINTSCOMMAND.fields_by_name['full_body'].containing_oneof = _ANYJOINTSCOMMAND.oneofs_by_name['command']
_ANYJOINTSCOMMAND.oneofs_by_name['command'].fields.append(
  _ANYJOINTSCOMMAND.fields_by_name['joints'])
_ANYJOINTSCOMMAND.fields_by_name['joints'].containing_oneof = _ANYJOINTSCOMMAND.oneofs_by_name['command']
DESCRIPTOR.message_types_by_name['AnyJointsCommand'] = _ANYJOINTSCOMMAND
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AnyJointsCommand = _reflection.GeneratedProtocolMessageType('AnyJointsCommand', (_message.Message,), {
  'DESCRIPTOR' : _ANYJOINTSCOMMAND,
  '__module__' : 'any_joint_command_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.joint.AnyJointsCommand)
  })
_sym_db.RegisterMessage(AnyJointsCommand)


# @@protoc_insertion_point(module_scope)