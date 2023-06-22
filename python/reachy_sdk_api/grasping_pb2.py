# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: grasping.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import pose_pb2 as pose__pb2
import detection_pb2 as detection__pb2
import arm_kinematics_pb2 as arm__kinematics__pb2
import metadata_pb2 as metadata__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0egrasping.proto\x12\x13reachy.sdk.grasping\x1a\npose.proto\x1a\x0f\x64\x65tection.proto\x1a\x14\x61rm_kinematics.proto\x1a\x0emetadata.proto\"\xa0\x01\n\tGraspPose\x12\x10\n\x08\x63lass_id\x18\x01 \x01(\t\x12\x10\n\x08grasp_id\x18\x02 \x01(\t\x12\x30\n\ngrasp_pose\x18\x03 \x01(\x0b\x32\x1c.reachy.sdk.pose.PoseStamped\x12\x15\n\rgrasp_quality\x18\x04 \x01(\x01\x12\x15\n\rgrasp_opening\x18\x05 \x01(\x01\x12\x0f\n\x07margins\x18\x06 \x03(\x01\"E\n\x0eGraspPoseArray\x12\x33\n\x0bgrasp_poses\x18\x01 \x03(\x0b\x32\x1e.reachy.sdk.grasping.GraspPose\"k\n\x0c\x41rmGraspPose\x12*\n\x04pose\x18\x01 \x01(\x0b\x32\x1c.reachy.sdk.pose.PoseStamped\x12/\n\x06joints\x18\x02 \x01(\x0b\x32\x1f.reachy.sdk.grasping.JointState\"{\n\nJointState\x12+\n\x06header\x18\x01 \x01(\x0b\x32\x1b.reachy.sdk.metadata.Header\x12\x0c\n\x04name\x18\x02 \x03(\t\x12\x10\n\x08position\x18\x03 \x03(\x01\x12\x10\n\x08velocity\x18\x04 \x03(\x01\x12\x0e\n\x06\x65\x66\x66ort\x18\x05 \x03(\x01\"\x95\x02\n\x15ReachableGraspTriplet\x12\x10\n\x08\x63lass_id\x18\x01 \x01(\t\x12\x10\n\x08grasp_id\x18\x02 \x01(\t\x12\x38\n\rpregrasp_pose\x18\x03 \x01(\x0b\x32!.reachy.sdk.grasping.ArmGraspPose\x12\x35\n\ngrasp_pose\x18\x04 \x01(\x0b\x32!.reachy.sdk.grasping.ArmGraspPose\x12\x39\n\x0epostgrasp_pose\x18\x05 \x01(\x0b\x32!.reachy.sdk.grasping.ArmGraspPose\x12\x15\n\rgrasp_quality\x18\x06 \x01(\x01\x12\x15\n\rgrasp_opening\x18\x07 \x01(\x01\"j\n\x1aReachableGraspTripletArray\x12L\n\x18reachable_grasp_triplets\x18\x01 \x03(\x0b\x32*.reachy.sdk.grasping.ReachableGraspTriplet\"\x97\x01\n\x13ReachabilityRequest\x12,\n\x04side\x18\x01 \x01(\x0e\x32\x1e.reachy.sdk.kinematics.ArmSide\x12#\n\x04pose\x18\x02 \x01(\x0b\x32\x15.reachy.sdk.pose.Pose\x12-\n\ttolerance\x18\x03 \x01(\x0b\x32\x1a.reachy.sdk.pose.Tolerance\"$\n\x0fReachabilityAck\x12\x11\n\treachable\x18\x01 \x01(\x08\"^\n\x10GraspPoseRequest\x12:\n\ndetections\x18\x01 \x01(\x0b\x32&.reachy.sdk.detection.Detection3DArray\x12\x0e\n\x06method\x18\x02 \x01(\t2\xc4\x02\n\x0fGraspingService\x12[\n\rGetGraspPoses\x12%.reachy.sdk.grasping.GraspPoseRequest\x1a#.reachy.sdk.grasping.GraspPoseArray\x12q\n\x19GetReachableGraspTriplets\x12#.reachy.sdk.grasping.GraspPoseArray\x1a/.reachy.sdk.grasping.ReachableGraspTripletArray\x12\x61\n\x0fGetReachability\x12(.reachy.sdk.grasping.ReachabilityRequest\x1a$.reachy.sdk.grasping.ReachabilityAckb\x06proto3')



