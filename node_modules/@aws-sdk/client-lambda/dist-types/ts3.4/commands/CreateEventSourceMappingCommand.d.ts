import { Command as $Command } from "@smithy/core/client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  CreateEventSourceMappingRequest,
  EventSourceMappingConfiguration,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateEventSourceMappingCommandInput
  extends CreateEventSourceMappingRequest {}
export interface CreateEventSourceMappingCommandOutput
  extends EventSourceMappingConfiguration,
    __MetadataBearer {}
declare const CreateEventSourceMappingCommand_base: {
  new (
    input: CreateEventSourceMappingCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateEventSourceMappingCommandInput,
    CreateEventSourceMappingCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateEventSourceMappingCommandInput
  ): import("@smithy/core/client").CommandImpl<
    CreateEventSourceMappingCommandInput,
    CreateEventSourceMappingCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): {
    [x: string]: unknown;
  };
};
export declare class CreateEventSourceMappingCommand extends CreateEventSourceMappingCommand_base {
  protected static __types: {
    api: {
      input: CreateEventSourceMappingRequest;
      output: EventSourceMappingConfiguration;
    };
    sdk: {
      input: CreateEventSourceMappingCommandInput;
      output: CreateEventSourceMappingCommandOutput;
    };
  };
}
