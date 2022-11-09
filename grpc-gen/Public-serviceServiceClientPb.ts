/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as public$service_pb from './public-service_pb';
import * as common$messages_pb from './common-messages_pb';


export class PublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetNonce = new grpcWeb.MethodDescriptor(
    '/PublicService/GetNonce',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    public$service_pb.GetNonceResponse,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    public$service_pb.GetNonceResponse.deserializeBinary
  );

  getNonce(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<public$service_pb.GetNonceResponse>;

  getNonce(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: public$service_pb.GetNonceResponse) => void): grpcWeb.ClientReadableStream<public$service_pb.GetNonceResponse>;

  getNonce(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: public$service_pb.GetNonceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PublicService/GetNonce',
        request,
        metadata || {},
        this.methodInfoGetNonce,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PublicService/GetNonce',
    request,
    metadata || {},
    this.methodInfoGetNonce);
  }

  methodInfoAuth = new grpcWeb.MethodDescriptor(
    '/PublicService/Auth',
    grpcWeb.MethodType.UNARY,
    public$service_pb.AuthRequest,
    public$service_pb.AuthResponse,
    (request: public$service_pb.AuthRequest) => {
      return request.serializeBinary();
    },
    public$service_pb.AuthResponse.deserializeBinary
  );

  auth(
    request: public$service_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<public$service_pb.AuthResponse>;

  auth(
    request: public$service_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: public$service_pb.AuthResponse) => void): grpcWeb.ClientReadableStream<public$service_pb.AuthResponse>;

  auth(
    request: public$service_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: public$service_pb.AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PublicService/Auth',
        request,
        metadata || {},
        this.methodInfoAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PublicService/Auth',
    request,
    metadata || {},
    this.methodInfoAuth);
  }

  methodInfoGetBeds = new grpcWeb.MethodDescriptor(
    '/PublicService/GetBeds',
    grpcWeb.MethodType.UNARY,
    public$service_pb.GetBedsRequest,
    common$messages_pb.BedList,
    (request: public$service_pb.GetBedsRequest) => {
      return request.serializeBinary();
    },
    common$messages_pb.BedList.deserializeBinary
  );

  getBeds(
    request: public$service_pb.GetBedsRequest,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.BedList>;

  getBeds(
    request: public$service_pb.GetBedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.BedList) => void): grpcWeb.ClientReadableStream<common$messages_pb.BedList>;

  getBeds(
    request: public$service_pb.GetBedsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.BedList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PublicService/GetBeds',
        request,
        metadata || {},
        this.methodInfoGetBeds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PublicService/GetBeds',
    request,
    metadata || {},
    this.methodInfoGetBeds);
  }

  methodInfoGetReview = new grpcWeb.MethodDescriptor(
    '/PublicService/GetReview',
    grpcWeb.MethodType.UNARY,
    public$service_pb.GetReviewsRequest,
    public$service_pb.GetReviewsResponse,
    (request: public$service_pb.GetReviewsRequest) => {
      return request.serializeBinary();
    },
    public$service_pb.GetReviewsResponse.deserializeBinary
  );

  getReview(
    request: public$service_pb.GetReviewsRequest,
    metadata: grpcWeb.Metadata | null): Promise<public$service_pb.GetReviewsResponse>;

  getReview(
    request: public$service_pb.GetReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: public$service_pb.GetReviewsResponse) => void): grpcWeb.ClientReadableStream<public$service_pb.GetReviewsResponse>;

  getReview(
    request: public$service_pb.GetReviewsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: public$service_pb.GetReviewsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PublicService/GetReview',
        request,
        metadata || {},
        this.methodInfoGetReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PublicService/GetReview',
    request,
    metadata || {},
    this.methodInfoGetReview);
  }

}

