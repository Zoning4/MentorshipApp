import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { RotateSecretRequest, RotateSecretResponse } from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface RotateSecretCommandInput extends RotateSecretRequest {}
export interface RotateSecretCommandOutput
  extends RotateSecretResponse,
    __MetadataBearer {}
declare const RotateSecretCommand_base: {
  new (
    input: RotateSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    RotateSecretCommandInput,
    RotateSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RotateSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    RotateSecretCommandInput,
    RotateSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class RotateSecretCommand extends RotateSecretCommand_base {
  protected static __types: {
    api: {
      input: RotateSecretRequest;
      output: RotateSecretResponse;
    };
    sdk: {
      input: RotateSecretCommandInput;
      output: RotateSecretCommandOutput;
    };
  };
}
