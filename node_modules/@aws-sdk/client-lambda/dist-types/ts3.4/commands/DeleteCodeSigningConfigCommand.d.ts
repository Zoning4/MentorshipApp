import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  DeleteCodeSigningConfigRequest,
  DeleteCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface DeleteCodeSigningConfigCommandInput
  extends DeleteCodeSigningConfigRequest {}
export interface DeleteCodeSigningConfigCommandOutput
  extends DeleteCodeSigningConfigResponse,
    __MetadataBearer {}
declare const DeleteCodeSigningConfigCommand_base: {
  new (
    input: DeleteCodeSigningConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteCodeSigningConfigCommandInput,
    DeleteCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteCodeSigningConfigCommandInput
  ): import("@smithy/core/client").CommandImpl<
    DeleteCodeSigningConfigCommandInput,
    DeleteCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class DeleteCodeSigningConfigCommand extends DeleteCodeSigningConfigCommand_base {
  protected static __types: {
    api: {
      input: DeleteCodeSigningConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteCodeSigningConfigCommandInput;
      output: DeleteCodeSigningConfigCommandOutput;
    };
  };
}
