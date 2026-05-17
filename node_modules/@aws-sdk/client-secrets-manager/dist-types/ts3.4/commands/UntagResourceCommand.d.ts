import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { UntagResourceRequest } from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface UntagResourceCommandInput extends UntagResourceRequest {}
export interface UntagResourceCommandOutput extends __MetadataBearer {}
declare const UntagResourceCommand_base: {
  new (
    input: UntagResourceCommandInput
  ): import("@smithy/core/client").CommandImpl<
    UntagResourceCommandInput,
    UntagResourceCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UntagResourceCommandInput
  ): import("@smithy/core/client").CommandImpl<
    UntagResourceCommandInput,
    UntagResourceCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class UntagResourceCommand extends UntagResourceCommand_base {
  protected static __types: {
    api: {
      input: UntagResourceRequest;
      output: {};
    };
    sdk: {
      input: UntagResourceCommandInput;
      output: UntagResourceCommandOutput;
    };
  };
}
