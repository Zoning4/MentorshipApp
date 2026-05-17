import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface GetResourcePolicyCommandInput
  extends GetResourcePolicyRequest {}
export interface GetResourcePolicyCommandOutput
  extends GetResourcePolicyResponse,
    __MetadataBearer {}
declare const GetResourcePolicyCommand_base: {
  new (
    input: GetResourcePolicyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    GetResourcePolicyCommandInput,
    GetResourcePolicyCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetResourcePolicyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    GetResourcePolicyCommandInput,
    GetResourcePolicyCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class GetResourcePolicyCommand extends GetResourcePolicyCommand_base {
  protected static __types: {
    api: {
      input: GetResourcePolicyRequest;
      output: GetResourcePolicyResponse;
    };
    sdk: {
      input: GetResourcePolicyCommandInput;
      output: GetResourcePolicyCommandOutput;
    };
  };
}
