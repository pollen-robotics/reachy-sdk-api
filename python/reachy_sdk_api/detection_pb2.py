# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: detection.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
import geometry_pb2 as geometry__pb2
import metadata_pb2 as metadata__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0f\x64\x65tection.proto\x12\x14reachy.sdk.detection\x1a\x1bgoogle/protobuf/empty.proto\x1a\x0egeometry.proto\x1a\x0emetadata.proto\"Q\n\x12PoseWithCovariance\x12\'\n\x04pose\x18\x01 \x01(\x0b\x32\x19.reachy.sdk.geometry.Pose\x12\x12\n\ncovariance\x18\x02 \x03(\x01\"m\n\x18ObjectHypothesisWithPose\x12\n\n\x02id\x18\x01 \x01(\r\x12\r\n\x05score\x18\x02 \x01(\x01\x12\x36\n\x04pose\x18\x03 \x01(\x0b\x32(.reachy.sdk.detection.PoseWithCovariance\"\xda\x01\n\x0b\x44\x65tection2D\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12?\n\x07results\x18\x02 \x03(\x0b\x32..reachy.sdk.detection.ObjectHypothesisWithPose\x12\x31\n\x04\x62\x62ox\x18\x03 \x01(\x0b\x32#.reachy.sdk.detection.BoundingBox2D\x12*\n\x05image\x18\x04 \x01(\x0b\x32\x1b.reachy.sdk.detection.Image\"v\n\x10\x44\x65tection2DArray\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12\x35\n\ndetections\x18\x02 \x03(\x0b\x32!.reachy.sdk.detection.Detection2D\"\xe0\x01\n\x0b\x44\x65tection3D\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12?\n\x07results\x18\x02 \x03(\x0b\x32..reachy.sdk.detection.ObjectHypothesisWithPose\x12\x31\n\x04\x62\x62ox\x18\x03 \x01(\x0b\x32#.reachy.sdk.detection.BoundingBox3D\x12\x30\n\x05\x63loud\x18\x04 \x01(\x0b\x32!.reachy.sdk.detection.PointCloud2\"v\n\x10\x44\x65tection3DArray\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12\x35\n\ndetections\x18\x02 \x03(\x0b\x32!.reachy.sdk.detection.Detection3D\"\\\n\rBoundingBox2D\x12+\n\x06\x63\x65nter\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.geometry.Pose2D\x12\x0e\n\x06size_x\x18\x02 \x01(\x01\x12\x0e\n\x06size_y\x18\x03 \x01(\x01\"d\n\rBoundingBox3D\x12\'\n\x04pose\x18\x01 \x01(\x0b\x32\x19.reachy.sdk.geometry.Pose\x12*\n\x04size\x18\x02 \x01(\x0b\x32\x1c.reachy.sdk.geometry.Vector3\"K\n\nPointField\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06offset\x18\x02 \x01(\r\x12\x10\n\x08\x64\x61tatype\x18\x03 \x01(\r\x12\r\n\x05\x63ount\x18\x04 \x01(\r\"\xe7\x01\n\x0bPointCloud2\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12\x0e\n\x06height\x18\x02 \x01(\r\x12\r\n\x05width\x18\x03 \x01(\r\x12\x30\n\x06\x66ields\x18\x04 \x03(\x0b\x32 .reachy.sdk.detection.PointField\x12\x14\n\x0cis_bigendian\x18\x05 \x01(\x08\x12\x12\n\npoint_step\x18\x06 \x01(\r\x12\x10\n\x08row_step\x18\x07 \x01(\r\x12\x0c\n\x04\x64\x61ta\x18\x08 \x01(\x0c\x12\x10\n\x08is_dense\x18\t \x01(\x08\"\x97\x01\n\x05Image\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12\x0e\n\x06height\x18\x02 \x01(\r\x12\r\n\x05width\x18\x03 \x01(\r\x12\x10\n\x08\x65ncoding\x18\x04 \x01(\t\x12\x14\n\x0cis_bigendian\x18\x05 \x01(\r\x12\x0c\n\x04step\x18\x06 \x01(\r\x12\x0c\n\x04\x64\x61ta\x18\x07 \x01(\x0c\"\x1d\n\x0bKnownLabels\x12\x0e\n\x06labels\x18\x01 \x03(\t2\x85\x02\n\x10\x44\x65tectionService\x12Q\n\x0fGetDetections2D\x12\x16.google.protobuf.Empty\x1a&.reachy.sdk.detection.Detection2DArray\x12Q\n\x0fGetDetections3D\x12\x16.google.protobuf.Empty\x1a&.reachy.sdk.detection.Detection3DArray\x12K\n\x0eGetKnownLabels\x12\x16.google.protobuf.Empty\x1a!.reachy.sdk.detection.KnownLabelsb\x06proto3')



