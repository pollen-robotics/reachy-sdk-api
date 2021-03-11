# Reachy SDK API

Custom gRPC messages and services used by Reachy's SDK server.


## Install Python SDK API

```bash
git clone https://github.com/pollen-robotics/reachy-sdk-api.git
cd ~/reachy-sdk-api/
pip install -e python
```

## Generate gRPC code

* For Python:

```python -m grpc_tools.protoc -I./protos --python_out=./python/reachy_sdk_api --grpc_python_out=./python/reachy_sdk_api ./protos/*.proto```

* For C#:

Open reachy_sdk.sln in Visual Studio\
Click Build > Build Solution


## Services
### In *joint*:
Service: **JointService**
* **GetAllJointsId** - Return the list of all Reachy's joints ids
* **GetJointsState** - Return the requested properties for a list of joints ids
* **StreamJointsState** - Stream the requested properties for a list of joints ids
* **SendJointsCommands** - Set the requested motors to the requested positions
* **StreamJointsCommands** - Set continuously the requested motors to the requested positions
### In *arm_kinematics*:
Service: **ArmKinematics**
* **ComputeArmFK** - Carry out the forward kinematics computation for Reachy's arm
* **ComputeArmIK** - Carry out the inverse kinematics computation for Reachy's arm
### In *orbita_kinematics*:
Service: **OrbitaKinematics**
* **ComputeOrbitaIK** - Carry out the inverse kinematics computation for Reachy's orbita neck
* **GetQuaternionTransform** - Get the quaternion corresponding to a given lookVector in Reachy's orbita neck coordinate system
### In *fullbody_cartesian_command*:
Service: **FullBodyCartesianCommandService**
* **SendFullBodyCartesianCommands** - Set the motors to the requested positions given targets in cartesian coordinate system, for Reachy's both arms and head
* **StreamFullBodyCartesianCommands** - Set continuously the motors to the requested positions given targets in cartesian coordinate system, for Reachy's both arms and head
### In *camera_reachy*:
Service: **CameraService**
* **GetImage** - Return the image of the requested Reachy's camera
### In *zoom_command*:
Service: **ZoomControllerService**
* **SetZoomSpeed** - Change Reachy's camera zoom speed into the requested value
* **SendZoomCommand** - Change Reachy's camera zoom into the requested position
### In *trajectory*:
Service: **KinematicsService**
* **ComputeMinimumJerkTrajectory** - Compute a trajectory with a minimum jerk interpolation between a starting and a goal position in a given time
### In *sensor*:
Service: **SensorService**
* **GetAllForceSensorsId** - Return the list of all Reachy's sensors ids
* **GetSensorsState** - Return sensors state for a list of sensors ids
* **StreamSensorStates** - Stream sensors state for a list of sensors ids

---

This API is part of the version 2021 software release of Reachy.

Visit [pollen-robotics.com](https://pollen-robotics.com) to learn more or visit [our forum](https://forum.pollen-robotics.com) if you have any questions.
