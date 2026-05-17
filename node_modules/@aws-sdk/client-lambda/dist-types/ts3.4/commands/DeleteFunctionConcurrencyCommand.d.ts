import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { DeleteFunctionConcurrencyRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteFunctionConcurrencyCommandInput
  extends DeleteFunctionConcurrencyRequest {}
export interface DeleteFunctionConcurrencyCommandOutput
  extends __MetadataBearer {}
declare const DeleteFunctionConcurrencyCommand_base: {
  new (
    input: DeleteFunctionConcurrencyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionConcurrencyCommandInput,
    DeleteFunctionConcurrencyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteFunctionConcurrencyCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionConcurrencyCommandInput,
    DeleteFunctionConcurrencyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteFunctionConcurrencyCommand extends DeleteFunctionConcurrencyCommand_base {
  protected static __types: {
    api: {
      input: DeleteFunctionConcurrencyRequest;
      output: {};
    };
    sdk: {
      input: DeleteFunctionConcurrencyCommandInput;
      output: DeleteFunctionConcurrencyCommandOutput;
    };
  };
}
