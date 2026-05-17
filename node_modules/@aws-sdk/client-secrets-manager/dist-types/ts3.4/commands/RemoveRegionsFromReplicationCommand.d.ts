import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RemoveRegionsFromReplicationRequest,
  RemoveRegionsFromReplicationResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface RemoveRegionsFromReplicationCommandInput
  extends RemoveRegionsFromReplicationRequest {}
export interface RemoveRegionsFromReplicationCommandOutput
  extends RemoveRegionsFromReplicationResponse,
    __MetadataBearer {}
declare const RemoveRegionsFromReplicationCommand_base: {
  new (
    input: RemoveRegionsFromReplicationCommandInput
  ): import("@smithy/core/client").CommandImpl<
    RemoveRegionsFromReplicationCommandInput,
    RemoveRegionsFromReplicationCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RemoveRegionsFromReplicationCommandInput
  ): import("@smithy/core/client").CommandImpl<
    RemoveRegionsFromReplicationCommandInput,
    RemoveRegionsFromReplicationCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class RemoveRegionsFromReplicationCommand extends RemoveRegionsFromReplicationCommand_base {
  protected static __types: {
    api: {
      input: RemoveRegionsFromReplicationRequest;
      output: RemoveRegionsFromReplicationResponse;
    };
    sdk: {
      input: RemoveRegionsFromReplicationCommandInput;
      output: RemoveRegionsFromReplicationCommandOutput;
    };
  };
}
