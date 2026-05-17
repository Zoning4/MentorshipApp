import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { DeleteFunctionCodeSigningConfigRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteFunctionCodeSigningConfigCommandInput
  extends DeleteFunctionCodeSigningConfigRequest {}
export interface DeleteFunctionCodeSigningConfigCommandOutput
  extends __MetadataBearer {}
declare const DeleteFunctionCodeSigningConfigCommand_base: {
  new (
    input: DeleteFunctionCodeSigningConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionCodeSigningConfigCommandInput,
    DeleteFunctionCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteFunctionCodeSigningConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionCodeSigningConfigCommandInput,
    DeleteFunctionCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteFunctionCodeSigningConfigCommand extends DeleteFunctionCodeSigningConfigCommand_base {
  protected static __types: {
    api: {
      input: DeleteFunctionCodeSigningConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionCodeSigningConfigCommandInput;
      output: DeleteFunctionCodeSigningConfigCommandOutput;
    };
  };
}
