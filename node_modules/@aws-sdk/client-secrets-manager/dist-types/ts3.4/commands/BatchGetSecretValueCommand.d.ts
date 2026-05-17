import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  BatchGetSecretValueRequest,
  BatchGetSecretValueResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface BatchGetSecretValueCommandInput
  extends BatchGetSecretValueRequest {}
export interface BatchGetSecretValueCommandOutput
  extends BatchGetSecretValueResponse,
    __MetadataBearer {}
declare const BatchGetSecretValueCommand_base: {
  new (
    input: BatchGetSecretValueCommandInput
  ): import("@smithy/core/client").CommandImpl<
    BatchGetSecretValueCommandInput,
    BatchGetSecretValueCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [BatchGetSecretValueCommandInput]
  ): import("@smithy/core/client").CommandImpl<
    BatchGetSecretValueCommandInput,
    BatchGetSecretValueCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class BatchGetSecretValueCommand extends BatchGetSecretValueCommand_base {
  protected static __types: {
    api: {
      input: BatchGetSecretValueRequest;
      output: BatchGetSecretValueResponse;
    };
    sdk: {
      input: BatchGetSecretValueCommandInput;
      output: BatchGetSecretValueCommandOutput;
    };
  };
}
