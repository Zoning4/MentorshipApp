import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  CreateCapacityProviderRequest,
  CreateCapacityProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateCapacityProviderCommandInput
  extends CreateCapacityProviderRequest {}
export interface CreateCapacityProviderCommandOutput
  extends CreateCapacityProviderResponse,
    __MetadataBearer {}
declare const CreateCapacityProviderCommand_base: {
  new (
    input: CreateCapacityProviderCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateCapacityProviderCommandInput,
    CreateCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateCapacityProviderCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateCapacityProviderCommandInput,
    CreateCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class CreateCapacityProviderCommand extends CreateCapacityProviderCommand_base {
  protected static __types: {
    api: {
      input: CreateCapacityProviderRequest;
      output: CreateCapacityProviderResponse;
    };
    sdk: {
      input: CreateCapacityProviderCommandInput;
      output: CreateCapacityProviderCommandOutput;
    };
  };
}
