import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  CheckpointDurableExecutionRequest,
  CheckpointDurableExecutionResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CheckpointDurableExecutionCommandInput
  extends CheckpointDurableExecutionRequest {}
export interface CheckpointDurableExecutionCommandOutput
  extends CheckpointDurableExecutionResponse,
    __MetadataBearer {}
declare const CheckpointDurableExecutionCommand_base: {
  new (
    input: CheckpointDurableExecutionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CheckpointDurableExecutionCommandInput,
    CheckpointDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CheckpointDurableExecutionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CheckpointDurableExecutionCommandInput,
    CheckpointDurableExecutionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class CheckpointDurableExecutionCommand extends CheckpointDurableExecutionCommand_base {
  protected static __types: {
    api: {
      input: CheckpointDurableExecutionRequest;
      output: CheckpointDurableExecutionResponse;
    };
    sdk: {
      input: CheckpointDurableExecutionCommandInput;
      output: CheckpointDurableExecutionCommandOutput;
    };
  };
}
