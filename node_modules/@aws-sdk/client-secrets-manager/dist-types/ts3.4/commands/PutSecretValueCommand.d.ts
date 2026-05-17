import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  PutSecretValueRequest,
  PutSecretValueResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface PutSecretValueCommandInput extends PutSecretValueRequest {}
export interface PutSecretValueCommandOutput
  extends PutSecretValueResponse,
    __MetadataBearer {}
declare const PutSecretValueCommand_base: {
  new (
    input: PutSecretValueCommandInput
  ): import("@smithy/core/client").CommandImpl<
    PutSecretValueCommandInput,
    PutSecretValueCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: PutSecretValueCommandInput
  ): import("@smithy/core/client").CommandImpl<
    PutSecretValueCommandInput,
    PutSecretValueCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class PutSecretValueCommand extends PutSecretValueCommand_base {
  protected static __types: {
    api: {
      input: PutSecretValueRequest;
      output: PutSecretValueResponse;
    };
    sdk: {
      input: PutSecretValueCommandInput;
      output: PutSecretValueCommandOutput;
    };
  };
}
