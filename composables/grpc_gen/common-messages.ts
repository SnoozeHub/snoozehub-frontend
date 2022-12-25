// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "common-messages.proto" (syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message AccountInfo
 */
export interface AccountInfo {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // length=1-40
    /**
     * @generated from protobuf field: string surname = 2;
     */
    surname: string; // length=1-40
    /**
     * @generated from protobuf field: string mail = 3;
     */
    mail: string; // Is a valid mail format, max length=60
    /**
     * @generated from protobuf field: string telegramUsername = 4;
     */
    telegramUsername: string; // Valid format, without '@'
}
/**
 * @generated from protobuf message ProfilePic
 */
export interface ProfilePic {
    /**
     * @generated from protobuf field: optional bytes image = 1;
     */
    image?: Uint8Array; // Valid AVIF image, max size = 512kb
}
/**
 * @generated from protobuf message Features
 */
export interface Features {
    /**
     * @generated from protobuf field: bool internetConnection = 1;
     */
    internetConnection: boolean;
    /**
     * @generated from protobuf field: bool bathroom = 2;
     */
    bathroom: boolean;
    /**
     * @generated from protobuf field: bool heating = 3;
     */
    heating: boolean;
    /**
     * @generated from protobuf field: bool airConditioner = 4;
     */
    airConditioner: boolean;
    /**
     * @generated from protobuf field: bool electricalOutlet = 5;
     */
    electricalOutlet: boolean;
    /**
     * @generated from protobuf field: bool tap = 6;
     */
    tap: boolean;
    /**
     * @generated from protobuf field: bool bedLinens = 7;
     */
    bedLinens: boolean;
    /**
     * @generated from protobuf field: bool pillows = 8;
     */
    pillows: boolean;
}
/**
 * @generated from protobuf message Booking
 */
export interface Booking {
    /**
     * @generated from protobuf field: BedId bedId = 1;
     */
    bedId?: BedId;
    /**
     * @generated from protobuf field: uint32 date = 2;
     */
    date: number; // Refers to the night between the date and the next day, 8 digit (base 10) number, for example 30012000 -> 30-01-2000.
}
/**
 * @generated from protobuf message BedMutableInfo
 */
export interface BedMutableInfo {
    /**
     * @generated from protobuf field: string place = 1;
     */
    place: string; // length=1-100
    /**
     * @generated from protobuf field: repeated bytes images = 2;
     */
    images: Uint8Array[]; // Valid 1-5 AVIF images, max size = 512kb
    /**
     * @generated from protobuf field: optional string description = 5;
     */
    description?: string; // Not empty (trimmed)
    /**
     * @generated from protobuf field: Features features = 3;
     */
    features?: Features;
    /**
     * @generated from protobuf field: uint32 minimumDaysNotice = 4;
     */
    minimumDaysNotice: number; //  min = 1, max = 30
}
/**
 * @generated from protobuf message BedList
 */
export interface BedList {
    /**
     * @generated from protobuf field: repeated BedList.Bed beds = 1;
     */
    beds: BedList_Bed[];
}
/**
 * @generated from protobuf message BedList.Bed
 */
export interface BedList_Bed {
    /**
     * @generated from protobuf field: BedId id = 1;
     */
    id?: BedId;
    /**
     * @generated from protobuf field: optional BedMutableInfo bedMutableInfo = 2;
     */
    bedMutableInfo?: BedMutableInfo;
    /**
     * @generated from protobuf field: repeated uint32 dateAvailables = 3;
     */
    dateAvailables: number[]; // 0-90 .  Refers to the night between the date and the next day, 8 digit (base 10) number, for example 30012000 -> 30-01-2000. It's valid
    /**
     * @generated from protobuf field: uint32 reviewCount = 4;
     */
    reviewCount: number;
    /**
     * @generated from protobuf field: optional uint32 averageEvaluation = 5;
     */
    averageEvaluation?: number; // min = 0, max = 50. For example 42 is evaluated as 4.2. Not set if and only if reviewCount is 0
}
/**
 * @generated from protobuf message BedId
 */
export interface BedId {
    /**
     * @generated from protobuf field: string bedId = 1;
     */
    bedId: string; // Not empty. Is valid (exist)
}
/**
 * @generated from protobuf message Review
 */
