import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ValidateResourcePolicyRequest,
  ValidateResourcePolicyResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface ValidateResourcePolicyCommandInput
  extends ValidateResourcePolicyRequest {}
export interface ValidateResourcePolicyCommandOutput
  extends ValidateResourcePolicyResponse,
    __MetadataBearer {}
declare const ValidateResourcePolicyCommand_base: {
  new (
    input: ValidateResourcePolicyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    ValidateResourcePolicyCommandInput,
    ValidateResourcePolicyCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ValidateResourcePolicyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    ValidateResourcePolicyCommandInput,
    ValidateResourcePolicyCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class ValidateResourcePolicyCommand extends ValidateResourcePolicyCommand_base {
  protected static __types: {
    api: {
      input: ValidateResourcePolicyRequest;
      output: ValidateResourcePolicyResponse;
    };
    sdk: {
      input: ValidateResourcePolicyCommandInput;
      output: ValidateResourcePolicyCommandOutput;
    };
  };
}
