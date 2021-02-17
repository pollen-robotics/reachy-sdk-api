

## Install Python SDK API

```pip install reachy_sdk_api```

## Generate gRPC code

* For Python:

```python -m grpc_tools.protoc -I./protos --python_out=./python/reachy_sdk_api --grpc_python_out=./python/reachy_sdk_api ./protos/*.proto```

* For C#:

Open reachy_sdk.sln in Visual Studio\
Click Build > Build Solution
