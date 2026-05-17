import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { DeleteSecretRequest, DeleteSecretResponse } from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface DeleteSecretCommandInput extends DeleteSecretRequest {}
export interface DeleteSecretCommandOutput
  extends DeleteSecretResponse,
    __MetadataBearer {}
declare const DeleteSecretCommand_base: {
  new (
    input: DeleteSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteSecretCommandInput,
    DeleteSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteSecretCommandInput,
    DeleteSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteSecretCommand extends DeleteSecretCommand_base {
  protected static __types: {
    api: {
      input: DeleteSecretRequest;
      output: DeleteSecretResponse;
    };
    sdk: {
      input: DeleteSecretCommandInput;
      output: DeleteSecretCommandOutput;
    };
  };
}
