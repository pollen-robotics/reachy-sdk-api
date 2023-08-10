// source: mobile_platform_reachy.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.mobility.SetSpeedVector');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.FloatValue');

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
proto.reachy.sdk.mobility.SetSpeedVector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reachy.sdk.mobility.SetSpeedVector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.mobility.SetSpeedVector.displayName = 'proto.reachy.sdk.mobility.SetSpeedVector';
}



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
proto.reachy.sdk.mobility.SetSpeedVector.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.mobility.SetSpeedVector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.mobility.SetSpeedVector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.SetSpeedVector.toObject = function(includeInstance, msg) {
  var f, obj = {
    xVel: (f = msg.getXVel()) && proto.google.protobuf.FloatValue.toObject(includeInstance, f),
    yVel: (f = msg.getYVel()) && proto.google.protobuf.FloatValue.toObject(includeInstance, f),
    rotVel: (f = msg.getRotVel()) && proto.google.protobuf.FloatValue.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.google.protobuf.FloatValue.toObject(includeInstance, f)
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
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector}
 */
proto.reachy.sdk.mobility.SetSpeedVector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.mobility.SetSpeedVector;
  return proto.reachy.sdk.mobility.SetSpeedVector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.mobility.SetSpeedVector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector}
 */
proto.reachy.sdk.mobility.SetSpeedVector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.FloatValue;
      reader.readMessage(value,proto.google.protobuf.FloatValue.deserializeBinaryFromReader);
      msg.setXVel(value);
      break;
    case 2:
      var value = new proto.google.protobuf.FloatValue;
      reader.readMessage(value,proto.google.protobuf.FloatValue.deserializeBinaryFromReader);
      msg.setYVel(value);
      break;
    case 3:
      var value = new proto.google.protobuf.FloatValue;
      reader.readMessage(value,proto.google.protobuf.FloatValue.deserializeBinaryFromReader);
      msg.setRotVel(value);
      break;
    case 4:
      var value = new proto.google.protobuf.FloatValue;
      reader.readMessage(value,proto.google.protobuf.FloatValue.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.reachy.sdk.mobility.SetSpeedVector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.mobility.SetSpeedVector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.mobility.SetSpeedVector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.SetSpeedVector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXVel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getYVel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.google.protobuf.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getRotVel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.protobuf.FloatValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.FloatValue x_vel = 1;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.getXVel = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FloatValue, 1));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
*/
proto.reachy.sdk.mobility.SetSpeedVector.prototype.setXVel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.clearXVel = function() {
  return this.setXVel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.hasXVel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FloatValue y_vel = 2;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.getYVel = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FloatValue, 2));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
*/
proto.reachy.sdk.mobility.SetSpeedVector.prototype.setYVel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.clearYVel = function() {
  return this.setYVel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.hasYVel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FloatValue rot_vel = 3;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.getRotVel = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FloatValue, 3));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
*/
proto.reachy.sdk.mobility.SetSpeedVector.prototype.setRotVel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.clearRotVel = function() {
  return this.setRotVel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.hasRotVel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FloatValue duration = 4;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.FloatValue, 4));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
*/
proto.reachy.sdk.mobility.SetSpeedVector.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.mobility.SetSpeedVector} returns this
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.mobility.SetSpeedVector.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


