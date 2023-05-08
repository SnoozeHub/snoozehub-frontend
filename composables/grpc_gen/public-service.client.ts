// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "public-service.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PublicService } from "./public-service";
import type { GetReviewsResponse } from "./public-service";
import type { GetReviewsRequest } from "./public-service";
import type { BedList } from "./common-messages";
import type { GetBedsRequest } from "./public-service";
import type { AuthResponse } from "./public-service";
import type { AuthRequest } from "./public-service";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetNonceResponse } from "./public-service";
import type { Empty } from "./common-messages";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service PublicService
 */
export interface IPublicServiceClient {
    /**
     * Authentication
     *
     * @generated from protobuf rpc: GetNonce(Empty) returns (GetNonceResponse);
     */
    getNonce(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetNonceResponse>;
    /**
     * @generated from protobuf rpc: Auth(AuthRequest) returns (AuthResponse);
     */
    auth(input: AuthRequest, options?: RpcOptions): UnaryCall<AuthRequest, AuthResponse>;
    /**
     * Every bed returned has the field bedMutableInfo mandatory
     *
     * @generated from protobuf rpc: GetBeds(GetBedsRequest) returns (BedList);
     */
    getBeds(input: GetBedsRequest, options?: RpcOptions): UnaryCall<GetBedsRequest, BedList>;
    /**
     * @generated from protobuf rpc: GetReview(GetReviewsRequest) returns (GetReviewsResponse);
     */
    getReview(input: GetReviewsRequest, options?: RpcOptions): UnaryCall<GetReviewsRequest, GetReviewsResponse>;
}
/**
 * @generated from protobuf service PublicService
 */
export class PublicServiceClient implements IPublicServiceClient, ServiceInfo {
    typeName = PublicService.typeName;
    methods = PublicService.methods;
    options = PublicService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Authentication
     *
     * @generated from protobuf rpc: GetNonce(Empty) returns (GetNonceResponse);
     */
    getNonce(input: Empty, options?: RpcOptions): UnaryCall<Empty, GetNonceResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, GetNonceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Auth(AuthRequest) returns (AuthResponse);
     */
    auth(input: AuthRequest, options?: RpcOptions): UnaryCall<AuthRequest, AuthResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<AuthRequest, AuthResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Every bed returned has the field bedMutableInfo mandatory
     *
     * @generated from protobuf rpc: GetBeds(GetBedsRequest) returns (BedList);
     */
    getBeds(input: GetBedsRequest, options?: RpcOptions): UnaryCall<GetBedsRequest, BedList> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetBedsRequest, BedList>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetReview(GetReviewsRequest) returns (GetReviewsResponse);
     */
    getReview(input: GetReviewsRequest, options?: RpcOptions): UnaryCall<GetReviewsRequest, GetReviewsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetReviewsRequest, GetReviewsResponse>("unary", this._transport, method, opt, input);
    }
}
