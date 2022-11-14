import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class AccountInfo extends jspb.Message {
  getName(): string;
  setName(value: string): AccountInfo;

  getSurname(): string;
  setSurname(value: string): AccountInfo;

  getMail(): string;
  setMail(value: string): AccountInfo;

  getTelegramusername(): string;
  setTelegramusername(value: string): AccountInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
  static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfo;
  static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
}

export namespace AccountInfo {
  export type AsObject = {
    name: string,
    surname: string,
    mail: string,
    telegramusername: string,
  }
}

export class ProfilePic extends jspb.Message {
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): ProfilePic;

  getImageCase(): ProfilePic.ImageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfilePic.AsObject;
  static toObject(includeInstance: boolean, msg: ProfilePic): ProfilePic.AsObject;
  static serializeBinaryToWriter(message: ProfilePic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfilePic;
  static deserializeBinaryFromReader(message: ProfilePic, reader: jspb.BinaryReader): ProfilePic;
}

export namespace ProfilePic {
  export type AsObject = {
    image: Uint8Array | string,
  }

  export enum ImageCase { 
    _IMAGE_NOT_SET = 0,
    IMAGE = 1,
  }
}

export class Features extends jspb.Message {
  getInternetconnection(): boolean;
  setInternetconnection(value: boolean): Features;

  getBathroom(): boolean;
  setBathroom(value: boolean): Features;

  getHeating(): boolean;
  setHeating(value: boolean): Features;

  getAirconditioner(): boolean;
  setAirconditioner(value: boolean): Features;

  getElectricaloutlet(): boolean;
  setElectricaloutlet(value: boolean): Features;

  getTap(): boolean;
  setTap(value: boolean): Features;

  getBedlinens(): boolean;
  setBedlinens(value: boolean): Features;

  getPillows(): boolean;
  setPillows(value: boolean): Features;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Features.AsObject;
  static toObject(includeInstance: boolean, msg: Features): Features.AsObject;
  static serializeBinaryToWriter(message: Features, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Features;
  static deserializeBinaryFromReader(message: Features, reader: jspb.BinaryReader): Features;
}

export namespace Features {
  export type AsObject = {
    internetconnection: boolean,
    bathroom: boolean,
    heating: boolean,
    airconditioner: boolean,
    electricaloutlet: boolean,
    tap: boolean,
    bedlinens: boolean,
    pillows: boolean,
  }
}

export class Booking extends jspb.Message {
  getBedid(): BedId | undefined;
  setBedid(value?: BedId): Booking;
  hasBedid(): boolean;
  clearBedid(): Booking;

  getDate(): number;
  setDate(value: number): Booking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Booking.AsObject;
  static toObject(includeInstance: boolean, msg: Booking): Booking.AsObject;
  static serializeBinaryToWriter(message: Booking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Booking;
  static deserializeBinaryFromReader(message: Booking, reader: jspb.BinaryReader): Booking;
}

export namespace Booking {
  export type AsObject = {
    bedid?: BedId.AsObject,
    date: number,
  }
}

export class BedMutableInfo extends jspb.Message {
  getPlace(): string;
  setPlace(value: string): BedMutableInfo;

  getImagesList(): Array<Uint8Array | string>;
  setImagesList(value: Array<Uint8Array | string>): BedMutableInfo;
  clearImagesList(): BedMutableInfo;
  addImages(value: Uint8Array | string, index?: number): BedMutableInfo;

  getDescription(): string;
  setDescription(value: string): BedMutableInfo;

  getFeatures(): Features | undefined;
  setFeatures(value?: Features): BedMutableInfo;
  hasFeatures(): boolean;
  clearFeatures(): BedMutableInfo;

  getMinimumdaysnotice(): number;
  setMinimumdaysnotice(value: number): BedMutableInfo;

  getDescriptionCase(): BedMutableInfo.DescriptionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BedMutableInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BedMutableInfo): BedMutableInfo.AsObject;
  static serializeBinaryToWriter(message: BedMutableInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BedMutableInfo;
  static deserializeBinaryFromReader(message: BedMutableInfo, reader: jspb.BinaryReader): BedMutableInfo;
}

export namespace BedMutableInfo {
  export type AsObject = {
    place: string,
    imagesList: Array<Uint8Array | string>,
    description: string,
    features?: Features.AsObject,
    minimumdaysnotice: number,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 5,
  }
}

export class BedList extends jspb.Message {
  getBedsList(): Array<BedList.Bed>;
  setBedsList(value: Array<BedList.Bed>): BedList;
  clearBedsList(): BedList;
  addBeds(value?: BedList.Bed, index?: number): BedList.Bed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BedList.AsObject;
  static toObject(includeInstance: boolean, msg: BedList): BedList.AsObject;
  static serializeBinaryToWriter(message: BedList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BedList;
  static deserializeBinaryFromReader(message: BedList, reader: jspb.BinaryReader): BedList;
}

export namespace BedList {
  export type AsObject = {
    bedsList: Array<BedList.Bed.AsObject>,
  }

  export class Bed extends jspb.Message {
    getId(): BedId | undefined;
    setId(value?: BedId): Bed;
    hasId(): boolean;
    clearId(): Bed;

    getBedmutableinfo(): BedMutableInfo | undefined;
    setBedmutableinfo(value?: BedMutableInfo): Bed;
    hasBedmutableinfo(): boolean;
    clearBedmutableinfo(): Bed;

    getDateavailablesList(): Array<number>;
    setDateavailablesList(value: Array<number>): Bed;
    clearDateavailablesList(): Bed;
    addDateavailables(value: number, index?: number): Bed;

    getReviewcount(): number;
    setReviewcount(value: number): Bed;

    getAverageevaluation(): number;
    setAverageevaluation(value: number): Bed;

    getBedmutableinfoCase(): Bed.BedmutableinfoCase;

    getAverageevaluationCase(): Bed.AverageevaluationCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bed.AsObject;
    static toObject(includeInstance: boolean, msg: Bed): Bed.AsObject;
    static serializeBinaryToWriter(message: Bed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bed;
    static deserializeBinaryFromReader(message: Bed, reader: jspb.BinaryReader): Bed;
  }

  export namespace Bed {
    export type AsObject = {
      id?: BedId.AsObject,
      bedmutableinfo?: BedMutableInfo.AsObject,
      dateavailablesList: Array<number>,
      reviewcount: number,
      averageevaluation: number,
    }

    export enum BedmutableinfoCase { 
      _BEDMUTABLEINFO_NOT_SET = 0,
      BEDMUTABLEINFO = 2,
    }

    export enum AverageevaluationCase { 
      _AVERAGEEVALUATION_NOT_SET = 0,
      AVERAGEEVALUATION = 5,
    }
  }

}

export class BedId extends jspb.Message {
  getBedid(): string;
  setBedid(value: string): BedId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BedId.AsObject;
  static toObject(includeInstance: boolean, msg: BedId): BedId.AsObject;
  static serializeBinaryToWriter(message: BedId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BedId;
  static deserializeBinaryFromReader(message: BedId, reader: jspb.BinaryReader): BedId;
}

export namespace BedId {
  export type AsObject = {
    bedid: string,
  }
}

export class Review extends jspb.Message {
  getEvaluation(): number;
  setEvaluation(value: number): Review;

  getComment(): string;
  setComment(value: string): Review;

  getCommentCase(): Review.CommentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    evaluation: number,
    comment: string,
  }

  export enum CommentCase { 
    _COMMENT_NOT_SET = 0,
    COMMENT = 2,
  }
}

