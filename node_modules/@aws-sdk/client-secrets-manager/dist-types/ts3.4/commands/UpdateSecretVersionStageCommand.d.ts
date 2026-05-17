import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  UpdateSecretVersionStageRequest,
  UpdateSecretVersionStageResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface UpdateSecretVersionStageCommandInput
  extends UpdateSecretVersionStageRequest {}
export interface UpdateSecretVersionStageCommandOutput
  extends UpdateSecretVersionStageResponse,
    __MetadataBearer {}
declare const UpdateSecretVersionStageCommand_base: {
  new (
    input: UpdateSecretVersionStageCommandInput
  ): import("@smithy/core/client").CommandImpl<
    UpdateSecretVersionStageCommandInput,
    UpdateSecretVersionStageCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateSecretVersionStageCommandInput
  ): import("@smithy/core/client").CommandImpl<
    UpdateSecretVersionStageCommandInput,
    UpdateSecretVersionStageCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class UpdateSecretVersionStageCommand extends UpdateSecretVersionStageCommand_base {
  protected static __types: {
    api: {
      input: UpdateSecretVersionStageRequest;
      output: UpdateSecretVersionStageResponse;
    };
    sdk: {
      input: UpdateSecretVersionStageCommandInput;
      output: UpdateSecretVersionStageCommandOutput;
    };
  };
}
