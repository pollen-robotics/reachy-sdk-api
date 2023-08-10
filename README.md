# Reachy 2021 and 2023 SDK API

Custom gRPC messages and services used by Reachy's SDK server.


## Install Python SDK API

Via pip:
```pip install reachy-sdk-api```

From source:
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

* For js (on Ubuntu):

```bash
cd ~/reachy-sdk-api/protos
protoc --js_out=../js/ *.proto
```

* For ts (on Ubuntu):

```bash
sudo npm install -g ts-protoc-gen
cd ~/reachy-sdk-api/protos
protoc --plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts --ts_out=../ts/ *.proto
```

## Services
### In *[joint.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/joint.proto)*:
Service: **JointService**
* **GetAllJointsId** - Return the list of all Reachy's joints ids.
* **GetJointsState** - Return the requested properties for the given joints.
* **SendJointsCommands** - Set the requested joints to the requested positions.
* **StreamJointsCommands** - Set continuously the requested joints to the requested positions.
* **StreamJointsState** - Stream the requested properties for the given joints.

### In *[arm_kinematics.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/arm_kinematics.proto)*:
Service: **ArmKinematics**
* **ComputeArmFK** - Carry out the forward kinematics computation for Reachy's arm.
* **ComputeArmIK** - Carry out the inverse kinematics computation for Reachy's arm.

### In *[head_kinematics.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/head_kinematics.proto)*:
Service: **HeadKinematics**
* **ComputeHeadFK** - Carry out the forward kinematics computation for Reachy's head.
* **ComputeHeadIK** - Carry out the inverse kinematics computation for Reachy's head.

### In *[fullbody_cartesian_command.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/fullbody_cartesian_command.proto)*:
Service: **FullBodyCartesianCommandService**
* **SendFullBodyCartesianCommands** - Set the joints to the requested positions given targets in cartesian coordinate system, for both arms and head of Reachy.
* **StreamFullBodyCartesianCommands** - Set continuously the joints to the requested positions given targets in cartesian coordinate system, for both arms and head of Reachy.

### In *[camera_reachy.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/camera_reachy.proto)*:
Service: **CameraService**
* **GetImage** - Return the image of the requested Reachy's camera.

### In *[zoom_command.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/zoom_command.proto)*:
Service: **ZoomControllerService**
* **SendZoomCommand** - Change Reachy's camera zoom into the requested position.
* **SetZoomSpeed** - Change Reachy's camera zoom speed into the requested value.

### In *[trajectory.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/trajectory.proto)*:
Service: **TrajectoryService**
* **ComputeMinimumJerkTrajectory** - Compute a trajectory with a minimum jerk interpolation between a starting and a goal position in a given time.

### In *[sensor.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/sensor.proto)*:
Service: **SensorService**
* **GetAllForceSensorsId** - Return the list of all Reachy's sensors ids.
* **GetSensorsState** - Return the state of the requested sensors.
* **StreamSensorStates** - Stream the state of the requested sensors.

### In *[mobile_platform_reachy.proto](https://github.com/pollen-robotics/reachy-sdk-api/blob/main/protos/mobile_platform_reachy.proto)*:
Service : **MobilityService**
* **SendDirection** - Send velocities commands to the mobile base for a predifined period of time.
* **SendSetSpeed** - Send velocities commands to the mobile base.
* **SendGoTo** - Send GoTo instruction to the mobile base.
* **DistanceToGoal** - Return delta x, delta y, delta theta and distance from the last goal position sent using SendGoTo.
* **SetControlMode** - Set the mobile base's control mode.
* **GetControlMode** - Get the mobile base's control mode.
* **SetZuuuMode** - Set the mobile base's drive mode.
* **GetZuuuMode** - Get the mobile base's drive mode.
* **GetBatteryLevel** - Get the mobile base's battery voltage.
* **GetOdometry** - Get the mobile base's odometry.
* **ResetOdometry** - Reset the mobile base's odometry.
* **SetZuuuSafety** - Disable / enable the mobile base's anti-collision safety provided by the Lidar.

Service : **MobileBasePresenceService**
* **GetMobileBasePresence** - Return if a mobile base is specified in Reachy config file. If yes, return the mobile base's version.
---

This API is part of the version 2021 software release of Reachy.

Visit [pollen-robotics.com](https://pollen-robotics.com) to learn more or join our [Dicord community](https://discord.com/invite/Kg3mZHTKgs) if you have any questions or want to share your ideas.
