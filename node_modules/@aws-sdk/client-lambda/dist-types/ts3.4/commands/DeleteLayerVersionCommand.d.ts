import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { DeleteLayerVersionRequest } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteLayerVersionCommandInput
  extends DeleteLayerVersionRequest {}
export interface DeleteLayerVersionCommandOutput extends __MetadataBearer {}
declare const DeleteLayerVersionCommand_base: {
  new (
    input: DeleteLayerVersionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteLayerVersionCommandInput,
    DeleteLayerVersionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLayerVersionCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteLayerVersionCommandInput,
    DeleteLayerVersionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteLayerVersionCommand extends DeleteLayerVersionCommand_base {
  protected static __types: {
    api: {
      input: DeleteLayerVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLayerVersionCommandInput;
      output: DeleteLayerVersionCommandOutput;
    };
  };
}
