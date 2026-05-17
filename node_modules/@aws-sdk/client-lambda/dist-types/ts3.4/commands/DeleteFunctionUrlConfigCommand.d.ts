import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { DeleteFunctionUrlConfigRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteFunctionUrlConfigCommandInput
  extends DeleteFunctionUrlConfigRequest {}
export interface DeleteFunctionUrlConfigCommandOutput
  extends __MetadataBearer {}
declare const DeleteFunctionUrlConfigCommand_base: {
  new (
    input: DeleteFunctionUrlConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionUrlConfigCommandInput,
    DeleteFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteFunctionUrlConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionUrlConfigCommandInput,
    DeleteFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteFunctionUrlConfigCommand extends DeleteFunctionUrlConfigCommand_base {
  protected static __types: {
    api: {
      input: DeleteFunctionUrlConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionUrlConfigCommandInput;
      output: DeleteFunctionUrlConfigCommandOutput;
    };
  };
}