export interface Review {
    /**
     * @generated from protobuf field: uint32 evaluation = 1;
     */
    evaluation: number; // min = 0, max = 50. For example 42 is evaluated as 4.2
    /**
     * @generated from protobuf field: optional string comment = 2;
     */
    comment?: string; // length=1-200
}
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccountInfo$Type extends MessageType<AccountInfo> {
    constructor() {
        super("AccountInfo", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "surname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "mail", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "telegramUsername", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AccountInfo>): AccountInfo {
        const message = { name: "", surname: "", mail: "", telegramUsername: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AccountInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccountInfo): AccountInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string surname */ 2:
                    message.surname = reader.string();
                    break;
                case /* string mail */ 3:
                    message.mail = reader.string();
                    break;
                case /* string telegramUsername */ 4:
                    message.telegramUsername = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AccountInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string surname = 2; */
        if (message.surname !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.surname);
        /* string mail = 3; */
        if (message.mail !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.mail);
        /* string telegramUsername = 4; */
        if (message.telegramUsername !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.telegramUsername);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AccountInfo
 */
export const AccountInfo = new AccountInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ProfilePic$Type extends MessageType<ProfilePic> {
    constructor() {
        super("ProfilePic", [
            { no: 1, name: "image", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<ProfilePic>): ProfilePic {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ProfilePic>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ProfilePic): ProfilePic {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bytes image */ 1:
                    message.image = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ProfilePic, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bytes image = 1; */
        if (message.image !== undefined)
            writer.tag(1, WireType.LengthDelimited).bytes(message.image);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ProfilePic
 */
export const ProfilePic = new ProfilePic$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Features$Type extends MessageType<Features> {
    constructor() {
        super("Features", [
            { no: 1, name: "internetConnection", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "bathroom", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "heating", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "airConditioner", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "electricalOutlet", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "tap", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "bedLinens", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "pillows", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Features>): Features {
        const message = { internetConnection: false, bathroom: false, heating: false, airConditioner: false, electricalOutlet: false, tap: false, bedLinens: false, pillows: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Features>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Features): Features {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool internetConnection */ 1:
                    message.internetConnection = reader.bool();
                    break;
                case /* bool bathroom */ 2:
                    message.bathroom = reader.bool();
                    break;
                case /* bool heating */ 3:
                    message.heating = reader.bool();
                    break;
                case /* bool airConditioner */ 4:
                    message.airConditioner = reader.bool();
                    break;
                case /* bool electricalOutlet */ 5:
                    message.electricalOutlet = reader.bool();
                    break;
                case /* bool tap */ 6:
                    message.tap = reader.bool();
                    break;
                case /* bool bedLinens */ 7:
                    message.bedLinens = reader.bool();
                    break;
                case /* bool pillows */ 8:
                    message.pillows = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Features, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool internetConnection = 1; */
        if (message.internetConnection !== false)
            writer.tag(1, WireType.Varint).bool(message.internetConnection);
        /* bool bathroom = 2; */
        if (message.bathroom !== false)
            writer.tag(2, WireType.Varint).bool(message.bathroom);
        /* bool heating = 3; */
        if (message.heating !== false)
            writer.tag(3, WireType.Varint).bool(message.heating);
        /* bool airConditioner = 4; */
        if (message.airConditioner !== false)
            writer.tag(4, WireType.Varint).bool(message.airConditioner);
        /* bool electricalOutlet = 5; */
        if (message.electricalOutlet !== false)
            writer.tag(5, WireType.Varint).bool(message.electricalOutlet);
        /* bool tap = 6; */
        if (message.tap !== false)
            writer.tag(6, WireType.Varint).bool(message.tap);
        /* bool bedLinens = 7; */
        if (message.bedLinens !== false)
            writer.tag(7, WireType.Varint).bool(message.bedLinens);
        /* bool pillows = 8; */
        if (message.pillows !== false)
            writer.tag(8, WireType.Varint).bool(message.pillows);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Features
 */
export const Features = new Features$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Booking$Type extends MessageType<Booking> {
    constructor() {
        super("Booking", [
            { no: 1, name: "bedId", kind: "message", T: () => BedId },
            { no: 2, name: "date", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<Booking>): Booking {
        const message = { date: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Booking>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Booking): Booking {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BedId bedId */ 1:
                    message.bedId = BedId.internalBinaryRead(reader, reader.uint32(), options, message.bedId);
                    break;
                case /* uint32 date */ 2:
                    message.date = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Booking, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* BedId bedId = 1; */
        if (message.bedId)
            BedId.internalBinaryWrite(message.bedId, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 date = 2; */
        if (message.date !== 0)
            writer.tag(2, WireType.Varint).uint32(message.date);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Booking
 */
export const Booking = new Booking$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BedMutableInfo$Type extends MessageType<BedMutableInfo> {
    constructor() {
        super("BedMutableInfo", [
            { no: 1, name: "place", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "images", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ },
            { no: 5, name: "description", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "features", kind: "message", T: () => Features },
            { no: 4, name: "minimumDaysNotice", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BedMutableInfo>): BedMutableInfo {
        const message = { place: "", images: [], minimumDaysNotice: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BedMutableInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BedMutableInfo): BedMutableInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string place */ 1:
                    message.place = reader.string();
                    break;
                case /* repeated bytes images */ 2:
                    message.images.push(reader.bytes());
                    break;
                case /* optional string description */ 5:
                    message.description = reader.string();
                    break;
                case /* Features features */ 3:
                    message.features = Features.internalBinaryRead(reader, reader.uint32(), options, message.features);
                    break;
                case /* uint32 minimumDaysNotice */ 4:
                    message.minimumDaysNotice = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BedMutableInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string place = 1; */
        if (message.place !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.place);
        /* repeated bytes images = 2; */
        for (let i = 0; i < message.images.length; i++)
            writer.tag(2, WireType.LengthDelimited).bytes(message.images[i]);
        /* optional string description = 5; */
        if (message.description !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.description);
        /* Features features = 3; */
        if (message.features)
            Features.internalBinaryWrite(message.features, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 minimumDaysNotice = 4; */
        if (message.minimumDaysNotice !== 0)
            writer.tag(4, WireType.Varint).uint32(message.minimumDaysNotice);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BedMutableInfo
 */
export const BedMutableInfo = new BedMutableInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BedList$Type extends MessageType<BedList> {
    constructor() {
        super("BedList", [
            { no: 1, name: "beds", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BedList_Bed }
        ]);
    }
    create(value?: PartialMessage<BedList>): BedList {
        const message = { beds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BedList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BedList): BedList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated BedList.Bed beds */ 1:
                    message.beds.push(BedList_Bed.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BedList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated BedList.Bed beds = 1; */
        for (let i = 0; i < message.beds.length; i++)
            BedList_Bed.internalBinaryWrite(message.beds[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BedList
 */
export const BedList = new BedList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BedList_Bed$Type extends MessageType<BedList_Bed> {
    constructor() {
        super("BedList.Bed", [
            { no: 1, name: "id", kind: "message", T: () => BedId },
            { no: 2, name: "bedMutableInfo", kind: "message", T: () => BedMutableInfo },
            { no: 3, name: "dateAvailables", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reviewCount", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "averageEvaluation", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BedList_Bed>): BedList_Bed {
        const message = { dateAvailables: [], reviewCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BedList_Bed>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BedList_Bed): BedList_Bed {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BedId id */ 1:
                    message.id = BedId.internalBinaryRead(reader, reader.uint32(), options, message.id);
                    break;
                case /* optional BedMutableInfo bedMutableInfo */ 2:
                    message.bedMutableInfo = BedMutableInfo.internalBinaryRead(reader, reader.uint32(), options, message.bedMutableInfo);
                    break;
                case /* repeated uint32 dateAvailables */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.dateAvailables.push(reader.uint32());
                    else
                        message.dateAvailables.push(reader.uint32());
                    break;
                case /* uint32 reviewCount */ 4:
                    message.reviewCount = reader.uint32();
                    break;
                case /* optional uint32 averageEvaluation */ 5:
                    message.averageEvaluation = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BedList_Bed, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* BedId id = 1; */
        if (message.id)
            BedId.internalBinaryWrite(message.id, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional BedMutableInfo bedMutableInfo = 2; */
        if (message.bedMutableInfo)
            BedMutableInfo.internalBinaryWrite(message.bedMutableInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 dateAvailables = 3; */
        if (message.dateAvailables.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.dateAvailables.length; i++)
                writer.uint32(message.dateAvailables[i]);
            writer.join();
        }
        /* uint32 reviewCount = 4; */
        if (message.reviewCount !== 0)
            writer.tag(4, WireType.Varint).uint32(message.reviewCount);
        /* optional uint32 averageEvaluation = 5; */
        if (message.averageEvaluation !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.averageEvaluation);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BedList.Bed
 */
export const BedList_Bed = new BedList_Bed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BedId$Type extends MessageType<BedId> {
    constructor() {
        super("BedId", [
            { no: 1, name: "bedId", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<BedId>): BedId {
        const message = { bedId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BedId>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BedId): BedId {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string bedId */ 1:
                    message.bedId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BedId, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string bedId = 1; */
        if (message.bedId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.bedId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BedId
 */
export const BedId = new BedId$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Review$Type extends MessageType<Review> {
    constructor() {
        super("Review", [
            { no: 1, name: "evaluation", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "comment", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Review>): Review {
        const message = { evaluation: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Review>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Review): Review {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 evaluation */ 1:
                    message.evaluation = reader.uint32();
                    break;
                case /* optional string comment */ 2:
                    message.comment = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Review, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 evaluation = 1; */
        if (message.evaluation !== 0)
            writer.tag(1, WireType.Varint).uint32(message.evaluation);
        /* optional string comment = 2; */
        if (message.comment !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.comment);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Review
 */
export const Review = new Review$Type();
