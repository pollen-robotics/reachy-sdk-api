# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: restart_signal.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='restart_signal.proto',
  package='reachy.sdk.restart',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x14restart_signal.proto\x12\x12reachy.sdk.restart\"9\n\nRestartCmd\x12+\n\x03\x63md\x18\x01 \x01(\x0e\x32\x1e.reachy.sdk.restart.SignalType\"#\n\x10RestartSignalAck\x12\x0f\n\x07success\x18\x01 \x01(\x08*#\n\nSignalType\x12\x0b\n\x07RESTART\x10\x00\x12\x08\n\x04STOP\x10\x01\x32k\n\x0eRestartService\x12Y\n\x11SendRestartSignal\x12\x1e.reachy.sdk.restart.RestartCmd\x1a$.reachy.sdk.restart.RestartSignalAckb\x06proto3'
)

_SIGNALTYPE = _descriptor.EnumDescriptor(
  name='SignalType',
  full_name='reachy.sdk.restart.SignalType',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='RESTART', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='STOP', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=140,
  serialized_end=175,
)
_sym_db.RegisterEnumDescriptor(_SIGNALTYPE)

SignalType = enum_type_wrapper.EnumTypeWrapper(_SIGNALTYPE)
RESTART = 0
STOP = 1



_RESTARTCMD = _descriptor.Descriptor(
  name='RestartCmd',
  full_name='reachy.sdk.restart.RestartCmd',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cmd', full_name='reachy.sdk.restart.RestartCmd.cmd', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=44,
  serialized_end=101,
)


_RESTARTSIGNALACK = _descriptor.Descriptor(
  name='RestartSignalAck',
  full_name='reachy.sdk.restart.RestartSignalAck',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='reachy.sdk.restart.RestartSignalAck.success', index=0,
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
  serialized_start=103,
  serialized_end=138,
)

_RESTARTCMD.fields_by_name['cmd'].enum_type = _SIGNALTYPE
DESCRIPTOR.message_types_by_name['RestartCmd'] = _RESTARTCMD
DESCRIPTOR.message_types_by_name['RestartSignalAck'] = _RESTARTSIGNALACK
DESCRIPTOR.enum_types_by_name['SignalType'] = _SIGNALTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RestartCmd = _reflection.GeneratedProtocolMessageType('RestartCmd', (_message.Message,), {
  'DESCRIPTOR' : _RESTARTCMD,
  '__module__' : 'restart_signal_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.restart.RestartCmd)
  })
_sym_db.RegisterMessage(RestartCmd)

RestartSignalAck = _reflection.GeneratedProtocolMessageType('RestartSignalAck', (_message.Message,), {
  'DESCRIPTOR' : _RESTARTSIGNALACK,
  '__module__' : 'restart_signal_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.restart.RestartSignalAck)
  })
_sym_db.RegisterMessage(RestartSignalAck)



_RESTARTSERVICE = _descriptor.ServiceDescriptor(
  name='RestartService',
  full_name='reachy.sdk.restart.RestartService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=177,
  serialized_end=284,
  methods=[
  _descriptor.MethodDescriptor(
    name='SendRestartSignal',
    full_name='reachy.sdk.restart.RestartService.SendRestartSignal',
    index=0,
    containing_service=None,
    input_type=_RESTARTCMD,
    output_type=_RESTARTSIGNALACK,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_RESTARTSERVICE)

DESCRIPTOR.services_by_name['RestartService'] = _RESTARTSERVICE

# @@protoc_insertion_point(module_scope)