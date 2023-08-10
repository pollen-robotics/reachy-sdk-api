// source: fan.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.fan.FansStateRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');
goog.require('proto.reachy.sdk.fan.FanId');

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
proto.reachy.sdk.fan.FansStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.reachy.sdk.fan.FansStateRequest.repeatedFields_, null);
};
goog.inherits(proto.reachy.sdk.fan.FansStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.fan.FansStateRequest.displayName = 'proto.reachy.sdk.fan.FansStateRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.reachy.sdk.fan.FansStateRequest.repeatedFields_ = [1];



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
proto.reachy.sdk.fan.FansStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.fan.FansStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.fan.FansStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.fan.FansStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: jspb.Message.toObjectList(msg.getIdsList(),
    proto.reachy.sdk.fan.FanId.toObject, includeInstance),
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
 * @return {!proto.reachy.sdk.fan.FansStateRequest}
 */
proto.reachy.sdk.fan.FansStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.fan.FansStateRequest;
  return proto.reachy.sdk.fan.FansStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.fan.FansStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.fan.FansStateRequest}
 */
proto.reachy.sdk.fan.FansStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reachy.sdk.fan.FanId;
      reader.readMessage(value,proto.reachy.sdk.fan.FanId.deserializeBinaryFromReader);
      msg.addIds(value);
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
proto.reachy.sdk.fan.FansStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.fan.FansStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.fan.FansStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.fan.FansStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.reachy.sdk.fan.FanId.serializeBinaryToWriter
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
 * repeated FanId ids = 1;
 * @return {!Array<!proto.reachy.sdk.fan.FanId>}
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.getIdsList = function() {
  return /** @type{!Array<!proto.reachy.sdk.fan.FanId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.reachy.sdk.fan.FanId, 1));
};


/**
 * @param {!Array<!proto.reachy.sdk.fan.FanId>} value
 * @return {!proto.reachy.sdk.fan.FansStateRequest} returns this
*/
proto.reachy.sdk.fan.FansStateRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.reachy.sdk.fan.FanId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.reachy.sdk.fan.FanId}
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.addIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.reachy.sdk.fan.FanId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.reachy.sdk.fan.FansStateRequest} returns this
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.reachy.sdk.fan.FansStateRequest} returns this
*/
proto.reachy.sdk.fan.FansStateRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.fan.FansStateRequest} returns this
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.fan.FansStateRequest.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 15) != null;
};


