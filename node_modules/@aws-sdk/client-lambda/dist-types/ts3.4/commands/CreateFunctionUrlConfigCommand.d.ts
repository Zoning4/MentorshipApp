import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  CreateFunctionUrlConfigRequest,
  CreateFunctionUrlConfigResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateFunctionUrlConfigCommandInput
  extends CreateFunctionUrlConfigRequest {}
export interface CreateFunctionUrlConfigCommandOutput
  extends CreateFunctionUrlConfigResponse,
    __MetadataBearer {}
declare const CreateFunctionUrlConfigCommand_base: {
  new (
    input: CreateFunctionUrlConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateFunctionUrlConfigCommandInput,
    CreateFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateFunctionUrlConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateFunctionUrlConfigCommandInput,
    CreateFunctionUrlConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class CreateFunctionUrlConfigCommand extends CreateFunctionUrlConfigCommand_base {
  protected static __types: {
    api: {
      input: CreateFunctionUrlConfigRequest;
      output: CreateFunctionUrlConfigResponse;
    };
    sdk: {
      input: CreateFunctionUrlConfigCommandInput;
      output: CreateFunctionUrlConfigCommandOutput;
    };
  };
}
