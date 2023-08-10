// source: trajectory.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.trajectory.Trajectory');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.reachy.sdk.trajectory.Trajectory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reachy.sdk.trajectory.Trajectory.repeatedFields_, null);
};
goog.inherits(proto.reachy.sdk.trajectory.Trajectory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.trajectory.Trajectory.displayName = 'proto.reachy.sdk.trajectory.Trajectory';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reachy.sdk.trajectory.Trajectory.repeatedFields_ = [1];



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
proto.reachy.sdk.trajectory.Trajectory.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.trajectory.Trajectory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.trajectory.Trajectory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.trajectory.Trajectory.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    dt: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.reachy.sdk.trajectory.Trajectory}
 */
proto.reachy.sdk.trajectory.Trajectory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.trajectory.Trajectory;
  return proto.reachy.sdk.trajectory.Trajectory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.trajectory.Trajectory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.trajectory.Trajectory}
 */
proto.reachy.sdk.trajectory.Trajectory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setPositionsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDt(value);
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
proto.reachy.sdk.trajectory.Trajectory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.trajectory.Trajectory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.trajectory.Trajectory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.trajectory.Trajectory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
  f = message.getDt();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * repeated double positions = 1;
 * @return {!Array<number>}
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.getPositionsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.reachy.sdk.trajectory.Trajectory} returns this
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.setPositionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.reachy.sdk.trajectory.Trajectory} returns this
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.addPositions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reachy.sdk.trajectory.Trajectory} returns this
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};


/**
 * optional double dt = 2;
 * @return {number}
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.getDt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.reachy.sdk.trajectory.Trajectory} returns this
 */
proto.reachy.sdk.trajectory.Trajectory.prototype.setDt = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


