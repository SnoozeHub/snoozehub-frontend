/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as common$messages_pb from './common-messages_pb';
import * as auth$only$service_pb from './auth-only-service_pb';


export class AuthOnlyServiceClient {
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

  methodInfoSignUp = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/SignUp',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.AccountInfo,
    common$messages_pb.Empty,
    (request: common$messages_pb.AccountInfo) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  signUp(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  signUp(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  signUp(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/SignUp',
        request,
        metadata || {},
        this.methodInfoSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/SignUp',
    request,
    metadata || {},
    this.methodInfoSignUp);
  }

  methodInfoVerifyMail = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/VerifyMail',
    grpcWeb.MethodType.UNARY,
    auth$only$service_pb.VerifyMailRequest,
    auth$only$service_pb.VerifyMailResponse,
    (request: auth$only$service_pb.VerifyMailRequest) => {
      return request.serializeBinary();
    },
    auth$only$service_pb.VerifyMailResponse.deserializeBinary
  );

  verifyMail(
    request: auth$only$service_pb.VerifyMailRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth$only$service_pb.VerifyMailResponse>;

  verifyMail(
    request: auth$only$service_pb.VerifyMailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.VerifyMailResponse) => void): grpcWeb.ClientReadableStream<auth$only$service_pb.VerifyMailResponse>;

