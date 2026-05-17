import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  CreateFunctionRequest,
  FunctionConfiguration,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
export interface CreateFunctionCommandOutput
  extends FunctionConfiguration,
    __MetadataBearer {}
declare const CreateFunctionCommand_base: {
  new (
    input: CreateFunctionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateFunctionCommandInput,
    CreateFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateFunctionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateFunctionCommandInput,
    CreateFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class CreateFunctionCommand extends CreateFunctionCommand_base {
  protected static __types: {
    api: {
      input: CreateFunctionRequest;
      output: FunctionConfiguration;
    };
    sdk: {
      input: CreateFunctionCommandInput;
      output: CreateFunctionCommandOutput;
    };
  };
}
