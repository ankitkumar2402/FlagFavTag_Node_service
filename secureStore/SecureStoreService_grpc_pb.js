// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var SecureStoreService_pb = require('./SecureStoreService_pb.js');

function serialize_com_sap_crm_securestoreserviceproto_GetSecretRequest(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetSecretRequest)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetSecretRequest(buffer_arg) {
  return SecureStoreService_pb.GetSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_GetSecretResponse(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetSecretResponse)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetSecretResponse(buffer_arg) {
  return SecureStoreService_pb.GetSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixRequest(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetServiceNameFromPrefixRequest)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetServiceNameFromPrefixRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixRequest(buffer_arg) {
  return SecureStoreService_pb.GetServiceNameFromPrefixRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixResponse(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetServiceNameFromPrefixResponse)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetServiceNameFromPrefixResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixResponse(buffer_arg) {
  return SecureStoreService_pb.GetServiceNameFromPrefixResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_GetSystemSecretRequest(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetSystemSecretRequest)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetSystemSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetSystemSecretRequest(buffer_arg) {
  return SecureStoreService_pb.GetSystemSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_GetSystemSecretResponse(arg) {
  if (!(arg instanceof SecureStoreService_pb.GetSystemSecretResponse)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.GetSystemSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_GetSystemSecretResponse(buffer_arg) {
  return SecureStoreService_pb.GetSystemSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_PutSecretRequest(arg) {
  if (!(arg instanceof SecureStoreService_pb.PutSecretRequest)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.PutSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_PutSecretRequest(buffer_arg) {
  return SecureStoreService_pb.PutSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_PutSecretResponse(arg) {
  if (!(arg instanceof SecureStoreService_pb.PutSecretResponse)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.PutSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_PutSecretResponse(buffer_arg) {
  return SecureStoreService_pb.PutSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_PutSystemSecretRequest(arg) {
  if (!(arg instanceof SecureStoreService_pb.PutSystemSecretRequest)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.PutSystemSecretRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_PutSystemSecretRequest(buffer_arg) {
  return SecureStoreService_pb.PutSystemSecretRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_sap_crm_securestoreserviceproto_PutSystemSecretResponse(arg) {
  if (!(arg instanceof SecureStoreService_pb.PutSystemSecretResponse)) {
    throw new Error('Expected argument of type com.sap.crm.securestoreserviceproto.PutSystemSecretResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_sap_crm_securestoreserviceproto_PutSystemSecretResponse(buffer_arg) {
  return SecureStoreService_pb.PutSystemSecretResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SecureStoreServiceService = exports.SecureStoreServiceService = {
  //
getSecret: {
    path: '/com.sap.crm.securestoreserviceproto.SecureStoreService/GetSecret',
    requestStream: false,
    responseStream: false,
    requestType: SecureStoreService_pb.GetSecretRequest,
    responseType: SecureStoreService_pb.GetSecretResponse,
    requestSerialize: serialize_com_sap_crm_securestoreserviceproto_GetSecretRequest,
    requestDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetSecretRequest,
    responseSerialize: serialize_com_sap_crm_securestoreserviceproto_GetSecretResponse,
    responseDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetSecretResponse,
  },
  putSecret: {
    path: '/com.sap.crm.securestoreserviceproto.SecureStoreService/PutSecret',
    requestStream: false,
    responseStream: false,
    requestType: SecureStoreService_pb.PutSecretRequest,
    responseType: SecureStoreService_pb.PutSecretResponse,
    requestSerialize: serialize_com_sap_crm_securestoreserviceproto_PutSecretRequest,
    requestDeserialize: deserialize_com_sap_crm_securestoreserviceproto_PutSecretRequest,
    responseSerialize: serialize_com_sap_crm_securestoreserviceproto_PutSecretResponse,
    responseDeserialize: deserialize_com_sap_crm_securestoreserviceproto_PutSecretResponse,
  },
  getServiceNameFromPrefix: {
    path: '/com.sap.crm.securestoreserviceproto.SecureStoreService/GetServiceNameFromPrefix',
    requestStream: false,
    responseStream: false,
    requestType: SecureStoreService_pb.GetServiceNameFromPrefixRequest,
    responseType: SecureStoreService_pb.GetServiceNameFromPrefixResponse,
    requestSerialize: serialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixRequest,
    requestDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixRequest,
    responseSerialize: serialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixResponse,
    responseDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetServiceNameFromPrefixResponse,
  },
  getSystemSecret: {
    path: '/com.sap.crm.securestoreserviceproto.SecureStoreService/GetSystemSecret',
    requestStream: false,
    responseStream: false,
    requestType: SecureStoreService_pb.GetSystemSecretRequest,
    responseType: SecureStoreService_pb.GetSystemSecretResponse,
    requestSerialize: serialize_com_sap_crm_securestoreserviceproto_GetSystemSecretRequest,
    requestDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetSystemSecretRequest,
    responseSerialize: serialize_com_sap_crm_securestoreserviceproto_GetSystemSecretResponse,
    responseDeserialize: deserialize_com_sap_crm_securestoreserviceproto_GetSystemSecretResponse,
  },
  putSystemSecret: {
    path: '/com.sap.crm.securestoreserviceproto.SecureStoreService/PutSystemSecret',
    requestStream: false,
    responseStream: false,
    requestType: SecureStoreService_pb.PutSystemSecretRequest,
    responseType: SecureStoreService_pb.PutSystemSecretResponse,
    requestSerialize: serialize_com_sap_crm_securestoreserviceproto_PutSystemSecretRequest,
    requestDeserialize: deserialize_com_sap_crm_securestoreserviceproto_PutSystemSecretRequest,
    responseSerialize: serialize_com_sap_crm_securestoreserviceproto_PutSystemSecretResponse,
    responseDeserialize: deserialize_com_sap_crm_securestoreserviceproto_PutSystemSecretResponse,
  },
};

exports.SecureStoreServiceClient = grpc.makeGenericClientConstructor(SecureStoreServiceService);
