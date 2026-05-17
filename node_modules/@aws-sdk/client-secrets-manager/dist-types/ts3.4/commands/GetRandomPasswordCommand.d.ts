import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetRandomPasswordRequest,
  GetRandomPasswordResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface GetRandomPasswordCommandInput
  extends GetRandomPasswordRequest {}
export interface GetRandomPasswordCommandOutput
  extends GetRandomPasswordResponse,
    __MetadataBearer {}
declare const GetRandomPasswordCommand_base: {
  new (
    input: GetRandomPasswordCommandInput
  ): import("@smithy/core/client").CommandImpl<
    GetRandomPasswordCommandInput,
    GetRandomPasswordCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetRandomPasswordCommandInput]
  ): import("@smithy/core/client").CommandImpl<
    GetRandomPasswordCommandInput,
    GetRandomPasswordCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class GetRandomPasswordCommand extends GetRandomPasswordCommand_base {
  protected static __types: {
    api: {
      input: GetRandomPasswordRequest;
      output: GetRandomPasswordResponse;
    };
    sdk: {
      input: GetRandomPasswordCommandInput;
      output: GetRandomPasswordCommandOutput;
    };
  };
}