_POSEWITHCOVARIANCE = DESCRIPTOR.message_types_by_name['PoseWithCovariance']
_OBJECTHYPOTHESISWITHPOSE = DESCRIPTOR.message_types_by_name['ObjectHypothesisWithPose']
_DETECTION2D = DESCRIPTOR.message_types_by_name['Detection2D']
_DETECTION2DARRAY = DESCRIPTOR.message_types_by_name['Detection2DArray']
_DETECTION3D = DESCRIPTOR.message_types_by_name['Detection3D']
_DETECTION3DARRAY = DESCRIPTOR.message_types_by_name['Detection3DArray']
_BOUNDINGBOX2D = DESCRIPTOR.message_types_by_name['BoundingBox2D']
_BOUNDINGBOX3D = DESCRIPTOR.message_types_by_name['BoundingBox3D']
_POINTFIELD = DESCRIPTOR.message_types_by_name['PointField']
_POINTCLOUD2 = DESCRIPTOR.message_types_by_name['PointCloud2']
_IMAGE = DESCRIPTOR.message_types_by_name['Image']
_KNOWNLABELS = DESCRIPTOR.message_types_by_name['KnownLabels']
PoseWithCovariance = _reflection.GeneratedProtocolMessageType('PoseWithCovariance', (_message.Message,), {
  'DESCRIPTOR' : _POSEWITHCOVARIANCE,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.PoseWithCovariance)
  })
_sym_db.RegisterMessage(PoseWithCovariance)

ObjectHypothesisWithPose = _reflection.GeneratedProtocolMessageType('ObjectHypothesisWithPose', (_message.Message,), {
  'DESCRIPTOR' : _OBJECTHYPOTHESISWITHPOSE,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.ObjectHypothesisWithPose)
  })
_sym_db.RegisterMessage(ObjectHypothesisWithPose)

Detection2D = _reflection.GeneratedProtocolMessageType('Detection2D', (_message.Message,), {
  'DESCRIPTOR' : _DETECTION2D,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.Detection2D)
  })
_sym_db.RegisterMessage(Detection2D)

Detection2DArray = _reflection.GeneratedProtocolMessageType('Detection2DArray', (_message.Message,), {
  'DESCRIPTOR' : _DETECTION2DARRAY,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.Detection2DArray)
  })
_sym_db.RegisterMessage(Detection2DArray)

Detection3D = _reflection.GeneratedProtocolMessageType('Detection3D', (_message.Message,), {
  'DESCRIPTOR' : _DETECTION3D,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.Detection3D)
  })
_sym_db.RegisterMessage(Detection3D)

Detection3DArray = _reflection.GeneratedProtocolMessageType('Detection3DArray', (_message.Message,), {
  'DESCRIPTOR' : _DETECTION3DARRAY,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.Detection3DArray)
  })
_sym_db.RegisterMessage(Detection3DArray)

BoundingBox2D = _reflection.GeneratedProtocolMessageType('BoundingBox2D', (_message.Message,), {
  'DESCRIPTOR' : _BOUNDINGBOX2D,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.BoundingBox2D)
  })
_sym_db.RegisterMessage(BoundingBox2D)

BoundingBox3D = _reflection.GeneratedProtocolMessageType('BoundingBox3D', (_message.Message,), {
  'DESCRIPTOR' : _BOUNDINGBOX3D,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.BoundingBox3D)
  })
_sym_db.RegisterMessage(BoundingBox3D)

PointField = _reflection.GeneratedProtocolMessageType('PointField', (_message.Message,), {
  'DESCRIPTOR' : _POINTFIELD,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.PointField)
  })
_sym_db.RegisterMessage(PointField)

PointCloud2 = _reflection.GeneratedProtocolMessageType('PointCloud2', (_message.Message,), {
  'DESCRIPTOR' : _POINTCLOUD2,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.PointCloud2)
  })
_sym_db.RegisterMessage(PointCloud2)

Image = _reflection.GeneratedProtocolMessageType('Image', (_message.Message,), {
  'DESCRIPTOR' : _IMAGE,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.Image)
  })
_sym_db.RegisterMessage(Image)

KnownLabels = _reflection.GeneratedProtocolMessageType('KnownLabels', (_message.Message,), {
  'DESCRIPTOR' : _KNOWNLABELS,
  '__module__' : 'detection_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.detection.KnownLabels)
  })
_sym_db.RegisterMessage(KnownLabels)

_DETECTIONSERVICE = DESCRIPTOR.services_by_name['DetectionService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _POSEWITHCOVARIANCE._serialized_start=102
  _POSEWITHCOVARIANCE._serialized_end=183
  _OBJECTHYPOTHESISWITHPOSE._serialized_start=185
  _OBJECTHYPOTHESISWITHPOSE._serialized_end=294
  _DETECTION2D._serialized_start=297
  _DETECTION2D._serialized_end=515
  _DETECTION2DARRAY._serialized_start=517
  _DETECTION2DARRAY._serialized_end=635
  _DETECTION3D._serialized_start=638
  _DETECTION3D._serialized_end=862
  _DETECTION3DARRAY._serialized_start=864
  _DETECTION3DARRAY._serialized_end=982
  _BOUNDINGBOX2D._serialized_start=984
  _BOUNDINGBOX2D._serialized_end=1076
  _BOUNDINGBOX3D._serialized_start=1078
  _BOUNDINGBOX3D._serialized_end=1178
  _POINTFIELD._serialized_start=1180
  _POINTFIELD._serialized_end=1255
  _POINTCLOUD2._serialized_start=1258
  _POINTCLOUD2._serialized_end=1489
  _IMAGE._serialized_start=1492
  _IMAGE._serialized_end=1643
  _KNOWNLABELS._serialized_start=1645
  _KNOWNLABELS._serialized_end=1674
  _DETECTIONSERVICE._serialized_start=1677
  _DETECTIONSERVICE._serialized_end=1938
# @@protoc_insertion_point(module_scope)
