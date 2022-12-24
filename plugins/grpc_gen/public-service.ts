// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "public-service.proto" (syntax proto3)
// tslint:disable
import { BedList } from "./common-messages";
import { Empty } from "./common-messages";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Review } from "./common-messages";
import { BedId } from "./common-messages";
import { Features } from "./common-messages";
/**
 * @generated from protobuf message GetNonceResponse
 */
export interface GetNonceResponse {
    /**
     * @generated from protobuf field: string nonce = 1;
     */
    nonce: string; // Not empty}
/**
 * @generated from protobuf message AuthRequest
 */
export interface AuthRequest {
    /**
     * @generated from protobuf field: string address = 1;
     */
    address: string; // Valid format    /**
     * @generated from protobuf field: string nonceSigned = 2;
     */
    nonceSigned: string; // Valid format}
/**
 * @generated from protobuf message AuthResponse
 */
export interface AuthResponse {
    /**
     * @generated from protobuf field: string authToken = 1;
     */
    authToken: string; // Not empty    /**
     * @generated from protobuf field: bool accountDoesNotExist = 2;
     */
    accountDoesNotExist: boolean;
}
/**
 * BedList returned will include only beds which has at least 1 date available in the range [dateRangeLow, dateRangeHigh]
 *
 * @generated from protobuf message GetBedsRequest
 */
export interface GetBedsRequest {
    /**
     * @generated from protobuf field: uint32 dateRangeLow = 1;
     */
    dateRangeLow: number; // 8 digit (base 10) number, for example 30012000 -> 30-01-2000. It's valid    /**
     * @generated from protobuf field: uint32 dateRangeHigh = 2;
     */
    dateRangeHigh: number; // 8 digit (base 10) number, for example 30012000 -> 30-01-2000. It's valid    /**
     * @generated from protobuf field: string place = 3;
     */
    place: string; // length=1-100    /**
     * @generated from protobuf field: Features featuresMondadory = 4;
     */
    featuresMondadory?: Features;
    /**
     * Get first N results in order by proximity from fromIndex to fromIndex+N where N=15.
     *
     * @generated from protobuf field: uint32 fromIndex = 5;
     */
    fromIndex: number;
}
/**
 * @generated from protobuf message GetReviewsRequest
 */
export interface GetReviewsRequest {
    /**
     * @generated from protobuf field: BedId bedId = 1;
     */
    bedId?: BedId;
    /**
     * Get first N results (oder is not specified) from fromIndex to fromIndex+N where N=4.
     *
     * @generated from protobuf field: uint32 fromIndex = 2;
     */
    fromIndex: number;
}
/**
 * @generated from protobuf message GetReviewsResponse
 */
export interface GetReviewsResponse {
    /**
     * @generated from protobuf field: repeated Review reviews = 1;
     */
    reviews: Review[]; // 0-4 reviews. The field comment is mondadory}
// @generated message type with reflection information, may provide speed optimized methods
class GetNonceResponse$Type extends MessageType<GetNonceResponse> {
    constructor() {
        super("GetNonceResponse", [
            { no: 1, name: "nonce", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetNonceResponse>): GetNonceResponse {
        const message = { nonce: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetNonceResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetNonceResponse): GetNonceResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string nonce */ 1:
                    message.nonce = reader.string();
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
    internalBinaryWrite(message: GetNonceResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string nonce = 1; */
        if (message.nonce !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.nonce);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetNonceResponse
 */
export const GetNonceResponse = new GetNonceResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthRequest$Type extends MessageType<AuthRequest> {
    constructor() {
        super("AuthRequest", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "nonceSigned", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AuthRequest>): AuthRequest {
        const message = { address: "", nonceSigned: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthRequest): AuthRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* string nonceSigned */ 2:
                    message.nonceSigned = reader.string();
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
    internalBinaryWrite(message: AuthRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* string nonceSigned = 2; */
        if (message.nonceSigned !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nonceSigned);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AuthRequest
 */
export const AuthRequest = new AuthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthResponse$Type extends MessageType<AuthResponse> {
    constructor() {
        super("AuthResponse", [
            { no: 1, name: "authToken", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "accountDoesNotExist", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<AuthResponse>): AuthResponse {
        const message = { authToken: "", accountDoesNotExist: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthResponse): AuthResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string authToken */ 1:
                    message.authToken = reader.string();
                    break;
                case /* bool accountDoesNotExist */ 2:
                    message.accountDoesNotExist = reader.bool();
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
    internalBinaryWrite(message: AuthResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string authToken = 1; */
        if (message.authToken !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.authToken);
        /* bool accountDoesNotExist = 2; */
        if (message.accountDoesNotExist !== false)
            writer.tag(2, WireType.Varint).bool(message.accountDoesNotExist);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AuthResponse
 */
export const AuthResponse = new AuthResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBedsRequest$Type extends MessageType<GetBedsRequest> {
    constructor() {
        super("GetBedsRequest", [
            { no: 1, name: "dateRangeLow", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "dateRangeHigh", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "place", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "featuresMondadory", kind: "message", T: () => Features },
            { no: 5, name: "fromIndex", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetBedsRequest>): GetBedsRequest {
        const message = { dateRangeLow: 0, dateRangeHigh: 0, place: "", fromIndex: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBedsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBedsRequest): GetBedsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 dateRangeLow */ 1:
                    message.dateRangeLow = reader.uint32();
                    break;
                case /* uint32 dateRangeHigh */ 2:
                    message.dateRangeHigh = reader.uint32();
                    break;
                case /* string place */ 3:
                    message.place = reader.string();
                    break;
                case /* Features featuresMondadory */ 4:
                    message.featuresMondadory = Features.internalBinaryRead(reader, reader.uint32(), options, message.featuresMondadory);
                    break;
                case /* uint32 fromIndex */ 5:
                    message.fromIndex = reader.uint32();
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
    internalBinaryWrite(message: GetBedsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 dateRangeLow = 1; */
        if (message.dateRangeLow !== 0)
            writer.tag(1, WireType.Varint).uint32(message.dateRangeLow);
        /* uint32 dateRangeHigh = 2; */
        if (message.dateRangeHigh !== 0)
            writer.tag(2, WireType.Varint).uint32(message.dateRangeHigh);
        /* string place = 3; */
        if (message.place !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.place);
        /* Features featuresMondadory = 4; */
        if (message.featuresMondadory)
            Features.internalBinaryWrite(message.featuresMondadory, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 fromIndex = 5; */
        if (message.fromIndex !== 0)
            writer.tag(5, WireType.Varint).uint32(message.fromIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBedsRequest
 */
export const GetBedsRequest = new GetBedsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReviewsRequest$Type extends MessageType<GetReviewsRequest> {
    constructor() {
        super("GetReviewsRequest", [
            { no: 1, name: "bedId", kind: "message", T: () => BedId },
            { no: 2, name: "fromIndex", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetReviewsRequest>): GetReviewsRequest {
        const message = { fromIndex: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetReviewsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetReviewsRequest): GetReviewsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* BedId bedId */ 1:
                    message.bedId = BedId.internalBinaryRead(reader, reader.uint32(), options, message.bedId);
                    break;
                case /* uint32 fromIndex */ 2:
                    message.fromIndex = reader.uint32();
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
    internalBinaryWrite(message: GetReviewsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* BedId bedId = 1; */
        if (message.bedId)
            BedId.internalBinaryWrite(message.bedId, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 fromIndex = 2; */
        if (message.fromIndex !== 0)
            writer.tag(2, WireType.Varint).uint32(message.fromIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetReviewsRequest
 */
export const GetReviewsRequest = new GetReviewsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReviewsResponse$Type extends MessageType<GetReviewsResponse> {
    constructor() {
        super("GetReviewsResponse", [
            { no: 1, name: "reviews", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Review }
        ]);
    }
    create(value?: PartialMessage<GetReviewsResponse>): GetReviewsResponse {
        const message = { reviews: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetReviewsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetReviewsResponse): GetReviewsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Review reviews */ 1:
                    message.reviews.push(Review.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetReviewsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Review reviews = 1; */
        for (let i = 0; i < message.reviews.length; i++)
            Review.internalBinaryWrite(message.reviews[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetReviewsResponse
 */
export const GetReviewsResponse = new GetReviewsResponse$Type();
/**
 * @generated ServiceType for protobuf service PublicService
 */
export const PublicService = new ServiceType("PublicService", [
    { name: "GetNonce", options: {}, I: Empty, O: GetNonceResponse },
    { name: "Auth", options: {}, I: AuthRequest, O: AuthResponse },
    { name: "GetBeds", options: {}, I: GetBedsRequest, O: BedList },
    { name: "GetReview", options: {}, I: GetReviewsRequest, O: GetReviewsResponse }
]);