  verifyMail(
    request: auth$only$service_pb.VerifyMailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.VerifyMailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/VerifyMail',
        request,
        metadata || {},
        this.methodInfoVerifyMail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/VerifyMail',
    request,
    metadata || {},
    this.methodInfoVerifyMail);
  }

  methodInfoGetAccountInfo = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/GetAccountInfo',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    common$messages_pb.AccountInfo,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    common$messages_pb.AccountInfo.deserializeBinary
  );

  getAccountInfo(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.AccountInfo>;

  getAccountInfo(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.AccountInfo) => void): grpcWeb.ClientReadableStream<common$messages_pb.AccountInfo>;

  getAccountInfo(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.AccountInfo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/GetAccountInfo',
        request,
        metadata || {},
        this.methodInfoGetAccountInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/GetAccountInfo',
    request,
    metadata || {},
    this.methodInfoGetAccountInfo);
  }

  methodInfoGetProfilePic = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/GetProfilePic',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    common$messages_pb.ProfilePic,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    common$messages_pb.ProfilePic.deserializeBinary
  );

  getProfilePic(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.ProfilePic>;

  getProfilePic(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.ProfilePic) => void): grpcWeb.ClientReadableStream<common$messages_pb.ProfilePic>;

  getProfilePic(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.ProfilePic) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/GetProfilePic',
        request,
        metadata || {},
        this.methodInfoGetProfilePic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/GetProfilePic',
    request,
    metadata || {},
    this.methodInfoGetProfilePic);
  }

  methodInfoDeleteAccount = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/DeleteAccount',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    common$messages_pb.Empty,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  deleteAccount(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  deleteAccount(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  deleteAccount(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/DeleteAccount',
        request,
        metadata || {},
        this.methodInfoDeleteAccount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/DeleteAccount',
    request,
    metadata || {},
    this.methodInfoDeleteAccount);
  }

  methodInfoSetProfilePic = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/SetProfilePic',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.ProfilePic,
    common$messages_pb.Empty,
    (request: common$messages_pb.ProfilePic) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  setProfilePic(
    request: common$messages_pb.ProfilePic,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  setProfilePic(
    request: common$messages_pb.ProfilePic,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  setProfilePic(
    request: common$messages_pb.ProfilePic,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/SetProfilePic',
        request,
        metadata || {},
        this.methodInfoSetProfilePic,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/SetProfilePic',
    request,
    metadata || {},
    this.methodInfoSetProfilePic);
  }

  methodInfoUpdateAccountInfo = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/UpdateAccountInfo',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.AccountInfo,
    common$messages_pb.Empty,
    (request: common$messages_pb.AccountInfo) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  updateAccountInfo(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  updateAccountInfo(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  updateAccountInfo(
    request: common$messages_pb.AccountInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/UpdateAccountInfo',
        request,
        metadata || {},
        this.methodInfoUpdateAccountInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/UpdateAccountInfo',
    request,
    metadata || {},
    this.methodInfoUpdateAccountInfo);
  }

  methodInfoBook = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/Book',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Booking,
    auth$only$service_pb.BookResponse,
    (request: common$messages_pb.Booking) => {
      return request.serializeBinary();
    },
    auth$only$service_pb.BookResponse.deserializeBinary
  );

  book(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null): Promise<auth$only$service_pb.BookResponse>;

  book(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.BookResponse) => void): grpcWeb.ClientReadableStream<auth$only$service_pb.BookResponse>;

  book(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.BookResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/Book',
        request,
        metadata || {},
        this.methodInfoBook,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/Book',
    request,
    metadata || {},
    this.methodInfoBook);
  }

  methodInfoGetMyBookings = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/GetMyBookings',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    auth$only$service_pb.GetBookingsResponse,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    auth$only$service_pb.GetBookingsResponse.deserializeBinary
  );

  getMyBookings(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth$only$service_pb.GetBookingsResponse>;

  getMyBookings(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.GetBookingsResponse) => void): grpcWeb.ClientReadableStream<auth$only$service_pb.GetBookingsResponse>;

  getMyBookings(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth$only$service_pb.GetBookingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/GetMyBookings',
        request,
        metadata || {},
        this.methodInfoGetMyBookings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/GetMyBookings',
    request,
    metadata || {},
    this.methodInfoGetMyBookings);
  }

  methodInfoReview = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/Review',
    grpcWeb.MethodType.UNARY,
    auth$only$service_pb.ReviewRequest,
    common$messages_pb.Empty,
    (request: auth$only$service_pb.ReviewRequest) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  review(
    request: auth$only$service_pb.ReviewRequest,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  review(
    request: auth$only$service_pb.ReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  review(
    request: auth$only$service_pb.ReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/Review',
        request,
        metadata || {},
        this.methodInfoReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/Review',
    request,
    metadata || {},
    this.methodInfoReview);
  }

  methodInfoRemoveReview = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/RemoveReview',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.BedId,
    common$messages_pb.Empty,
    (request: common$messages_pb.BedId) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  removeReview(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  removeReview(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  removeReview(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/RemoveReview',
        request,
        metadata || {},
        this.methodInfoRemoveReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/RemoveReview',
    request,
    metadata || {},
    this.methodInfoRemoveReview);
  }

  methodInfoAddBed = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/AddBed',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.BedMutableInfo,
    common$messages_pb.Empty,
    (request: common$messages_pb.BedMutableInfo) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  addBed(
    request: common$messages_pb.BedMutableInfo,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  addBed(
    request: common$messages_pb.BedMutableInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  addBed(
    request: common$messages_pb.BedMutableInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/AddBed',
        request,
        metadata || {},
        this.methodInfoAddBed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/AddBed',
    request,
    metadata || {},
    this.methodInfoAddBed);
  }

  methodInfoModifyMyBed = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/ModifyMyBed',
    grpcWeb.MethodType.UNARY,
    auth$only$service_pb.ModifyBedRequest,
    common$messages_pb.Empty,
    (request: auth$only$service_pb.ModifyBedRequest) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  modifyMyBed(
    request: auth$only$service_pb.ModifyBedRequest,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  modifyMyBed(
    request: auth$only$service_pb.ModifyBedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  modifyMyBed(
    request: auth$only$service_pb.ModifyBedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/ModifyMyBed',
        request,
        metadata || {},
        this.methodInfoModifyMyBed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/ModifyMyBed',
    request,
    metadata || {},
    this.methodInfoModifyMyBed);
  }

  methodInfoRemoveMyBed = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/RemoveMyBed',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.BedId,
    common$messages_pb.Empty,
    (request: common$messages_pb.BedId) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  removeMyBed(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  removeMyBed(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  removeMyBed(
    request: common$messages_pb.BedId,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/RemoveMyBed',
        request,
        metadata || {},
        this.methodInfoRemoveMyBed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/RemoveMyBed',
    request,
    metadata || {},
    this.methodInfoRemoveMyBed);
  }

  methodInfoGetMyBeds = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/GetMyBeds',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Empty,
    common$messages_pb.BedList,
    (request: common$messages_pb.Empty) => {
      return request.serializeBinary();
    },
    common$messages_pb.BedList.deserializeBinary
  );

  getMyBeds(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.BedList>;

  getMyBeds(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.BedList) => void): grpcWeb.ClientReadableStream<common$messages_pb.BedList>;

  getMyBeds(
    request: common$messages_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.BedList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/GetMyBeds',
        request,
        metadata || {},
        this.methodInfoGetMyBeds,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/GetMyBeds',
    request,
    metadata || {},
    this.methodInfoGetMyBeds);
  }

  methodInfoAddBookingAvaiability = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/AddBookingAvaiability',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Booking,
    common$messages_pb.Empty,
    (request: common$messages_pb.Booking) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  addBookingAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  addBookingAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  addBookingAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/AddBookingAvaiability',
        request,
        metadata || {},
        this.methodInfoAddBookingAvaiability,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/AddBookingAvaiability',
    request,
    metadata || {},
    this.methodInfoAddBookingAvaiability);
  }

  methodInfoRemoveBookAvaiability = new grpcWeb.MethodDescriptor(
    '/AuthOnlyService/RemoveBookAvaiability',
    grpcWeb.MethodType.UNARY,
    common$messages_pb.Booking,
    common$messages_pb.Empty,
    (request: common$messages_pb.Booking) => {
      return request.serializeBinary();
    },
    common$messages_pb.Empty.deserializeBinary
  );

  removeBookAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null): Promise<common$messages_pb.Empty>;

  removeBookAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void): grpcWeb.ClientReadableStream<common$messages_pb.Empty>;

  removeBookAvaiability(
    request: common$messages_pb.Booking,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common$messages_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AuthOnlyService/RemoveBookAvaiability',
        request,
        metadata || {},
        this.methodInfoRemoveBookAvaiability,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AuthOnlyService/RemoveBookAvaiability',
    request,
    metadata || {},
    this.methodInfoRemoveBookAvaiability);
  }

}

