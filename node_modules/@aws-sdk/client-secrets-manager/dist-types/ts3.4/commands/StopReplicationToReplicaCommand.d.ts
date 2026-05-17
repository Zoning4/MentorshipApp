import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  StopReplicationToReplicaRequest,
  StopReplicationToReplicaResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface StopReplicationToReplicaCommandInput
  extends StopReplicationToReplicaRequest {}
export interface StopReplicationToReplicaCommandOutput
  extends StopReplicationToReplicaResponse,
    __MetadataBearer {}
declare const StopReplicationToReplicaCommand_base: {
  new (
    input: StopReplicationToReplicaCommandInput
  ): import("@smithy/core/client").CommandImpl<
    StopReplicationToReplicaCommandInput,
    StopReplicationToReplicaCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: StopReplicationToReplicaCommandInput
  ): import("@smithy/core/client").CommandImpl<
    StopReplicationToReplicaCommandInput,
    StopReplicationToReplicaCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class StopReplicationToReplicaCommand extends StopReplicationToReplicaCommand_base {
  protected static __types: {
    api: {
      input: StopReplicationToReplicaRequest;
      output: StopReplicationToReplicaResponse;
    };
    sdk: {
      input: StopReplicationToReplicaCommandInput;
      output: StopReplicationToReplicaCommandOutput;
    };
  };
}
