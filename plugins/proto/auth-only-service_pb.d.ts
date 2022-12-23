import * as jspb from 'google-protobuf'

import * as common$messages_pb from './common-messages_pb';


export class VerifyMailRequest extends jspb.Message {
  getVerificationcode(): string;
  setVerificationcode(value: string): VerifyMailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMailRequest): VerifyMailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyMailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMailRequest;
  static deserializeBinaryFromReader(message: VerifyMailRequest, reader: jspb.BinaryReader): VerifyMailRequest;
}

export namespace VerifyMailRequest {
  export type AsObject = {
    verificationcode: string,
  }
}

export class VerifyMailResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): VerifyMailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyMailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyMailResponse): VerifyMailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyMailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyMailResponse;
  static deserializeBinaryFromReader(message: VerifyMailResponse, reader: jspb.BinaryReader): VerifyMailResponse;
}

export namespace VerifyMailResponse {
  export type AsObject = {
    ok: boolean,
  }
}

export class BookResponse extends jspb.Message {
  getIsbookingunlocked(): boolean;
  setIsbookingunlocked(value: boolean): BookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BookResponse): BookResponse.AsObject;
  static serializeBinaryToWriter(message: BookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookResponse;
  static deserializeBinaryFromReader(message: BookResponse, reader: jspb.BinaryReader): BookResponse;
}

export namespace BookResponse {
  export type AsObject = {
    isbookingunlocked: boolean,
  }
}

export class GetBookingsResponse extends jspb.Message {
  getBookList(): Array<common$messages_pb.Booking>;
  setBookList(value: Array<common$messages_pb.Booking>): GetBookingsResponse;
  clearBookList(): GetBookingsResponse;
  addBook(value?: common$messages_pb.Booking, index?: number): common$messages_pb.Booking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookingsResponse): GetBookingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBookingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookingsResponse;
  static deserializeBinaryFromReader(message: GetBookingsResponse, reader: jspb.BinaryReader): GetBookingsResponse;
}

export namespace GetBookingsResponse {
  export type AsObject = {
    bookList: Array<common$messages_pb.Booking.AsObject>,
  }
}

export class ModifyBedRequest extends jspb.Message {
  getBedid(): common$messages_pb.BedId | undefined;
  setBedid(value?: common$messages_pb.BedId): ModifyBedRequest;
  hasBedid(): boolean;
  clearBedid(): ModifyBedRequest;

  getBedmutableinfo(): common$messages_pb.BedMutableInfo | undefined;
  setBedmutableinfo(value?: common$messages_pb.BedMutableInfo): ModifyBedRequest;
  hasBedmutableinfo(): boolean;
  clearBedmutableinfo(): ModifyBedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyBedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyBedRequest): ModifyBedRequest.AsObject;
  static serializeBinaryToWriter(message: ModifyBedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyBedRequest;
  static deserializeBinaryFromReader(message: ModifyBedRequest, reader: jspb.BinaryReader): ModifyBedRequest;
}

export namespace ModifyBedRequest {
  export type AsObject = {
    bedid?: common$messages_pb.BedId.AsObject,
    bedmutableinfo?: common$messages_pb.BedMutableInfo.AsObject,
  }
}

export class ReviewRequest extends jspb.Message {
  getBedid(): common$messages_pb.BedId | undefined;
  setBedid(value?: common$messages_pb.BedId): ReviewRequest;
  hasBedid(): boolean;
  clearBedid(): ReviewRequest;

  getReview(): common$messages_pb.Review | undefined;
  setReview(value?: common$messages_pb.Review): ReviewRequest;
  hasReview(): boolean;
  clearReview(): ReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewRequest): ReviewRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewRequest;
  static deserializeBinaryFromReader(message: ReviewRequest, reader: jspb.BinaryReader): ReviewRequest;
}

export namespace ReviewRequest {
  export type AsObject = {
    bedid?: common$messages_pb.BedId.AsObject,
    review?: common$messages_pb.Review.AsObject,
  }
}

