// source: camera_reachy.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.reachy.sdk.camera.StreamImageRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.reachy.sdk.camera.ImageRequest');

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
proto.reachy.sdk.camera.StreamImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.reachy.sdk.camera.StreamImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.reachy.sdk.camera.StreamImageRequest.displayName = 'proto.reachy.sdk.camera.StreamImageRequest';
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
proto.reachy.sdk.camera.StreamImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.reachy.sdk.camera.StreamImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.reachy.sdk.camera.StreamImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.camera.StreamImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.reachy.sdk.camera.ImageRequest.toObject(includeInstance, f)
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
 * @return {!proto.reachy.sdk.camera.StreamImageRequest}
 */
proto.reachy.sdk.camera.StreamImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.reachy.sdk.camera.StreamImageRequest;
  return proto.reachy.sdk.camera.StreamImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.reachy.sdk.camera.StreamImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.reachy.sdk.camera.StreamImageRequest}
 */
proto.reachy.sdk.camera.StreamImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.reachy.sdk.camera.ImageRequest;
      reader.readMessage(value,proto.reachy.sdk.camera.ImageRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
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
proto.reachy.sdk.camera.StreamImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.reachy.sdk.camera.StreamImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.reachy.sdk.camera.StreamImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.reachy.sdk.camera.StreamImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.reachy.sdk.camera.ImageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ImageRequest request = 1;
 * @return {?proto.reachy.sdk.camera.ImageRequest}
 */
proto.reachy.sdk.camera.StreamImageRequest.prototype.getRequest = function() {
  return /** @type{?proto.reachy.sdk.camera.ImageRequest} */ (
    jspb.Message.getWrapperField(this, proto.reachy.sdk.camera.ImageRequest, 1));
};


/**
 * @param {?proto.reachy.sdk.camera.ImageRequest|undefined} value
 * @return {!proto.reachy.sdk.camera.StreamImageRequest} returns this
*/
proto.reachy.sdk.camera.StreamImageRequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.reachy.sdk.camera.StreamImageRequest} returns this
 */
proto.reachy.sdk.camera.StreamImageRequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.reachy.sdk.camera.StreamImageRequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