_GRASPPOSE = DESCRIPTOR.message_types_by_name['GraspPose']
_GRASPPOSEARRAY = DESCRIPTOR.message_types_by_name['GraspPoseArray']
_ARMGRASPPOSE = DESCRIPTOR.message_types_by_name['ArmGraspPose']
_JOINTSTATE = DESCRIPTOR.message_types_by_name['JointState']
_REACHABLEGRASPTRIPLET = DESCRIPTOR.message_types_by_name['ReachableGraspTriplet']
_REACHABLEGRASPTRIPLETARRAY = DESCRIPTOR.message_types_by_name['ReachableGraspTripletArray']
_REACHABILITYREQUEST = DESCRIPTOR.message_types_by_name['ReachabilityRequest']
_REACHABILITYACK = DESCRIPTOR.message_types_by_name['ReachabilityAck']
_GRASPPOSEREQUEST = DESCRIPTOR.message_types_by_name['GraspPoseRequest']
GraspPose = _reflection.GeneratedProtocolMessageType('GraspPose', (_message.Message,), {
  'DESCRIPTOR' : _GRASPPOSE,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.GraspPose)
  })
_sym_db.RegisterMessage(GraspPose)

GraspPoseArray = _reflection.GeneratedProtocolMessageType('GraspPoseArray', (_message.Message,), {
  'DESCRIPTOR' : _GRASPPOSEARRAY,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.GraspPoseArray)
  })
_sym_db.RegisterMessage(GraspPoseArray)

ArmGraspPose = _reflection.GeneratedProtocolMessageType('ArmGraspPose', (_message.Message,), {
  'DESCRIPTOR' : _ARMGRASPPOSE,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.ArmGraspPose)
  })
_sym_db.RegisterMessage(ArmGraspPose)

JointState = _reflection.GeneratedProtocolMessageType('JointState', (_message.Message,), {
  'DESCRIPTOR' : _JOINTSTATE,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.JointState)
  })
_sym_db.RegisterMessage(JointState)

ReachableGraspTriplet = _reflection.GeneratedProtocolMessageType('ReachableGraspTriplet', (_message.Message,), {
  'DESCRIPTOR' : _REACHABLEGRASPTRIPLET,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.ReachableGraspTriplet)
  })
_sym_db.RegisterMessage(ReachableGraspTriplet)

ReachableGraspTripletArray = _reflection.GeneratedProtocolMessageType('ReachableGraspTripletArray', (_message.Message,), {
  'DESCRIPTOR' : _REACHABLEGRASPTRIPLETARRAY,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.ReachableGraspTripletArray)
  })
_sym_db.RegisterMessage(ReachableGraspTripletArray)

ReachabilityRequest = _reflection.GeneratedProtocolMessageType('ReachabilityRequest', (_message.Message,), {
  'DESCRIPTOR' : _REACHABILITYREQUEST,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.ReachabilityRequest)
  })
_sym_db.RegisterMessage(ReachabilityRequest)

ReachabilityAck = _reflection.GeneratedProtocolMessageType('ReachabilityAck', (_message.Message,), {
  'DESCRIPTOR' : _REACHABILITYACK,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.ReachabilityAck)
  })
_sym_db.RegisterMessage(ReachabilityAck)

GraspPoseRequest = _reflection.GeneratedProtocolMessageType('GraspPoseRequest', (_message.Message,), {
  'DESCRIPTOR' : _GRASPPOSEREQUEST,
  '__module__' : 'grasping_pb2'
  # @@protoc_insertion_point(class_scope:reachy.sdk.grasping.GraspPoseRequest)
  })
_sym_db.RegisterMessage(GraspPoseRequest)

_GRASPINGSERVICE = DESCRIPTOR.services_by_name['GraspingService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _GRASPPOSE._serialized_start=107
  _GRASPPOSE._serialized_end=267
  _GRASPPOSEARRAY._serialized_start=269
  _GRASPPOSEARRAY._serialized_end=338
  _ARMGRASPPOSE._serialized_start=340
  _ARMGRASPPOSE._serialized_end=447
  _JOINTSTATE._serialized_start=449
  _JOINTSTATE._serialized_end=572
  _REACHABLEGRASPTRIPLET._serialized_start=575
  _REACHABLEGRASPTRIPLET._serialized_end=852
  _REACHABLEGRASPTRIPLETARRAY._serialized_start=854
  _REACHABLEGRASPTRIPLETARRAY._serialized_end=960
  _REACHABILITYREQUEST._serialized_start=963
  _REACHABILITYREQUEST._serialized_end=1114
  _REACHABILITYACK._serialized_start=1116
  _REACHABILITYACK._serialized_end=1152
  _GRASPPOSEREQUEST._serialized_start=1154
  _GRASPPOSEREQUEST._serialized_end=1248
  _GRASPINGSERVICE._serialized_start=1251
  _GRASPINGSERVICE._serialized_end=1575
# @@protoc_insertion_point(module_scope)
