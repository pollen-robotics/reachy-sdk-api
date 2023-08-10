// source: any_mobile_base_command.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.mobility.AnyMobileBaseCommand');
goog.provide('proto.reachy.sdk.mobility.AnyMobileBaseCommand.CommandCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');
goog.require('proto.reachy.sdk.mobility.GoToVector');
goog.require('proto.reachy.sdk.mobility.MobileBasePresence');
goog.require('proto.reachy.sdk.mobility.ResetOdometryMessage');
goog.require('proto.reachy.sdk.mobility.TargetDirectionCommand');
goog.require('proto.reachy.sdk.mobility.ZuuuModeCommand');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_);
};
goog.inherits(proto.reachy.sdk.mobility.AnyMobileBaseCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.mobility.AnyMobileBaseCommand.displayName = 'proto.reachy.sdk.mobility.AnyMobileBaseCommand';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.CommandCase = {
  COMMAND_NOT_SET: 0,
  PRESENCE: 1,
  TARGET_DIRECTION: 2,
  MODE_COMMAND: 3,
  GO_TO: 4,
  RESET_ODOMETRY: 5
};

/**
 * @return {proto.reachy.sdk.mobility.AnyMobileBaseCommand.CommandCase}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getCommandCase = function() {
  return /** @type {proto.reachy.sdk.mobility.AnyMobileBaseCommand.CommandCase} */(jspb.Message.computeOneofCase(this, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.mobility.AnyMobileBaseCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    presence: (f = msg.getPresence()) && proto.reachy.sdk.mobility.MobileBasePresence.toObject(includeInstance, f),
    targetDirection: (f = msg.getTargetDirection()) && proto.reachy.sdk.mobility.TargetDirectionCommand.toObject(includeInstance, f),
    modeCommand: (f = msg.getModeCommand()) && proto.reachy.sdk.mobility.ZuuuModeCommand.toObject(includeInstance, f),
    goTo: (f = msg.getGoTo()) && proto.reachy.sdk.mobility.GoToVector.toObject(includeInstance, f),
    resetOdometry: (f = msg.getResetOdometry()) && proto.reachy.sdk.mobility.ResetOdometryMessage.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.mobility.AnyMobileBaseCommand;
  return proto.reachy.sdk.mobility.AnyMobileBaseCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reachy.sdk.mobility.MobileBasePresence;
      reader.readMessage(value,proto.reachy.sdk.mobility.MobileBasePresence.deserializeBinaryFromReader);
      msg.setPresence(value);
      break;
    case 2:
      var value = new proto.reachy.sdk.mobility.TargetDirectionCommand;
      reader.readMessage(value,proto.reachy.sdk.mobility.TargetDirectionCommand.deserializeBinaryFromReader);
      msg.setTargetDirection(value);
      break;
    case 3:
      var value = new proto.reachy.sdk.mobility.ZuuuModeCommand;
      reader.readMessage(value,proto.reachy.sdk.mobility.ZuuuModeCommand.deserializeBinaryFromReader);
      msg.setModeCommand(value);
      break;
    case 4:
      var value = new proto.reachy.sdk.mobility.GoToVector;
      reader.readMessage(value,proto.reachy.sdk.mobility.GoToVector.deserializeBinaryFromReader);
      msg.setGoTo(value);
      break;
    case 5:
      var value = new proto.reachy.sdk.mobility.ResetOdometryMessage;
      reader.readMessage(value,proto.reachy.sdk.mobility.ResetOdometryMessage.deserializeBinaryFromReader);
      msg.setResetOdometry(value);
      break;
    case 15:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.mobility.AnyMobileBaseCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPresence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.reachy.sdk.mobility.MobileBasePresence.serializeBinaryToWriter
    );
  }
  f = message.getTargetDirection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.reachy.sdk.mobility.TargetDirectionCommand.serializeBinaryToWriter
    );
  }
  f = message.getModeCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.reachy.sdk.mobility.ZuuuModeCommand.serializeBinaryToWriter
    );
  }
  f = message.getGoTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.reachy.sdk.mobility.GoToVector.serializeBinaryToWriter
    );
  }
  f = message.getResetOdometry();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.reachy.sdk.mobility.ResetOdometryMessage.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional MobileBasePresence presence = 1;
 * @return {?proto.reachy.sdk.mobility.MobileBasePresence}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getPresence = function() {
  return /** @type{?proto.reachy.sdk.mobility.MobileBasePresence} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.mobility.MobileBasePresence, 1));
};


/**
 * @param {?proto.reachy.sdk.mobility.MobileBasePresence|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setPresence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearPresence = function() {
  return this.setPresence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasPresence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TargetDirectionCommand target_direction = 2;
 * @return {?proto.reachy.sdk.mobility.TargetDirectionCommand}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getTargetDirection = function() {
  return /** @type{?proto.reachy.sdk.mobility.TargetDirectionCommand} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.mobility.TargetDirectionCommand, 2));
};


/**
 * @param {?proto.reachy.sdk.mobility.TargetDirectionCommand|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setTargetDirection = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearTargetDirection = function() {
  return this.setTargetDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasTargetDirection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ZuuuModeCommand mode_command = 3;
 * @return {?proto.reachy.sdk.mobility.ZuuuModeCommand}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getModeCommand = function() {
  return /** @type{?proto.reachy.sdk.mobility.ZuuuModeCommand} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.mobility.ZuuuModeCommand, 3));
};


/**
 * @param {?proto.reachy.sdk.mobility.ZuuuModeCommand|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setModeCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearModeCommand = function() {
  return this.setModeCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasModeCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GoToVector go_to = 4;
 * @return {?proto.reachy.sdk.mobility.GoToVector}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getGoTo = function() {
  return /** @type{?proto.reachy.sdk.mobility.GoToVector} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.mobility.GoToVector, 4));
};


/**
 * @param {?proto.reachy.sdk.mobility.GoToVector|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setGoTo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearGoTo = function() {
  return this.setGoTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasGoTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResetOdometryMessage reset_odometry = 5;
 * @return {?proto.reachy.sdk.mobility.ResetOdometryMessage}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getResetOdometry = function() {
  return /** @type{?proto.reachy.sdk.mobility.ResetOdometryMessage} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.mobility.ResetOdometryMessage, 5));
};


/**
 * @param {?proto.reachy.sdk.mobility.ResetOdometryMessage|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setResetOdometry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.reachy.sdk.mobility.AnyMobileBaseCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearResetOdometry = function() {
  return this.setResetOdometry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasResetOdometry = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
*/
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.AnyMobileBaseCommand} returns this
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.AnyMobileBaseCommand.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 15) != null;
};


