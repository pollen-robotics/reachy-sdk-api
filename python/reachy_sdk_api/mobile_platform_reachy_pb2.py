# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: mobile_platform_reachy.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='mobile_platform_reachy.proto',
  package='reachy.sdk.mobility',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1cmobile_platform_reachy.proto\x12\x13reachy.sdk.mobility\"\'\n\x0f\x44irectionVector\x12\t\n\x01x\x18\x01 \x01(\x01\x12\t\n\x01y\x18\x02 \x01(\x01\"Q\n\x16TargetDirectionCommand\x12\x37\n\tdirection\x18\x01 \x01(\x0b\x32$.reachy.sdk.mobility.DirectionVector\",\n\x19TargetDirectionCommandAck\x12\x0f\n\x07success\x18\x01 \x01(\x08\"R\n\x13WheelingModeCommand\x12;\n\x04mode\x18\x01 \x01(\x0e\x32-.reachy.sdk.mobility.WheelingModePossiblities\")\n\x16WheelingModeCommandAck\x12\x0f\n\x07success\x18\x01 \x01(\x08*4\n\x18WheelingModePossiblities\x12\x08\n\x04IDLE\x10\x00\x12\x0e\n\nCLOSE_LOOP\x10\x01\x32\xe9\x01\n\x0fMobilityService\x12l\n\rSendDirection\x12+.reachy.sdk.mobility.TargetDirectionCommand\x1a..reachy.sdk.mobility.TargetDirectionCommandAck\x12h\n\x0fSetWheelingMode\x12(.reachy.sdk.mobility.WheelingModeCommand\x1a+.reachy.sdk.mobility.WheelingModeCommandAckb\x06proto3'
)

_WHEELINGMODEPOSSIBLITIES = _descriptor.EnumDescriptor(
  name='WheelingModePossiblities',
  full_name='reachy.sdk.mobility.WheelingModePossiblities',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='IDLE', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='CLOSE_LOOP', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=350,
  serialized_end=402,
)
_sym_db.RegisterEnumDescriptor(_WHEELINGMODEPOSSIBLITIES)

WheelingModePossiblities = enum_type_wrapper.EnumTypeWrapper(_WHEELINGMODEPOSSIBLITIES)
IDLE = 0
CLOSE_LOOP = 1



_DIRECTIONVECTOR = _descriptor.Descriptor(
  name='DirectionVector',
  full_name='reachy.sdk.mobility.DirectionVector',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='x', full_name='reachy.sdk.mobility.DirectionVector.x', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='y', full_name='reachy.sdk.mobility.DirectionVector.y', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
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
  serialized_start=53,
  serialized_end=92,
)


_TARGETDIRECTIONCOMMAND = _descriptor.Descriptor(
  name='TargetDirectionCommand',
  full_name='reachy.sdk.mobility.TargetDirectionCommand',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='direction', full_name='reachy.sdk.mobility.TargetDirectionCommand.direction', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_start=94,
  serialized_end=175,
)


_TARGETDIRECTIONCOMMANDACK = _descriptor.Descriptor(
  name='TargetDirectionCommandAck',
  full_name='reachy.sdk.mobility.TargetDirectionCommandAck',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='reachy.sdk.mobility.TargetDirectionCommandAck.success', index=0,
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
  serialized_start=177,
  serialized_end=221,
)


_WHEELINGMODECOMMAND = _descriptor.Descriptor(
  name='WheelingModeCommand',
  full_name='reachy.sdk.mobility.WheelingModeCommand',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='mode', full_name='reachy.sdk.mobility.WheelingModeCommand.mode', index=0,
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
  serialized_start=223,
  serialized_end=305,
)


_WHEELINGMODECOMMANDACK = _descriptor.Descriptor(
  name='WheelingModeCommandAck',
  full_name='reachy.sdk.mobility.WheelingModeCommandAck',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='success', full_name='reachy.sdk.mobility.WheelingModeCommandAck.success', index=0,
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
  serialized_start=307,
  serialized_end=348,
)

