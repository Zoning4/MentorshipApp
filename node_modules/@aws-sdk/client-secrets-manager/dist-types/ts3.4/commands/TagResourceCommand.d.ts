import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { TagResourceRequest } from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface TagResourceCommandInput extends TagResourceRequest {}
export interface TagResourceCommandOutput extends __MetadataBearer {}
declare const TagResourceCommand_base: {
  new (
    input: TagResourceCommandInput
  ): import("@smithy/core/client").CommandImpl<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: TagResourceCommandInput
  ): import("@smithy/core/client").CommandImpl<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class TagResourceCommand extends TagResourceCommand_base {
  protected static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
