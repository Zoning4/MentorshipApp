import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  DescribeSecretRequest,
  DescribeSecretResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface DescribeSecretCommandInput extends DescribeSecretRequest {}
export interface DescribeSecretCommandOutput
  extends DescribeSecretResponse,
    __MetadataBearer {}
declare const DescribeSecretCommand_base: {
  new (
    input: DescribeSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DescribeSecretCommandInput,
    DescribeSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeSecretCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DescribeSecretCommandInput,
    DescribeSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DescribeSecretCommand extends DescribeSecretCommand_base {
  protected static __types: {
    api: {
      input: DescribeSecretRequest;
      output: DescribeSecretResponse;
    };
    sdk: {
      input: DescribeSecretCommandInput;
      output: DescribeSecretCommandOutput;
    };
  };
}
