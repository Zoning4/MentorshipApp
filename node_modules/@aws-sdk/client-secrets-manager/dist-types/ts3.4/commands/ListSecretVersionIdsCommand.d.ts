import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  ListSecretVersionIdsRequest,
  ListSecretVersionIdsResponse,
} from "../models/models_0";
import {
  SecretsManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SecretsManagerClient";
export { __MetadataBearer };
export { $Command };
export interface ListSecretVersionIdsCommandInput
  extends ListSecretVersionIdsRequest {}
export interface ListSecretVersionIdsCommandOutput
  extends ListSecretVersionIdsResponse,
    __MetadataBearer {}
declare const ListSecretVersionIdsCommand_base: {
  new (
    input: ListSecretVersionIdsCommandInput
  ): import("@smithy/core/client").CommandImpl<
    ListSecretVersionIdsCommandInput,
    ListSecretVersionIdsCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ListSecretVersionIdsCommandInput
  ): import("@smithy/core/client").CommandImpl<
    ListSecretVersionIdsCommandInput,
    ListSecretVersionIdsCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class ListSecretVersionIdsCommand extends ListSecretVersionIdsCommand_base {
  protected static __types: {
    api: {
      input: ListSecretVersionIdsRequest;
      output: ListSecretVersionIdsResponse;
    };
    sdk: {
      input: ListSecretVersionIdsCommandInput;
      output: ListSecretVersionIdsCommandOutput;
    };
  };
}