_TARGETDIRECTIONCOMMAND.fields_by_name['direction'].message_type = _DIRECTIONVECTOR
_WHEELINGMODECOMMAND.fields_by_name['mode'].enum_type = _WHEELINGMODEPOSSIBLITIES
DESCRIPTOR.message_types_by_name['DirectionVector'] = _DIRECTIONVECTOR
DESCRIPTOR.message_types_by_name['TargetDirectionCommand'] = _TARGETDIRECTIONCOMMAND
DESCRIPTOR.message_types_by_name['TargetDirectionCommandAck'] = _TARGETDIRECTIONCOMMANDACK
DESCRIPTOR.message_types_by_name['WheelingModeCommand'] = _WHEELINGMODECOMMAND
DESCRIPTOR.message_types_by_name['WheelingModeCommandAck'] = _WHEELINGMODECOMMANDACK
DESCRIPTOR.enum_types_by_name['WheelingModePossiblities'] = _WHEELINGMODEPOSSIBLITIES
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DirectionVector = _reflection.GeneratedProtocolMessageType('DirectionVector', (_message.Message,), {
  'DESCRIPTOR' : _DIRECTIONVECTOR,
  '__module__' : 'mobile_platform_reachy_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.mobility.DirectionVector)
  })
_sym_db.RegisterMessage(DirectionVector)

TargetDirectionCommand = _reflection.GeneratedProtocolMessageType('TargetDirectionCommand', (_message.Message,), {
  'DESCRIPTOR' : _TARGETDIRECTIONCOMMAND,
  '__module__' : 'mobile_platform_reachy_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.mobility.TargetDirectionCommand)
  })
_sym_db.RegisterMessage(TargetDirectionCommand)

TargetDirectionCommandAck = _reflection.GeneratedProtocolMessageType('TargetDirectionCommandAck', (_message.Message,), {
  'DESCRIPTOR' : _TARGETDIRECTIONCOMMANDACK,
  '__module__' : 'mobile_platform_reachy_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.mobility.TargetDirectionCommandAck)
  })
_sym_db.RegisterMessage(TargetDirectionCommandAck)

WheelingModeCommand = _reflection.GeneratedProtocolMessageType('WheelingModeCommand', (_message.Message,), {
  'DESCRIPTOR' : _WHEELINGMODECOMMAND,
  '__module__' : 'mobile_platform_reachy_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.mobility.WheelingModeCommand)
  })
_sym_db.RegisterMessage(WheelingModeCommand)

WheelingModeCommandAck = _reflection.GeneratedProtocolMessageType('WheelingModeCommandAck', (_message.Message,), {
  'DESCRIPTOR' : _WHEELINGMODECOMMANDACK,
  '__module__' : 'mobile_platform_reachy_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.mobility.WheelingModeCommandAck)
  })
_sym_db.RegisterMessage(WheelingModeCommandAck)



_MOBILITYSERVICE = _descriptor.ServiceDescriptor(
  name='MobilityService',
  full_name='reachy.sdk.mobility.MobilityService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=405,
  serialized_end=638,
  methods=[
  _descriptor.MethodDescriptor(
    name='SendDirection',
    full_name='reachy.sdk.mobility.MobilityService.SendDirection',
    index=0,
    containing_service=None,
    input_type=_TARGETDIRECTIONCOMMAND,
    output_type=_TARGETDIRECTIONCOMMANDACK,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='SetWheelingMode',
    full_name='reachy.sdk.mobility.MobilityService.SetWheelingMode',
    index=1,
    containing_service=None,
    input_type=_WHEELINGMODECOMMAND,
    output_type=_WHEELINGMODECOMMANDACK,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_MOBILITYSERVICE)

DESCRIPTOR.services_by_name['MobilityService'] = _MOBILITYSERVICE

# @@protoc_insertion_point(module_scope)
