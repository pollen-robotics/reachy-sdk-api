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
### In [*joint.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/joint.proto)):
Service: **JointService**
* **GetAllJointsId** - Return the list of all Reachy's joints ids.
* **GetJointsState** - Return the requested properties for the given joints.
* **SendJointsCommands** - Set the requested joints to the requested positions.
* **StreamJointsCommands** - Set continuously the requested joints to the requested positions.
* **StreamJointsState** - Stream the requested properties for the given joints.

### In [*arm_kinematics.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/arm_kinematics.proto)):
Service: **ArmKinematics**
* **ComputeArmFK** - Carry out the forward kinematics computation for Reachy's arm.
* **ComputeArmIK** - Carry out the inverse kinematics computation for Reachy's arm.

### In [*orbita_kinematics.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/orbita_kinematics.proto)):
Service: **OrbitaKinematics**
* **ComputeOrbitaIK** - Carry out the inverse kinematics computation for Reachy's orbita neck.
* **GetQuaternionTransform** - Get the quaternion corresponding to a given lookVector in Reachy's orbita neck coordinate system.

### In [*fullbody_cartesian_command.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/fullbody_cartesian_command.proto)):
Service: **FullBodyCartesianCommandService**
* **SendFullBodyCartesianCommands** - Set the joints to the requested positions given targets in cartesian coordinate system, for both arms and head of Reachy.
* **StreamFullBodyCartesianCommands** - Set continuously the joints to the requested positions given targets in cartesian coordinate system, for both arms and head of Reachy.

### In [*camera_reachy.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/camera_reachy.proto)):
Service: **CameraService**
* **GetImage** - Return the image of the requested Reachy's camera.

### In [*zoom_command.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/zoom_command.proto)):
Service: **ZoomControllerService**
* **SendZoomCommand** - Change Reachy's camera zoom into the requested position.
* **SetZoomSpeed** - Change Reachy's camera zoom speed into the requested value.

### In [*trajectory.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/trajectory.proto)):
Service: **TrajectoryService**
* **ComputeMinimumJerkTrajectory** - Compute a trajectory with a minimum jerk interpolation between a starting and a goal position in a given time.

### In [*sensor.proto*]((https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/sensor.proto)):
Service: **SensorService**
* **GetAllForceSensorsId** - Return the list of all Reachy's sensors ids.
* **GetSensorsState** - Return the state of the requested sensors.
* **StreamSensorStates** - Stream the state of the requested sensors.

---

This API is part of the version 2021 software release of Reachy.

Visit [pollen-robotics.com](https://pollen-robotics.com) to learn more or visit [our forum](https://forum.pollen-robotics.com) if you have any questions.
