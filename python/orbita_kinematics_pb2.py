# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: orbita_kinematics.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import kinematics_pb2 as kinematics__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='orbita_kinematics.proto',
  package='reachy.sdk.kinematics',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x17orbita_kinematics.proto\x12\x15reachy.sdk.kinematics\x1a\x10kinematics.proto\"<\n\x0cOrbitaTarget\x12,\n\x01q\x18\x01 \x01(\x0b\x32!.reachy.sdk.kinematics.Quaternion2p\n\x0fOrbitaKinematic\x12]\n\x0f\x43omputeOrbitaIK\x12#.reachy.sdk.kinematics.OrbitaTarget\x1a%.reachy.sdk.kinematics.JointsPositionb\x06proto3'
  ,
  dependencies=[kinematics__pb2.DESCRIPTOR,])




_ORBITATARGET = _descriptor.Descriptor(
  name='OrbitaTarget',
  full_name='reachy.sdk.kinematics.OrbitaTarget',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='q', full_name='reachy.sdk.kinematics.OrbitaTarget.q', index=0,
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
  serialized_start=68,
  serialized_end=128,
)

_ORBITATARGET.fields_by_name['q'].message_type = kinematics__pb2._QUATERNION
DESCRIPTOR.message_types_by_name['OrbitaTarget'] = _ORBITATARGET
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

OrbitaTarget = _reflection.GeneratedProtocolMessageType('OrbitaTarget', (_message.Message,), {
  'DESCRIPTOR' : _ORBITATARGET,
  '__module__' : 'orbita_kinematics_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.kinematics.OrbitaTarget)
  })
_sym_db.RegisterMessage(OrbitaTarget)



_ORBITAKINEMATIC = _descriptor.ServiceDescriptor(
  name='OrbitaKinematic',
  full_name='reachy.sdk.kinematics.OrbitaKinematic',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=130,
  serialized_end=242,
  methods=[
  _descriptor.MethodDescriptor(
    name='ComputeOrbitaIK',
    full_name='reachy.sdk.kinematics.OrbitaKinematic.ComputeOrbitaIK',
    index=0,
    containing_service=None,
    input_type=_ORBITATARGET,
    output_type=kinematics__pb2._JOINTSPOSITION,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ORBITAKINEMATIC)

DESCRIPTOR.services_by_name['OrbitaKinematic'] = _ORBITAKINEMATIC

# @@protoc_insertion_point(module_scope)
