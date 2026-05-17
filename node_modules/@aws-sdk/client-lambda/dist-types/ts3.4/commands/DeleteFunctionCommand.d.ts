import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  DeleteFunctionRequest,
  DeleteFunctionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteFunctionCommandInput extends DeleteFunctionRequest {}
export interface DeleteFunctionCommandOutput
  extends DeleteFunctionResponse,
    __MetadataBearer {}
declare const DeleteFunctionCommand_base: {
  new (
    input: DeleteFunctionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionCommandInput,
    DeleteFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteFunctionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteFunctionCommandInput,
    DeleteFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteFunctionCommand extends DeleteFunctionCommand_base {
  protected static __types: {
    api: {
      input: DeleteFunctionRequest;
      output: DeleteFunctionResponse;
    };
    sdk: {
      input: DeleteFunctionCommandInput;
      output: DeleteFunctionCommandOutput;
    };
  };
}
