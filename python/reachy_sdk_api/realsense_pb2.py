# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: realsense.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0frealsense.proto\x12\x14reachy.sdk.realsense\x1a\x1egoogle/protobuf/wrappers.proto\"\x7f\n\x05Point\x12&\n\x01x\x18\x01 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12&\n\x01y\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\x12&\n\x01z\x18\x03 \x01(\x0b\x32\x1b.google.protobuf.FloatValue\">\n\nPointCloud\x12\x30\n\x0bpoint_cloud\x18\x04 \x03(\x0b\x32\x1b.reachy.sdk.realsense.Point\"x\n\x11PointCloudMessage\x12\x30\n\x06ground\x18\x05 \x01(\x0b\x32 .reachy.sdk.realsense.PointCloud\x12\x31\n\x07objects\x18\x06 \x01(\x0b\x32 .reachy.sdk.realsense.PointCloudb\x06proto3')



_POINT = DESCRIPTOR.message_types_by_name['Point']
_POINTCLOUD = DESCRIPTOR.message_types_by_name['PointCloud']
_POINTCLOUDMESSAGE = DESCRIPTOR.message_types_by_name['PointCloudMessage']
Point = _reflection.GeneratedProtocolMessageType('Point', (_message.Message,), {
  'DESCRIPTOR' : _POINT,
  '__module__' : 'realsense_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.realsense.Point)
  })
_sym_db.RegisterMessage(Point)

PointCloud = _reflection.GeneratedProtocolMessageType('PointCloud', (_message.Message,), {
  'DESCRIPTOR' : _POINTCLOUD,
  '__module__' : 'realsense_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.realsense.PointCloud)
  })
_sym_db.RegisterMessage(PointCloud)

PointCloudMessage = _reflection.GeneratedProtocolMessageType('PointCloudMessage', (_message.Message,), {
  'DESCRIPTOR' : _POINTCLOUDMESSAGE,
  '__module__' : 'realsense_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.realsense.PointCloudMessage)
  })
_sym_db.RegisterMessage(PointCloudMessage)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _POINT._serialized_start=73
  _POINT._serialized_end=200
  _POINTCLOUD._serialized_start=202
  _POINTCLOUD._serialized_end=264
  _POINTCLOUDMESSAGE._serialized_start=266
  _POINTCLOUDMESSAGE._serialized_end=386
# @@protoc_insertion_point(module_scope)
