import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  DeleteCapacityProviderRequest,
  DeleteCapacityProviderResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteCapacityProviderCommandInput
  extends DeleteCapacityProviderRequest {}
export interface DeleteCapacityProviderCommandOutput
  extends DeleteCapacityProviderResponse,
    __MetadataBearer {}
declare const DeleteCapacityProviderCommand_base: {
  new (
    input: DeleteCapacityProviderCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteCapacityProviderCommandInput,
    DeleteCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteCapacityProviderCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteCapacityProviderCommandInput,
    DeleteCapacityProviderCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteCapacityProviderCommand extends DeleteCapacityProviderCommand_base {
  protected static __types: {
    api: {
      input: DeleteCapacityProviderRequest;
      output: DeleteCapacityProviderResponse;
    };
    sdk: {
      input: DeleteCapacityProviderCommandInput;
      output: DeleteCapacityProviderCommandOutput;
    };
  };
}
