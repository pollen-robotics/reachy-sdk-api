// source: mobile_platform_reachy.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.mobility.ZuuuModeCommand');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.reachy.sdk.mobility.ZuuuModePossiblities');
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
proto.reachy.sdk.mobility.ZuuuModeCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reachy.sdk.mobility.ZuuuModeCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.mobility.ZuuuModeCommand.displayName = 'proto.reachy.sdk.mobility.ZuuuModeCommand';
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
proto.reachy.sdk.mobility.ZuuuModeCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.mobility.ZuuuModeCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.mobility.ZuuuModeCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.reachy.sdk.mobility.ZuuuModeCommand}
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.mobility.ZuuuModeCommand;
  return proto.reachy.sdk.mobility.ZuuuModeCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.mobility.ZuuuModeCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.mobility.ZuuuModeCommand}
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.reachy.sdk.mobility.ZuuuModePossiblities} */ (reader.readEnum());
      msg.setMode(value);
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
proto.reachy.sdk.mobility.ZuuuModeCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.mobility.ZuuuModeCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.mobility.ZuuuModeCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional ZuuuModePossiblities mode = 1;
 * @return {!proto.reachy.sdk.mobility.ZuuuModePossiblities}
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.prototype.getMode = function() {
  return /** @type {!proto.reachy.sdk.mobility.ZuuuModePossiblities} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.reachy.sdk.mobility.ZuuuModePossiblities} value
 * @return {!proto.reachy.sdk.mobility.ZuuuModeCommand} returns this
 */
proto.reachy.sdk.mobility.ZuuuModeCommand.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


